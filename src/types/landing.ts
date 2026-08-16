import type { Component } from 'vue'

export interface NavLink {
  label: string
  href: string
}

export interface IntroItem {
  index: string
  icon: Component
  title: string
  description: string
  accent: 'teal' | 'marker' | 'violet'
}

export interface HowItWorksStep {
  step: string
  title: string
  description: string
}

export interface FeatureItem {
  icon: Component
  title: string
  description: string
}

export interface DemoFeature {
  icon: Component
  title: string
  description: string
}
