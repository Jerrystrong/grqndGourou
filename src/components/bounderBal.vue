<script setup lang="ts">
defineProps({
  iteration: Number,
})
</script>
<template>
  <div class="absolute flex flex-col gap-2">
    <div v-for="design in iteration" :key="design" class="flex gap-4">
      <div class="w-4 h-4 block bg-bleu rounded-full"></div>
      <div class="w-4 h-4 block bg-bleu rounded-full"></div>
      <div class="w-4 h-4 block bg-bleu rounded-full"></div>
      <div class="w-4 h-4 block bg-bleu rounded-full"></div>
    </div>
  </div>
</template>
