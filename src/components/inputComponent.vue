<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  name: string
  type: string
  placeholder: string
  inputId: string
}>()

const model = defineModel<string>({ required: true })
const inputFocus = ref(false)
</script>
<template>
  <div
    class="border border-secondary/20 px-5 py-2 rounded-xl bg-secondary/10 focus-within:bg-secondary/20 transition duration-300 ease-in-out"
    :class="{ 'outline-4 outline-secondary/50': inputFocus }"
  >
    <label :for="inputId" class="font-bold">{{ name }}</label>
    <div class="flex gap-3 items-center">
      <slot></slot>
      <input
        type="text"
        :placeholder="placeholder"
        :id="inputId"
        @focusin="inputFocus = true"
        @focusout="inputFocus = false"
        class="placeholder:text-secondary/70 focus:border-0 focus:outline-0 border-0 outline-0 w-full"
        v-model="model"
      />
    </div>
  </div>
</template>
