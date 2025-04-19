<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from './components/headerComponent.vue'
import { ref } from 'vue'
const scrollState = ref(false)
document.addEventListener('scroll', () => {
  if (scrollY > 125) {
    scrollState.value = true
  } else {
    scrollState.value = false
  }
})
</script>

<template>
  <HeaderComponent :scroll="scrollState" />

  <RouterView />
</template>
