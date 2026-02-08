<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'

useHead({
  title: 'About - Professional Nuxt Site',
  meta: [
    { name: 'description', content: 'Learn about our mission, values, and team' }
  ]
})

const value = shallowRef(new CalendarDate(2026, 2, 6))
const message = ref('')

</script>
<template>
  <ul>
    <li>REPO: <a href="https://github.com/edwardtanguay/showcase-nuxt-003" target="_blank" class="underline">edwardtanguay/showcase-nuxt-003</a></li>
    <li>LIVE: <a href="https://showcase-nuxt-003.vercel.app/"  target="_blank"class="underline">showcase-nuxt-003.vercel.app</a></li>
  </ul>
</template>

