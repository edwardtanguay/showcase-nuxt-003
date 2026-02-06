<template>
  <div class="container-custom py-16">
    <div class="max-w-5xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          We offer comprehensive solutions tailored to meet your unique needs and help your business thrive.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid md:grid-cols-2 gap-8 mb-16">
        <!-- Service 1 -->
        <div class="card hover:shadow-lg transition-all group">
          <div class="flex items-start space-x-4">
            <div class="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 transition-colors">
              <svg class="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">Web Development</h3>
              <p class="text-gray-600 leading-relaxed">
                Custom web applications built with modern frameworks like Nuxt, React, and Vue. 
                We create fast, scalable, and maintainable solutions.
              </p>
            </div>
          </div>
        </div>

        <!-- Service 2 -->
        <div class="card hover:shadow-lg transition-all group">
          <div class="flex items-start space-x-4">
            <div class="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 transition-colors">
              <svg class="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">UI/UX Design</h3>
              <p class="text-gray-600 leading-relaxed">
                Beautiful, intuitive interfaces designed with the user in mind. 
                We focus on creating engaging experiences that delight users.
              </p>
            </div>
          </div>
        </div>

        <!-- Service 3 -->
        <div class="card hover:shadow-lg transition-all group">
          <div class="flex items-start space-x-4">
            <div class="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 transition-colors">
              <svg class="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">Responsive Design</h3>
              <p class="text-gray-600 leading-relaxed">
                Mobile-first designs that work seamlessly across all devices. 
                Your users get a perfect experience whether on phone, tablet, or desktop.
              </p>
            </div>
          </div>
        </div>

        <!-- Service 4 -->
        <div class="card hover:shadow-lg transition-all group">
          <div class="flex items-start space-x-4">
            <div class="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 transition-colors">
              <svg class="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">Performance Optimization</h3>
              <p class="text-gray-600 leading-relaxed">
                Speed matters. We optimize every aspect of your application 
                to ensure lightning-fast load times and smooth interactions.
              </p>
            </div>
          </div>
        </div>

        <!-- Service 5 -->
        <div class="card hover:shadow-lg transition-all group">
          <div class="flex items-start space-x-4">
            <div class="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 transition-colors">
              <svg class="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">SEO Optimization</h3>
              <p class="text-gray-600 leading-relaxed">
                Get found online with our SEO best practices. 
                We ensure your site ranks well and attracts the right audience.
              </p>
            </div>
          </div>
        </div>

        <!-- Service 6 -->
        <div class="card hover:shadow-lg transition-all group">
          <div class="flex items-start space-x-4">
            <div class="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 transition-colors">
              <svg class="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">Consulting & Support</h3>
              <p class="text-gray-600 leading-relaxed">
                Expert guidance and ongoing support to help you make the right 
                technical decisions and maintain your digital presence.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="card bg-gradient-to-br from-primary-50 to-gray-50 border-primary-200 text-center">
        <h2 class="text-2xl font-semibold mb-4">Interested in Our Services?</h2>
        <p class="text-gray-600 mb-6 max-w-2xl mx-auto">
          Let's discuss how we can help bring your vision to life with our expertise and dedication.
        </p>
        <NuxtLink to="/contact" class="btn-primary">
          Get Started
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Services - Professional Nuxt Site',
  meta: [
    { name: 'description', content: 'Explore our comprehensive web development and design services' }
  ]
})
</script>
