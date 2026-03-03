<script setup lang="ts">
import FooterComponent from '@/components/footerComponent.vue'
import InputComponent from '@/components/inputComponent.vue'

import { ref } from 'vue'
const name = ref('')
const email = ref('')
const message = ref('')
</script>
<template>
  <div class="pt-[100px] md:pt-[100px]">
    <div class="hero p-5 md:w-[90%] w-[95%] mx-auto relative">
      <!-- blur effect -->
      <div
        class="blur-xl block w-full h-full absolute bg-primary/30 bottom-0 right-0 left-0 -z-1 transition duration-300 delay-200"
      ></div>
      <div
        class="blur-xs block w-full h-[24px] absolute bg-primary -top-1 right-0 left-0 transition duration-300 delay-200 -z-30"
      ></div>
      <div
        class="blur-xs block w-full h-[24px] absolute bg-primary -bottom-1 right-0 left-0 transition duration-300 delay-200 -z-30"
      ></div>
      <h1
        class="md:text-[24px] text-[18px] text-secondary text-center md:w-[80%] w-[90%] relative mt-5 font-satoshi mx-auto"
        style="font-family: 'Satoshi', sans-serif"
      >
        Laissez nous votre message et nous vous contacterons dans les plus brefs délais pour
        discuter de vos besoins et de la manière dont nous pouvons vous aider à atteindre vos
        objectifs technologiques avec notre expertise
      </h1>
    </div>
    <div class="w-[90%] mx-auto mt-10">
      <h2
        class="md:text-[18px] text-[16px] text-secondary/70 mb-5 text-center"
        style="font-family: 'Satoshi', sans-serif"
      >
        Veuillez remplir le formulaire ci-dessous pour nous contacter
      </h2>
      <!-- formulaire part -->
      <div class="md:w-[400px] w-[300px] mx-auto grid gap-2">
        <InputComponent
          label="Nom"
          placeholder="Entrez votre nom"
          type="text"
          inputId="nom"
          v-model="name"
          name="Nom complet"
        />
        <InputComponent
          label="Email"
          placeholder="Entrez votre email"
          type="email"
          inputId="email"
          v-model="email"
          name="Email"
        />
        <InputComponent
          label="Message"
          placeholder="Entrez votre message"
          type="text"
          inputId="message"
          class="h-[150px]"
          v-model="message"
          name="Message"
        />
        <button
          class="bg-yl w-full h-[50px] rounded-[20px] text-white font-bold mt-5 cursor-pointer hover:shadow-sm hover:shadow-bleu/50 hover:scale-95 transition-all duration-300"
        >
          Envoyer
        </button>
      </div>
    </div>
    <FooterComponent />
  </div>
</template>
