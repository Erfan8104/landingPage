<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next'
</script>

<template>
  <section class="py-20 sm:py-24 lg:py-28">
    <div class="mx-auto max-w-[1180px] px-5 sm:px-7">
      <div
        v-reveal
        class="relative overflow-hidden rounded-[28px] border border-line-strong bg-surface px-6 py-16 text-center sm:px-10 sm:py-20"
      >
        <div
          class="pointer-events-none absolute inset-0"
          style="
            background:
              radial-gradient(circle at 20% 20%, rgba(47, 230, 196, 0.14), transparent 50%),
              radial-gradient(circle at 85% 80%, rgba(255, 122, 69, 0.12), transparent 50%);
          "
        />
        <div
          class="pointer-events-none absolute inset-0 bg-cartographic-grid"
          style="
            background-size: 48px 48px;
            -webkit-mask-image: radial-gradient(circle at 50% 50%, #000 0%, transparent 75%);
            mask-image: radial-gradient(circle at 50% 50%, #000 0%, transparent 75%);
          "
        />

        <h2 class="relative mb-4 text-[1.7rem] font-extrabold tracking-tight sm:text-[2.5rem]">
          آماده‌اید اولین نقشه خود را بسازید؟
        </h2>
        <p class="relative mb-8 text-[1.02rem] text-muted">همین حالا وارد Mapiq شوید و موقعیت خود را ترسیم کنید.</p>

        <a
          href="/map"
          class="relative inline-flex items-center gap-2 rounded-xl bg-marker px-7 py-4 text-[1rem] font-semibold text-[#2b1002] transition-all hover:bg-[#ff8e60] hover:shadow-[0_8px_24px_-8px_rgba(255,122,69,0.55)] active:scale-[0.97]"
        >
          شروع کنید
          <ArrowLeft class="size-[17px]" stroke-width="2.3" />
        </a>
      </div>
    </div>
  </section>
</template>
