<script setup lang="ts">
import { Waypoints } from 'lucide-vue-next'

withDefaults(
  defineProps<{
    /** Milliseconds before the polygon starts drawing itself in. */
    delay?: number
  }>(),
  { delay: 400 },
)
</script>

<template>
  <div
    class="relative aspect-square overflow-hidden rounded-[22px] border border-line-strong shadow-[0_30px_60px_-25px_rgba(0,0,0,0.55)]"
    style="
      background:
        radial-gradient(circle at 25% 20%, rgba(47, 230, 196, 0.1), transparent 45%),
        radial-gradient(circle at 80% 85%, rgba(255, 122, 69, 0.09), transparent 45%),
        linear-gradient(160deg, #123443 0%, #0d2530 55%, #0a1e28 100%);
    "
  >
    <!-- cartographic grid -->
    <div
      class="absolute inset-0"
      style="
        background-image:
          linear-gradient(rgba(234, 242, 245, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(234, 242, 245, 0.05) 1px, transparent 1px);
        background-size: 36px 36px;
      "
    />

    <!-- contour rings -->
    <div class="absolute -right-[90px] -top-[60px] size-[340px] rounded-full border border-teal/15" />
    <div class="absolute -right-[30px] top-5 size-[230px] rounded-full border border-teal/15" />
    <div class="absolute -left-5 -bottom-[30px] size-[150px] rounded-full border border-teal/15" />

    <!-- animated polygon -->
    <svg class="absolute inset-0 h-full w-full" viewBox="0 0 400 400" preserveAspectRatio="none">
      <polygon
        points="120,140 260,110 320,220 230,300 100,260"
        class="fill-teal/10 stroke-teal mapiq-poly"
        :style="{ animationDelay: `${delay}ms` }"
      />
    </svg>

    <!-- marker -->
    <div
      class="absolute right-[30%] top-[38%] flex size-[34px] origin-bottom items-center justify-center"
      style="animation: mapiq-drop 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) backwards; animation-delay: 2.2s"
    >
      <div class="flex size-[30px] rotate-45 items-center justify-center rounded-[50%_50%_50%_0] bg-marker shadow-[0_6px_16px_-4px_rgba(0,0,0,0.5)]">
        <div class="size-[9px] -rotate-45 rounded-full bg-[#2B1002]" />
      </div>
    </div>

    <!-- coordinate readout -->
    <div
      class="absolute left-[22px] top-[22px] flex flex-col gap-0.5 rounded-[10px] border border-line-strong bg-ink/85 px-3.5 py-2.5 text-[0.72rem] text-teal backdrop-blur-md"
      style="animation: mapiq-fadein 0.6s backwards; animation-delay: 3s"
    >
      <span class="text-[0.65rem] text-muted">مختصات</span>
      <span class="ltr-nums">35.7219° N, 51.3347° E</span>
    </div>

    <!-- area readout -->
    <div
      class="absolute bottom-[18px] left-[18px] flex items-center gap-2.5 rounded-xl border border-line-strong bg-ink/85 px-4 py-3 backdrop-blur-md"
      style="animation: mapiq-fadein 0.6s backwards; animation-delay: 3.1s"
    >
      <Waypoints class="size-[18px] text-marker" />
      <div>
        <div class="ltr-nums text-sm font-semibold">۱٫۸ هکتار</div>
        <div class="text-[0.7rem] text-muted">مساحت محدوده</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mapiq-poly {
  stroke-width: 2;
  stroke-linejoin: round;
  stroke-dasharray: 520;
  stroke-dashoffset: 520;
  animation-name: mapiq-draw;
  animation-duration: 2.6s;
  animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1);
  animation-fill-mode: forwards;
}
@keyframes mapiq-draw {
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes mapiq-drop {
  0% {
    transform: translateY(-40px) scale(0.5);
    opacity: 0;
  }
  100% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}
@keyframes mapiq-fadein {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@media (prefers-reduced-motion: reduce) {
  svg polygon,
  .absolute[style*='mapiq-drop'],
  .absolute[style*='mapiq-fadein'] {
    animation: none !important;
    opacity: 1 !important;
    stroke-dashoffset: 0 !important;
  }
}
</style>
