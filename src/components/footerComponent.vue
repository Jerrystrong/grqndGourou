<script setup lang="ts">
import WhatsappIcon from './whatsappIcon.vue'
</script>
<template>
  <div class="mb-5 mt-5">
    <div class="flex items-center my-7">
      <div class="w-4 h-4 bg-secondary block rounded-full"></div>
      <div class="w-[100%] h-[1px] bg-secondary block rounded-full"></div>
    </div>
    <div class="flex justify-between md:flex-row flex-col-reverse md:gap-0 gap-10">
      <div class="grid gap-4">
        <div class="flex flex-row gap-7">
          <a href="" class="">
            <WhatsappIcon w="20" h="20" />
          </a>
          <a href="">
            <img src="@/assets/linkedin.svg" alt="" class="w-[20px] h-[20px]" />
          </a>
          <a href="">
            <img src="@/assets/twitter.svg" alt="" class="w-[20px] h-[20px]" />
          </a>
        </div>
        <h2 class="text-xl font-abeeze">Les details façonnent l’excellence technologique</h2>
        <p class="text-[14px]">
          Copyright CHEZLEGRANDGOUROU @{{ new Date().getFullYear() }}. Tout droit réserver
        </p>
      </div>
      <div>
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-4">
            <button>Communauté</button>
            <div class="w-1 h-1 bg-secondary block rounded-full"></div>
            <router-link :to="{ name: 'about' }">À propos</router-link>
            <div class="w-1 h-1 bg-secondary block rounded-full"></div>
            <router-link :to="{ name: 'service' }">Travailler avec moi</router-link>
          </div>
          <img src="@/assets/CHEZLEGRANDGOUROU.svg" alt="logo-chezlegrandgourou" />
        </div>
      </div>
    </div>
  </div>
</template>
