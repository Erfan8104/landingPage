# Mapiq — Landing Page (نسخه تستی)

یک لندینگ پیج مستقل برای Mapiq، ساخته‌شده با **Vue 3 + TypeScript + Tailwind CSS v4**.

این پروژه کاملاً مستقل است و به کد پروژه اصلی Mapiq وابسته نیست. فقط ظاهر (UI) ساخته شده و دکمه‌ها (`/map`, `/login`) فعلاً فقط لینک‌های ساده هستند که باید بعداً به مسیرهای واقعی پروژه وصل شوند.

## اجرای پروژه

```bash
npm install
npm run dev
```

سپس آدرس نمایش‌داده‌شده در ترمینال (معمولاً `http://localhost:5173`) را در مرورگر باز کنید.

## بیلد برای Production

```bash
npm run build
```

خروجی در پوشه `dist/` قرار می‌گیرد و آماده Deploy است. `npm run build` هم‌زمان بررسی TypeScript (`vue-tsc`) را نیز انجام می‌دهد.

برای پیش‌نمایش خروجی build‌شده:

```bash
npm run preview
```

## ساختار پروژه

```
src/
  components/landing/
    LandingNavbar.vue       نوار بالای صفحه (دسکتاپ + منوی موبایل)
    HeroSection.vue         بخش اصلی معرفی
    MapVisual.vue           گرافیک نقشه انیمیشنی (عنصر بصری اصلی/سیگنیچر)
    ProductIntroSection.vue بخش Find / Draw / Share
    HowItWorksSection.vue   تایم‌لاین ۴ مرحله‌ای
    MapDemoSection.vue      دموی بصری نقشه
    FeaturesSection.vue     گرید ویژگی‌ها
    CTASection.vue          دعوت به شروع کار (پایانی)
    LandingFooter.vue       فوتر
  directives/reveal.ts      دایرکتیو v-reveal برای انیمیشن ورود هنگام اسکرول
  types/landing.ts          تایپ‌های مشترک TypeScript
  style.css                 توکن‌های طراحی Tailwind (رنگ‌ها، فونت‌ها، radius)
  App.vue                   ترکیب همه سکشن‌ها
  main.ts                   نقطه ورود اپلیکیشن
```

## نکات برای وصل کردن به پروژه اصلی

وقتی این طراحی تأیید شد و قرار شد داخل پروژه اصلی قرار بگیرد:

1. **دکمه‌های `/map` و `/login`** در فایل‌های `HeroSection.vue`، `LandingNavbar.vue`، `CTASection.vue` و `LandingFooter.vue` باید به مسیرهای واقعی Vue Router پروژه وصل شوند (به‌جای تگ `<a>` ساده، از `<router-link>` استفاده شود).
2. **توکن‌های رنگ و فونت** در `src/style.css` (بخش `@theme`) طوری تنظیم شده‌اند که به‌راحتی قابل تغییر باشند — اگر پالت رنگی محیط اصلی Map متفاوت است، فقط کافی است این مقادیر عوض شوند.
3. **`MapVisual.vue`** کاملاً یک گرافیک SVG تزئینی و سبک است، نه نقشه واقعی — اگر خواستید بعداً واقعاً از نقشه یا کتابخانه نقشه پروژه استفاده کنید، فقط همین یک کامپوننت باید جایگزین شود.
4. هیچ Pinia Store یا وابستگی اضافه‌ای استفاده نشده — پروژه کاملاً سبک و مستقل است.

## تکنولوژی‌ها

- Vue 3 (Composition API + `<script setup>`)
- TypeScript
- Tailwind CSS v4 (از طریق `@tailwindcss/vite`)
- lucide-vue-next (آیکون‌ها)
- Vite

فونت‌ها: **Vazirmatn** (متن فارسی) و **JetBrains Mono** (مختصات و اعداد) از Google Fonts.
