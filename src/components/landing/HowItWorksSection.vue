<script setup lang="ts">
import type { HowItWorksStep } from '../../types/landing'

const steps: HowItWorksStep[] = [
  {
    step: '01',
    title: 'موقعیت را پیدا کنید',
    description: 'محل موردنظر خود را جست‌وجو یا روی نقشه انتخاب کنید.',
  },
  {
    step: '02',
    title: 'محدوده را ترسیم کنید',
    description: 'با ابزارهای ترسیم، نقطه، خط یا محدوده موردنظر را مشخص کنید.',
  },
  {
    step: '03',
    title: 'اطلاعات را اضافه کنید',
    description: 'جزئیات و اطلاعات مکانی موردنیاز را به محدوده اضافه کنید.',
  },
  {
    step: '04',
    title: 'به اشتراک بگذارید',
    description: 'محدوده یا اطلاعات را با تیم یا دیگران به اشتراک بگذارید.',
  },
]
</script>

<template>
  <section id="how" class="border-y border-line bg-surface py-16 sm:py-20 lg:py-24">
    <div class="mx-auto max-w-[1180px] px-5 sm:px-7">
      <div v-reveal class="mx-auto mb-14 max-w-[640px] text-center">
        <span class="mb-4 inline-flex items-center gap-2 rounded-full border border-teal/25 bg-teal/10 px-3.5 py-1.5 font-mono text-[0.76rem] tracking-wide text-teal">
          <span class="size-1.5 rounded-full bg-teal" />
          نحوه کار
        </span>
        <h2 class="mb-3.5 text-[1.6rem] font-extrabold tracking-tight sm:text-[2.35rem]">
          در چهار مرحله ساده
        </h2>
        <p class="text-[1.02rem] text-muted">بدون نیاز به دانش تخصصی، در چند دقیقه شروع کنید.</p>
      </div>

      <div class="relative grid gap-9 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        <div class="pointer-events-none absolute inset-x-0 top-[23px] hidden h-px bg-line-strong lg:block" />

        <div v-for="(item, i) in steps" :key="item.step" v-reveal="i * 100" class="relative">
          <div
            class="relative z-10 mb-5 flex size-[46px] items-center justify-center rounded-full border border-line-strong bg-ink font-mono font-semibold text-teal"
          >
            {{ item.step }}
          </div>
          <h4 class="mb-2 text-[1.03rem] font-bold">{{ item.title }}</h4>
          <p class="text-[0.9rem] text-muted">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
