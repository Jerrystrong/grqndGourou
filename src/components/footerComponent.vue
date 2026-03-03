<script lang="ts">
import { defineComponent } from 'vue'
import WhatsappIcon from './whatsappIcon.vue'
export default defineComponent({
  components: { WhatsappIcon },
  name: 'FooterComponent',
})
</script>
<template>
  <div class="md:mb-0 mb-5 mt-5">
    <div class="flex items-center my-7">
      <div class="w-4 h-4 bg-secondary/70 block rounded-full"></div>
      <div class="w-[100%] h-[1px] bg-secondary/70 block rounded-full"></div>
    </div>
    <div
      class="flex justify-between md:flex-row-reverse flex-row md:flex-nowrap flex-wrap md:gap-0 gap-10"
    >
      <div class="grid gap-4">
        <div class="flex flex-row gap-7">
          <a href="" class="text-[21px]">
            <i class="bx bxl-whatsapp"></i>
          </a>
          <a href="" class="text-[21px]">
            <i class="bx bxl-linkedin"></i>
          </a>
          <a href="" class="text-[21px]">
            <i class="bx bxl-twitter"></i>
          </a>
        </div>
        <h2
          class="text-xl font-satoshi text-secondary/70"
          style="font-family: 'Satoshi', sans-serif"
        >
          Les details façonnent l’excellence technologique
        </h2>
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
      <!-- Contacts -->
      <div class="flex flex-col gap-4 text-secondary/70" style="font-family: 'Satoshi', sans-serif">
        <h2 class="text-secondary font-semibold text-sm uppercase tracking-wider">Contacts</h2>

        <ul class="flex flex-col gap-2 text-sm">
          <li>
            <a
              href="tel:+243972640200"
              class="flex items-center gap-2 hover:text-secondary transition-colors"
            >
              <span class="text-secondary/50"><i class="bx bx-caret-right"></i></span>
              <span>+243 972 640 200</span>
            </a>
          </li>

          <li>
            <a
              href="tel:+243896702007"
              class="flex items-center gap-2 hover:text-secondary transition-colors"
            >
              <span class="text-secondary/50"><i class="bx bx-caret-right"></i></span>
              <span>+243 896 702 007</span>
            </a>
          </li>

          <li>
            <a
              href="tel:+243837133337"
              class="flex items-center gap-2 hover:text-secondary transition-colors"
            >
              <span class="text-secondary/50"><i class="bx bx-caret-right"></i></span>
              <span>+243 837 133 337</span>
            </a>
          </li>
        </ul>
      </div>
      <!-- <img src="@/assets/CHEZLEGRANDGOUROU.svg" alt="logo-chezlegrandgourou" /> -->
    </div>
    <p class="text-[14px] mt-5 bg-bleu/50 p-2">
      Copyright CHEZLEGRANDGOUROU @{{ new Date().getFullYear() }}. Tout droit réserver
    </p>
  </div>
</template>
