<script setup lang="ts">
import { ref } from "vue";
import { Menu, X, MapPin, ArrowLeft, ChevronDown } from "lucide-vue-next";
import type { NavLink } from "../../types/landing";

const navLinks: NavLink[] = [
  { label: "درباره Mapiq", href: "#intro" },
  { label: "ویژگی‌ها", href: "#features" },
  { label: "نحوه کار", href: "#how" },
  { label: "دموی نقشه", href: "#demo" },
];

const cityLinks = [
  { label: "نقشه تهران", href: "https://mapiq.ir" },
  { label: "نقشه مشهد", href: "https://mapiq.ir" },
  { label: "نقشه اصفهان", href: "https://mapiq.ir" },
  { label: "نقشه شیراز", href: "https://mapiq.ir" },
  { label: "نقشه تبریز", href: "https://mapiq.ir" },
  { label: "نقشه سایر شهرهای ایران", href: "https://mapiq.ir" },
];

const isMobileMenuOpen = ref(false);
const isMobileCitiesOpen = ref(false);

function closeMenu() {
  isMobileMenuOpen.value = false;
  isMobileCitiesOpen.value = false;
}
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-line bg-ink/70 backdrop-blur-xl"
  >
    <div
      class="mx-auto flex h-[72px] items-center justify-between px-5 sm:px-7"
    >
      <a
        href="https://mapiq.ir"
        class="flex items-center gap-2.5 text-[1.15rem] font-extrabold tracking-tight"
      >
        <span
          class="flex size-8 items-center justify-center rounded-[9px] bg-[#f55719] text-ink"
        >
          <MapPin class="size-[18px]" stroke-width="2.4" />
        </span>
        Mapiq
      </a>

      <!-- Desktop Navigation -->

      <nav class="hidden items-center gap-8 md:flex">
        <!-- City Selection Dropdown (Hover-based) -->
        <div class="relative group py-2">
          <a
            href="https://mapiq.ir"
            class="flex items-center gap-1.5 text-[0.92rem] font-medium text-muted transition-colors group-hover:text-text"
          >
            انتخاب شهر
            <ChevronDown
              class="size-4 transition-transform duration-200 group-hover:rotate-180"
            />
          </a>

          <!-- Dropdown menu panel -->
          <div
            class="absolute right-0 top-full pt-2 w-48 opacity-0 translate-y-2 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto"
          >
            <div
              class="overflow-hidden rounded-xl border border-line bg-surface p-1.5 shadow-xl backdrop-blur-xl"
            >
              <a
                v-for="city in cityLinks"
                :key="city.href"
                :href="city.href"
                class="block rounded-lg px-3.5 py-2.5 text-[0.88rem] font-medium text-muted transition-colors hover:bg-surface-2 hover:text-[#f55719]"
              >
                {{ city.label }}
              </a>
            </div>
          </div>
        </div>
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
          href="https://mapiq.ir"
          class="hidden rounded-[10px] border border-line-strong px-5 py-2.5 text-[0.92rem] font-semibold transition-colors hover:bg-surface-2 md:inline-flex"
        >
          ورود
        </a>
        <a
          href="https://mapiq.ir"
          class="inline-flex items-center gap-2 rounded-[10px] bg-[#fa6e28] px-5 py-2.5 text-[0.92rem] font-semibold text-[#2b1002] transition-all hover:bg-[#ff8e60] hover:shadow-[0_8px_24px_-8px_rgba(255,122,69,0.55)] active:scale-[0.97]"
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
        class="border-b border-line py-3.5 text-[1.05rem] font-semibold"
        @click="closeMenu"
      >
        {{ link.label }}
      </a>

      <!-- Mobile City Accordion/Toggle -->
      <div class="border-b border-line py-3.5">
        <button
          class="flex w-full items-center justify-between text-[1.05rem] font-semibold"
          @click="isMobileCitiesOpen = !isMobileCitiesOpen"
        >
          انتخاب شهر
          <ChevronDown
            class="size-5 transition-transform duration-200"
            :class="{ 'rotate-180': isMobileCitiesOpen }"
          />
        </button>
        <div v-if="isMobileCitiesOpen" class="mt-3 flex flex-col gap-2 pr-3">
          <a
            v-for="city in cityLinks"
            :key="city.href"
            :href="city.href"
            class="py-2 text-[0.95rem] text-muted transition-colors hover:text-[#f55719]"
            @click="closeMenu"
          >
            {{ city.label }}
          </a>
        </div>
      </div>

      <div class="mt-4 flex flex-col gap-2.5">
        <a
          href="https://mapiq.ir"
          class="rounded-[10px] border border-line-strong px-5 py-2.5 text-center text-[0.92rem] font-semibold"
          @click="closeMenu"
        >
          ورود
        </a>
        <a
          href="https://mapiq.ir"
          class="flex items-center justify-center gap-2 rounded-[10px] bg-[#f85604] px-5 py-2.5 text-center text-[0.92rem] font-semibold text-[#2b1002]"
          @click="closeMenu"
        >
          شروع کنید
          <ArrowLeft class="size-4" />
        </a>
      </div>
    </div>
  </header>
</template>
