<script setup lang="ts">
defineProps({
  sectionName: String,
  widthC: Number,
})
</script>
<template>
  <div class="flex items-center md:gap-8 gap-2 lg:flex-row flex-col">
    <h2 class="w-fit font-abeeze md:text-[24px] text-[18px]">{{ sectionName }}</h2>
    <div :class="`flex items-center w-[${widthC}%]`">
      <div class="rond rounded-full w-[15px] h-[15px] block bg-secondary"></div>
      <div class="rond rounded-full w-[100%] h-[1px] block bg-secondary"></div>
    </div>
  </div>
</template>
