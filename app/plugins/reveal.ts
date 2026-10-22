// v-reveal：画面外にある要素を待機させ、画面に入ったら浮かび上がらせる（見た目は main.css で指定）。
export default defineNuxtPlugin((nuxtApp) => {
  // 監視は1つだけ作り、すべての要素で共有する。
  let observer: IntersectionObserver | undefined;

  nuxtApp.vueApp.directive<HTMLElement>("reveal", {
    mounted(el) {
      // 動きを減らす設定のときと、最初から画面内にある要素は演出しない。
      const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion || el.getBoundingClientRect().top < innerHeight) return;

      observer ??= new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;

            (entry.target as HTMLElement).dataset.reveal = "shown";
            observer?.unobserve(entry.target);
          }
        },
        { rootMargin: "0px 0px -10% 0px" },
      );

      el.dataset.reveal = "pending";
      observer.observe(el);
    },

    unmounted(el) {
      observer?.unobserve(el);
    },
  });
});
