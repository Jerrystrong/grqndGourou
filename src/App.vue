<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import HeaderComponent from './components/headerComponent.vue'
import { ref, watch } from 'vue'
const scrollState = ref(false)
document.addEventListener('scroll', () => {
  if (scrollY > 125) {
    scrollState.value = true
  } else {
    scrollState.value = false
  }
})
const route = useRoute()
const isNav = ref(true)
if (route.path == '/login') {
  isNav.value = !isNav.value
} else {
  isNav.value = true
}
watch(
  () => route.path,
  () => {
    if (route.path == '/login') {
      isNav.value = !isNav.value
    } else {
      isNav.value = true
    }
  },
)
</script>

<template>
  <HeaderComponent :scroll="scrollState" v-if="isNav" />

  <RouterView />
</template>
