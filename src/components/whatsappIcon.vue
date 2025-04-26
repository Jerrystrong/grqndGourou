<script lang="ts">
import { defineComponent } from 'vue'

// defineProps({
//   w: String,
//   h: String,
// })
export default defineComponent({
  props: {
    w: String,
    h: String,
  },
})
</script>
<template>
  <div>
    <svg
      :width="w"
      :height="h"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <rect width="30" height="30" fill="url(#pattern0_4_23)" />
      <defs>
        <pattern id="pattern0_4_23" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlink:href="#image0_4_23" transform="scale(0.02)" />
        </pattern>
        <image
          id="image0_4_23"
          width="50"
          height="50"
          preserveAspectRatio="none"
          xlink:href="data:image/png;base64,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"
        />
      </defs>
    </svg>
  </div>
</template>
