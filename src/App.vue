<script setup lang="ts">
import LandingNavbar from './components/landing/LandingNavbar.vue'
import HeroSection from './components/landing/HeroSection.vue'
import ProductIntroSection from './components/landing/ProductIntroSection.vue'
import HowItWorksSection from './components/landing/HowItWorksSection.vue'
import MapDemoSection from './components/landing/MapDemoSection.vue'
import FeaturesSection from './components/landing/FeaturesSection.vue'
import CTASection from './components/landing/CTASection.vue'
import LandingFooter from './components/landing/LandingFooter.vue'
</script>

<template>
  <div class="relative">
    <!-- Cartographic grid backdrop behind the whole page -->
    <div class="bg-cartographic-grid pointer-events-none fixed inset-0 z-0 opacity-50" />

    <div class="relative z-10">
      <LandingNavbar />
      <main>
        <HeroSection />
        <ProductIntroSection />
        <HowItWorksSection />
        <MapDemoSection />
        <FeaturesSection />
        <CTASection />
      </main>
      <LandingFooter />
    </div>
  </div>
</template>
