<script setup lang="ts">
import { MapPin } from 'lucide-vue-next'
</script>

<template>
  <footer class="border-t border-line py-14">
    <div class="mx-auto max-w-[1180px] px-5 sm:px-7">
      <div class="mb-10 flex flex-wrap items-start justify-between gap-9">
        <div>
          <a href="#" class="flex items-center gap-2.5 text-[1.15rem] font-extrabold tracking-tight">
            <span class="flex size-8 items-center justify-center rounded-[9px] bg-gradient-to-br from-teal to-teal-dim text-ink">
              <MapPin class="size-[18px]" stroke-width="2.4" />
            </span>
            Mapiq
          </a>
          <p class="mt-3 max-w-[280px] text-[0.88rem] text-muted">
            پلتفرمی برای پیدا کردن موقعیت، ترسیم محدوده و اشتراک‌گذاری اطلاعات مکانی.
          </p>
        </div>

        <div class="flex flex-wrap gap-14">
          <div>
            <h5 class="mb-3.5 text-[0.82rem] font-semibold text-muted">محصول</h5>
            <a href="#intro" class="mb-2.5 block text-[0.9rem] transition-colors hover:text-teal">درباره Mapiq</a>
            <a href="#features" class="mb-2.5 block text-[0.9rem] transition-colors hover:text-teal">ویژگی‌ها</a>
            <a href="#how" class="block text-[0.9rem] transition-colors hover:text-teal">نحوه کار</a>
          </div>
          <div>
            <h5 class="mb-3.5 text-[0.82rem] font-semibold text-muted">حساب کاربری</h5>
            <a href="/login" class="mb-2.5 block text-[0.9rem] transition-colors hover:text-teal">ورود</a>
            <a href="/map" class="block text-[0.9rem] transition-colors hover:text-teal">شروع کنید</a>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6 text-[0.8rem] text-muted-2">
        <span>© ۱۴۰۴ Mapiq. تمامی حقوق محفوظ است.</span>
        <span class="font-mono ltr-nums">v0.1 — test build</span>
      </div>
    </div>
  </footer>
</template>
