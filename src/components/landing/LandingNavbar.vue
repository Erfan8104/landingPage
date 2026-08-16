<script setup lang="ts">
import { ref } from 'vue'
import { Menu, X, MapPin, ArrowLeft } from 'lucide-vue-next'
import type { NavLink } from '../../types/landing'

const navLinks: NavLink[] = [
  { label: 'درباره Mapiq', href: '#intro' },
  { label: 'ویژگی‌ها', href: '#features' },
  { label: 'نحوه کار', href: '#how' },
  { label: 'دموی نقشه', href: '#demo' },
]

const isMobileMenuOpen = ref(false)

function closeMenu() {
  isMobileMenuOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-line bg-ink/70 backdrop-blur-xl">
    <div class="mx-auto flex h-[72px] max-w-[1180px] items-center justify-between px-5 sm:px-7">
      <a href="#" class="flex items-center gap-2.5 text-[1.15rem] font-extrabold tracking-tight">
        <span class="flex size-8 items-center justify-center rounded-[9px] bg-gradient-to-br from-teal to-teal-dim text-ink">
          <MapPin class="size-[18px]" stroke-width="2.4" />
        </span>
        Mapiq
      </a>

      <nav class="hidden items-center gap-9 md:flex">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-[0.92rem] font-medium text-muted transition-colors hover:text-text"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="flex items-center gap-3.5">
        <a
          href="/login"
          class="hidden rounded-[10px] border border-line-strong px-5 py-2.5 text-[0.92rem] font-semibold transition-colors hover:bg-surface-2 md:inline-flex"
        >
          ورود
        </a>
        <a
          href="/map"
          class="inline-flex items-center gap-2 rounded-[10px] bg-teal px-5 py-2.5 text-[0.92rem] font-semibold text-[#062521] transition-all hover:bg-[#4af0d2] hover:shadow-[0_8px_24px_-8px_rgba(47,230,196,0.55)] active:scale-[0.97]"
        >
          شروع کنید
        </a>
        <button
          class="flex items-center justify-center rounded-[9px] border border-line-strong p-2 text-text md:hidden"
          aria-label="باز کردن منو"
          :aria-expanded="isMobileMenuOpen"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <Menu v-if="!isMobileMenuOpen" class="size-5" />
          <X v-else class="size-5" />
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div
      v-if="isMobileMenuOpen"
      class="flex flex-col gap-1.5 border-t border-line bg-ink px-5 py-6 md:hidden"
    >
      <a
        v-for="link in navLinks"
        :key="link.href"
        :href="link.href"
        class="border-b border-line py-4 text-[1.05rem] font-semibold"
        @click="closeMenu"
      >
        {{ link.label }}
      </a>
      <div class="mt-4 flex flex-col gap-2.5">
        <a
          href="/login"
          class="rounded-[10px] border border-line-strong px-5 py-2.5 text-center text-[0.92rem] font-semibold"
          @click="closeMenu"
        >
          ورود
        </a>
        <a
          href="/map"
          class="flex items-center justify-center gap-2 rounded-[10px] bg-teal px-5 py-2.5 text-center text-[0.92rem] font-semibold text-[#062521]"
          @click="closeMenu"
        >
          شروع کنید
          <ArrowLeft class="size-4" />
        </a>
      </div>
    </div>
  </header>
</template>
