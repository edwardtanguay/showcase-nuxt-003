<template>
  <div class="container-custom py-16">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Us</h1>
        <p class="text-xl text-gray-600">
          Learn more about our mission, values, and what drives us forward.
        </p>
      </div>

      <!-- Content -->
      <div class="space-y-12">
        <!-- Mission -->
        <section class="card">
          <h2 class="text-2xl font-semibold mb-4">Our Mission</h2>
          <p class="text-gray-600 leading-relaxed">
            We are dedicated to delivering exceptional digital experiences through modern web technologies. 
            Our commitment to quality, performance, and user experience drives everything we do. 
            We believe in creating solutions that are not only functional but also beautiful and intuitive.
          </p>
        </section>

        <!-- Values -->
        <section class="card">
          <h2 class="text-2xl font-semibold mb-6">Our Values</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h3 class="text-lg font-semibold text-primary-700 mb-2">Excellence</h3>
              <p class="text-gray-600">
                We strive for excellence in every project, ensuring the highest quality standards.
              </p>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-primary-700 mb-2">Innovation</h3>
              <p class="text-gray-600">
                We embrace new technologies and innovative approaches to solve complex problems.
              </p>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-primary-700 mb-2">Integrity</h3>
              <p class="text-gray-600">
                We conduct our business with honesty, transparency, and ethical practices.
              </p>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-primary-700 mb-2">Collaboration</h3>
              <p class="text-gray-600">
                We work closely with our clients to understand and exceed their expectations.
              </p>
            </div>
          </div>
        </section>

        <!-- Team -->
        <section class="card">
          <h2 class="text-2xl font-semibold mb-4">Our Team</h2>
          <p class="text-gray-600 leading-relaxed mb-6">
            Our diverse team of experts brings together years of experience in web development, 
            design, and digital strategy. We are passionate about what we do and committed to 
            helping our clients succeed in the digital landscape.
          </p>
          <div class="grid md:grid-cols-3 gap-6">
            <div class="text-center">
              <div class="w-20 h-20 bg-primary-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span class="text-2xl font-bold text-primary-600">JD</span>
              </div>
              <h4 class="font-semibold">John Doe</h4>
              <p class="text-sm text-gray-600">Lead Developer</p>
            </div>
            <div class="text-center">
              <div class="w-20 h-20 bg-primary-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span class="text-2xl font-bold text-primary-600">JS</span>
              </div>
              <h4 class="font-semibold">Jane Smith</h4>
              <p class="text-sm text-gray-600">UX Designer</p>
            </div>
            <div class="text-center">
              <div class="w-20 h-20 bg-primary-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span class="text-2xl font-bold text-primary-600">MJ</span>
              </div>
              <h4 class="font-semibold">Mike Johnson</h4>
              <p class="text-sm text-gray-600">Project Manager</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'About - Professional Nuxt Site',
  meta: [
    { name: 'description', content: 'Learn about our mission, values, and team' }
  ]
})
</script>
