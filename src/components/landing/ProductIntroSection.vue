<script setup lang="ts">
import { Search, PenTool, Share2 } from 'lucide-vue-next'
import type { IntroItem } from '../../types/landing'

const introItems: IntroItem[] = [
  {
    index: '۰۱',
    icon: Search,
    title: 'پیدا کردن موقعیت',
    description: 'موقعیت موردنظر خود را با جست‌وجو روی نقشه به‌سرعت پیدا کنید.',
    accent: 'teal',
  },
  {
    index: '۰۲',
    icon: PenTool,
    title: 'ترسیم',
    description: 'نقطه، خط یا محدوده موردنظر خود را با ابزارهای ترسیم روی نقشه مشخص کنید.',
    accent: 'marker',
  },
  {
    index: '۰۳',
    icon: Share2,
    title: 'اشتراک‌گذاری',
    description: 'اطلاعات و محدوده موردنظر خود را با دیگران به اشتراک بگذارید.',
    accent: 'violet',
  },
]

const accentClasses: Record<IntroItem['accent'], string> = {
  teal: 'bg-teal/12 text-teal',
  marker: 'bg-marker/12 text-marker',
  violet: 'bg-[rgba(160,180,255,0.12)] text-[#a9b8ff]',
}
</script>

<template>
  <section id="intro" class="py-20 sm:py-24 lg:py-28">
    <div class="mx-auto max-w-[1180px] px-5 sm:px-7">
      <div v-reveal class="mx-auto mb-14 max-w-[640px] text-center">
        <span class="mb-4 inline-flex items-center gap-2 rounded-full border border-teal/25 bg-teal/10 px-3.5 py-1.5 font-mono text-[0.76rem] tracking-wide text-teal">
          <span class="size-1.5 rounded-full bg-teal" />
          درباره Mapiq
        </span>
        <h2 class="mb-3.5 text-[1.6rem] font-extrabold tracking-tight sm:text-[2.35rem]">
          سه قابلیت، یک تجربه ساده
        </h2>
        <p class="text-[1.02rem] text-muted">
          Mapiq اطلاعات مکانی را از پیدا کردن تا اشتراک‌گذاری، در یک مسیر ساده و روان کنار هم قرار می‌دهد.
        </p>
      </div>

      <div class="grid gap-6 lg:grid-cols-3">
        <div
          v-for="(item, i) in introItems"
          :key="item.title"
          v-reveal="i * 100"
          class="rounded-[22px] border border-line bg-surface p-8 transition-all hover:-translate-y-1 hover:border-line-strong hover:bg-surface-2"
        >
          <div class="mb-5 font-mono text-[0.75rem] text-muted-2">{{ item.index }}</div>
          <div class="mb-5 flex size-[46px] items-center justify-center rounded-xl" :class="accentClasses[item.accent]">
            <component :is="item.icon" class="size-[22px]" stroke-width="2.2" />
          </div>
          <h3 class="mb-2.5 text-[1.15rem] font-bold">{{ item.title }}</h3>
          <p class="text-[0.94rem] text-muted">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
