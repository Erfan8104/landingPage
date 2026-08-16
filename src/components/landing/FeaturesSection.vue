<script setup lang="ts">
import { Search, PenTool, MapPin, Layers, CheckCircle2, Share2 } from 'lucide-vue-next'
import type { FeatureItem } from '../../types/landing'

const features: FeatureItem[] = [
  {
    icon: Search,
    title: 'جست‌وجوی موقعیت',
    description: 'هر مکانی را به‌سرعت روی نقشه پیدا کنید.',
  },
  {
    icon: PenTool,
    title: 'ابزارهای ترسیم',
    description: 'نقطه، خط و محدوده را با ابزارهای ساده ترسیم کنید.',
  },
  {
    icon: MapPin,
    title: 'Marker',
    description: 'نقاط موردنظر را روی نقشه علامت‌گذاری کنید.',
  },
  {
    icon: Layers,
    title: 'مدیریت لایه‌ها',
    description: 'موارد ترسیم‌شده را در قالب لایه‌های جدا مدیریت کنید.',
  },
  {
    icon: CheckCircle2,
    title: 'مدیریت محدوده‌ها',
    description: 'محدوده‌های ذخیره‌شده را مشاهده و ویرایش کنید.',
  },
  {
    icon: Share2,
    title: 'اشتراک‌گذاری',
    description: 'اطلاعات مکانی را با تیم یا دیگران به اشتراک بگذارید.',
  },
]
</script>

<template>
  <section id="features" class="border-y border-line bg-surface py-20 sm:py-24 lg:py-28">
    <div class="mx-auto max-w-[1180px] px-5 sm:px-7">
      <div v-reveal class="mx-auto mb-14 max-w-[640px] text-center">
        <span class="mb-4 inline-flex items-center gap-2 rounded-full border border-teal/25 bg-teal/10 px-3.5 py-1.5 font-mono text-[0.76rem] tracking-wide text-teal">
          <span class="size-1.5 rounded-full bg-teal" />
          ویژگی‌ها
        </span>
        <h2 class="mb-3.5 text-[1.6rem] font-extrabold tracking-tight sm:text-[2.35rem]">
          همه‌چیز برای کار با اطلاعات مکانی
        </h2>
        <p class="text-[1.02rem] text-muted">ابزارهایی که برای پیدا کردن، ترسیم و مدیریت موقعیت‌ها نیاز دارید.</p>
      </div>

      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(feature, i) in features"
          :key="feature.title"
          v-reveal="(i % 3) * 100"
          class="rounded-[14px] border border-line bg-ink p-6.5 transition-all hover:-translate-y-1 hover:border-teal/30"
        >
          <component :is="feature.icon" class="mb-4 size-5 text-teal" stroke-width="2.2" />
          <h4 class="mb-2 text-[1rem] font-bold">{{ feature.title }}</h4>
          <p class="text-[0.88rem] text-muted">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
