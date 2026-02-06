<template>
  <div class="min-h-screen flex flex-col">
    <Navigation />
    <main class="flex-1">
      <slot />
    </main>
    <footer class="bg-white border-t border-gray-200 py-8">
      <div class="container-custom text-center text-gray-600">
        <p>&copy; {{ new Date().getFullYear() }} NuxtSite. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
</script>
