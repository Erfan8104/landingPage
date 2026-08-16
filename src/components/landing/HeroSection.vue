<script setup lang="ts">
import { ArrowLeft, Search, PenTool } from 'lucide-vue-next'
import MapVisual from './MapVisual.vue'
</script>

<template>
  <section class="relative py-14 sm:py-20 lg:py-24">
    <div class="mx-auto grid max-w-[1180px] items-center gap-12 px-5 sm:px-7 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
      <div>
        <span
          class="mb-6 inline-flex items-center gap-2 rounded-full border border-teal/25 bg-teal/10 px-3.5 py-1.5 font-mono text-[0.76rem] tracking-wide text-teal"
        >
          <span class="size-1.5 animate-pulse rounded-full bg-teal shadow-[0_0_0_4px_rgba(47,230,196,0.18)]" />
          پلتفرم نقشه‌محور
        </span>

        <h1 class="mb-5 text-[2.1rem] font-extrabold leading-[1.22] tracking-tight sm:text-[2.8rem] lg:text-[3.55rem]">
          موقعیت را پیدا کن،<br />
          <span class="text-teal">محدوده را ترسیم کن</span><br />
          و با دیگران به اشتراک بگذار.
        </h1>

        <p class="mb-8 max-w-[520px] text-[1.08rem] text-muted">
          Mapiq به شما کمک می‌کند تا روی نقشه جست‌وجو کنید، نقطه و محدوده موردنظرتان را با
          ابزارهای ترسیم مشخص کنید و اطلاعات مکانی را به‌سادگی با دیگران به اشتراک بگذارید.
        </p>

        <div class="mb-10 flex flex-wrap items-center gap-3.5">
          <a
            href="/map"
            class="inline-flex items-center gap-2 rounded-xl bg-marker px-7 py-4 text-[1rem] font-semibold text-[#2b1002] transition-all hover:bg-[#ff8e60] hover:shadow-[0_8px_24px_-8px_rgba(255,122,69,0.55)] active:scale-[0.97]"
          >
            شروع کنید
            <ArrowLeft class="size-[17px]" stroke-width="2.3" />
          </a>
          <a
            href="#demo"
            class="inline-flex items-center rounded-xl border border-line-strong px-7 py-4 text-[1rem] font-semibold transition-colors hover:bg-surface-2"
          >
            مشاهده دمو
          </a>
        </div>

        <div class="flex flex-wrap gap-7">
          <div class="flex items-center gap-2.5 text-[0.85rem] text-muted-2">
            <Search class="size-4 shrink-0 text-teal" stroke-width="2.2" />
            جست‌وجو و پیدا کردن موقعیت
          </div>
          <div class="flex items-center gap-2.5 text-[0.85rem] text-muted-2">
            <PenTool class="size-4 shrink-0 text-teal" stroke-width="2.2" />
            ابزارهای ترسیم نقطه، خط و محدوده
          </div>
        </div>
      </div>

      <div class="order-first mx-auto w-full max-w-[440px] lg:order-last lg:max-w-none">
        <MapVisual :delay="400" />
      </div>
    </div>
  </section>
</template>
