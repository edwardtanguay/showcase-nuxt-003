<template>
  <div class="container-custom py-16">
      <!-- Hero Section -->
      <section class="text-center mb-20">
        <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Welcome to Our Site
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          A professional, minimalist Nuxt 4 application with responsive design and modern aesthetics.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/services" class="btn-primary">
            Explore Services
          </NuxtLink>
          <NuxtLink to="/contact" class="px-6 py-3 bg-white text-primary-600 border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition-colors duration-200 font-medium">
            Get in Touch
          </NuxtLink>
        </div>
      </section>

      <!-- Features Section -->
      <section class="grid md:grid-cols-3 gap-8 mb-20">
        <div class="card hover:shadow-md transition-shadow">
          <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">Fast Performance</h3>
          <p class="text-gray-600">Built with Nuxt 4 for optimal speed and performance.</p>
        </div>

        <div class="card hover:shadow-md transition-shadow">
          <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">Responsive Design</h3>
          <p class="text-gray-600">Perfectly adapted for all devices and screen sizes.</p>
        </div>

        <div class="card hover:shadow-md transition-shadow">
          <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">Type Safe</h3>
          <p class="text-gray-600">Built with TypeScript for reliability and maintainability.</p>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center text-white">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p class="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
          Discover how our professional solutions can help you achieve your goals.
        </p>
        <NuxtLink to="/contact" class="inline-block px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold">
          Contact Us Today
        </NuxtLink>
      </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Home - Professional Nuxt Site',
  meta: [
    { name: 'description', content: 'Welcome to our professional Nuxt 4 site with responsive design' }
  ]
})
</script>
