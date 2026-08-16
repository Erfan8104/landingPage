<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Search, PenTool, LayoutGrid } from 'lucide-vue-next'
import type { DemoFeature } from '../../types/landing'

const demoFeatures: DemoFeature[] = [
  {
    icon: Search,
    title: 'جست‌وجوی موقعیت',
    description: 'مکان موردنظر را با جست‌وجوی نام یا آدرس پیدا کنید.',
  },
  {
    icon: PenTool,
    title: 'ترسیم محدوده',
    description: 'با ابزار Polygon، محدوده دلخواه را روی نقشه بکشید.',
  },
  {
    icon: LayoutGrid,
    title: 'نمایش اطلاعات محدوده',
    description: 'مساحت، مختصات و جزئیات محدوده به‌صورت خودکار نمایش داده می‌شود.',
  },
]

// The demo polygon only starts drawing once this section scrolls into view.
const demoPanel = ref<HTMLElement | null>(null)
const hasDrawn = ref(false)

onMounted(() => {
  if (!demoPanel.value) return
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          hasDrawn.value = true
          io.disconnect()
        }
      }
    },
    { threshold: 0.3 },
  )
  io.observe(demoPanel.value)
})
</script>

<template>
  <section id="demo" class="py-20 sm:py-24 lg:py-28">
    <div class="mx-auto grid max-w-[1180px] items-center gap-12 px-5 sm:px-7 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
      <div>
        <div v-reveal class="mb-8 text-right">
          <span class="mb-4 inline-flex items-center gap-2 rounded-full border border-teal/25 bg-teal/10 px-3.5 py-1.5 font-mono text-[0.76rem] tracking-wide text-teal">
            <span class="size-1.5 rounded-full bg-teal" />
            دموی نقشه
          </span>
          <h2 class="mb-3.5 text-[1.6rem] font-extrabold tracking-tight sm:text-[2.35rem]">
            قابلیت نقشه را ببینید
          </h2>
          <p class="text-[1.02rem] text-muted">
            یک نمای ساده از جریان کار Mapiq: انتخاب موقعیت، ترسیم محدوده و نمایش اطلاعات آن.
          </p>
        </div>

        <div
          v-for="(feature, i) in demoFeatures"
          :key="feature.title"
          v-reveal="i * 100"
          class="flex gap-4 border-b border-line py-4.5 first:pt-0"
        >
          <div class="flex size-[38px] shrink-0 items-center justify-center rounded-[10px] bg-surface-2 text-teal">
            <component :is="feature.icon" class="size-[18px]" stroke-width="2.2" />
          </div>
          <div>
            <h4 class="mb-1 text-[0.98rem] font-bold">{{ feature.title }}</h4>
            <p class="text-[0.87rem] text-muted">{{ feature.description }}</p>
          </div>
        </div>
      </div>

      <div ref="demoPanel" v-reveal class="overflow-hidden rounded-[22px] border border-line bg-surface">
        <div class="flex items-center gap-2.5 border-b border-line px-4.5 py-3.5">
          <div class="flex flex-1 items-center gap-2.5 rounded-[9px] bg-surface-2 px-3.5 py-2.5 text-[0.85rem] text-muted">
            <Search class="size-[15px]" />
            جست‌وجوی موقعیت…
          </div>
        </div>

        <div
          class="relative aspect-[16/11]"
          style="
            background:
              radial-gradient(circle at 30% 30%, rgba(47, 230, 196, 0.08), transparent 50%),
              linear-gradient(160deg, #12303d, #0c2027);
          "
        >
          <div
            class="absolute inset-0"
            style="
              background-image:
                linear-gradient(rgba(234, 242, 245, 0.045) 1px, transparent 1px),
                linear-gradient(90deg, rgba(234, 242, 245, 0.045) 1px, transparent 1px);
              background-size: 30px 30px;
            "
          />

          <svg class="absolute inset-0 h-full w-full" viewBox="0 0 400 275" preserveAspectRatio="none">
            <polygon
              points="90,90 230,60 300,150 210,220 70,190"
              class="fill-teal/10 stroke-teal"
              style="stroke-width: 2; stroke-linejoin: round; stroke-dasharray: 560"
              :style="{ strokeDashoffset: hasDrawn ? 0 : 560, transition: 'stroke-dashoffset 2s cubic-bezier(.65,0,.35,1)' }"
            />
          </svg>

          <div
            class="absolute inset-x-4 bottom-4 flex flex-wrap items-center justify-between gap-2.5 rounded-xl border border-line-strong bg-ink/90 px-4 py-3.5 backdrop-blur-md"
          >
            <div class="flex flex-wrap gap-5">
              <div>
                <div class="ltr-nums text-[0.95rem] font-semibold">۲٫۴ هکتار</div>
                <div class="text-[0.68rem] text-muted">مساحت</div>
              </div>
              <div>
                <div class="ltr-nums text-[0.95rem] font-semibold">35.70° N</div>
                <div class="text-[0.68rem] text-muted">عرض جغرافیایی</div>
              </div>
              <div>
                <div class="ltr-nums text-[0.95rem] font-semibold">51.40° E</div>
                <div class="text-[0.68rem] text-muted">طول جغرافیایی</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
