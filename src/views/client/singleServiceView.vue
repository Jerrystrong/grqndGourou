<script setup lang="ts">
import ConsultationServive from '@/components/consultationServive.vue'
import FooterComponent from '@/components/footerComponent.vue'
import FormationService from '@/components/formationService.vue'
import MentoratService from '@/components/mentoratService.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const serviceQuery = route.query.service as string
const componentsMap: Record<string, any> = {
  formation: FormationService,
  mentorat: MentoratService,
  consultation: ConsultationServive,
}
</script>
<template>
  <div class="pt-[100px] md:pt-[100px]">
    <!-- <FormationService /> -->
    <component :is="componentsMap[serviceQuery]" />
    <FooterComponent />
  </div>
</template>
