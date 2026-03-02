<script lang="ts">
import { defineComponent } from 'vue'
import WhatsappIcon from './whatsappIcon.vue'
export default defineComponent({
  components: { WhatsappIcon },
  name: 'FooterComponent',
})
</script>
<template>
  <div class="mb-5 mt-5">
    <div class="flex items-center my-7">
      <div class="w-4 h-4 bg-secondary block rounded-full"></div>
      <div class="w-[100%] h-[1px] bg-secondary block rounded-full"></div>
    </div>
    <div
      class="flex justify-between md:flex-row-reverse flex-row md:flex-nowrap flex-wrap md:gap-0 gap-10"
    >
      <div class="grid gap-4">
        <div class="flex flex-row gap-7">
          <a href="" class="">
            <WhatsappIcon w="20" h="20" class="w-[20px] h-[20px]" />
          </a>
          <a href="">
            <img src="@/assets/linkedin.svg" alt="" class="w-[20px] h-[20px]" />
          </a>
          <a href="">
            <img src="@/assets/twitter.svg" alt="" class="w-[20px] h-[20px]" />
          </a>
        </div>
        <h2 class="text-xl font-abeeze md:block hidden">
          Les details façonnent l’excellence technologique
        </h2>
        <p class="text-[14px] md:mt-0 mt-10">
          Copyright CHEZLEGRANDGOUROU @{{ new Date().getFullYear() }}. Tout droit réserver
        </p>
      </div>
      <!-- 2 col -->
      <div>
        <div class="flex flex-col gap-4">
          <div
            class="flex items-start gap-4 max-[380px]:text-[11px] flex-col font-satoshi text-secondary/70"
            style="font-family: 'Satoshi', sans-serif"
          >
            <h2 class="text-secondary font-bold">Liens</h2>
            <div class="flex items-center gap-3">
              <div class="w-1 h-1 bg-secondary/70 block rounded-full"></div>
              <button>Communauté</button>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-1 h-1 bg-secondary/70 block rounded-full"></div>
              <router-link :to="{ name: 'about' }">À propos</router-link>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-1 h-1 bg-secondary/70 block rounded-full"></div>
              <router-link :to="{ name: 'service' }">Travailler avec moi</router-link>
            </div>
          </div>
        </div>
      </div>
      <!-- 3 col -->
      <div class="flex gap-3 flex-col text-secondary/70" style="font-family: 'Satoshi', sans-serif">
        <h2 class="text-secondary font-bold">Contacts</h2>
        <a href="tel:+243972640200">+243972640200</a>
        <a href="tel:+243896702007">+243896702007</a>
        <a href="tel:+243837133337">+243837133337</a>
      </div>
      <!-- <img src="@/assets/CHEZLEGRANDGOUROU.svg" alt="logo-chezlegrandgourou" /> -->
    </div>
  </div>
</template>
