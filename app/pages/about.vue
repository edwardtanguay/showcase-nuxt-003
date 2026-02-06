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
  <h2>About</h2>
</template>

