<script setup lang="ts">
// お問い合わせフォームの1行。会社情報の台帳と同じく、左に項目名、右の5列目から入力欄を置いて細い罫線で区切る。
// 入力中は下の罫線を左から濃く引き、いまどの行に入力しているかを示す。
// 複数行の入力欄は文字の基準線が下端にあるため、項目名は上端に置き、余白で入力欄の1行目と高さをそろえる。
const props = defineProps<{ label: string; for: string }>();
</script>

<template>
  <div
    class="relative grid grid-cols-12 gap-x-6 gap-y-2 border-b border-brand-ink/15 py-5 after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:origin-left after:scale-x-0 after:bg-brand-ink after:transition-transform after:duration-700 after:ease-brand focus-within:after:scale-x-100 motion-reduce:after:transition-none md:py-6"
  >
    <label :for="props.for" class="col-span-12 text-sm font-medium tracking-[0.12em] text-brand-ink/60 md:col-span-4 md:pt-2.5">
      {{ label }}
    </label>
    <div class="col-span-12 md:col-start-5 md:col-end-13">
      <slot />
    </div>
  </div>
</template>
