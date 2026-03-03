<script setup lang="ts">
import { ref } from 'vue'
import BounderBal from './bounderBal.vue'

// new letter logic
const userMail = ref<string>('')
const userName = ref<string>('')
const sendNewsLetter = () => {
  console.log('cordonate send with success')
}
</script>
<template>
  <div
    class="relative bg-secondary w-full h-[300px] flex items-center justify-center flex-col text-primary lg:gap-6 gap-2 mb-10 overflow-hidden rounded-2xl"
  >
    <BounderBal class="md:top-2 top-[-52%] left-2" :iteration="7" />
    <BounderBal class="md:bottom-2 bottom-[-27%] right-2" :iteration="4" />
    <h2
      class="text-bleu lg:text-3xl md:text-2xl lg:w-[50%] md:w-[70%] w-[90%] text-center text-xl font-abeeze"
    >
      Restez à la pointe de l'IA, de la data, des algorithmes et de l'architecture logicielle !
    </h2>
    <p class="lg:w-full md:w-[60%] w-[90%] text-center">
      Abonnez-vous pour recevoir analyses, conseils et tendances tech directement dans votre boîte
      mail.
    </p>

    <div class="form flex flex-col gap-2">
      <input
        type="text"
        name="userName"
        id="userName"
        placeholder="Entrez votre noms"
        class="border border-bleu px-2 rounded-lg placeholder:text-black/70 focus:outline-2 py-1 focus:outline-bleu/60 focus:border-bleu focus:transition focus:placeholder:text-black/50 transition duration-300 ease-in-out active:outline-bleu/60 active:outline-2 max-[380px]:w-[300px] max-[380px]:ml-2"
        v-model="userName"
      />
      <div class="flex gap-2 max-[380px]:gap-1">
        <input
          type="email"
          name="userMail"
          id="userMail"
          placeholder="Entrez votre e-mail"
          class="border border-bleu px-2 rounded-lg placeholder:text-black/70 focus:outline-2 py-1 focus:outline-bleu/60 focus:border-bleu focus:transition focus:placeholder:text-black/50 transition duration-300 ease-in-out active:outline-bleu/60 active:outline-2 max-[380px]:w-[180px] max-[380px]:ml-2"
          v-model="userMail"
        />
        <button @click="sendNewsLetter" class="text-secondary bg-bleu px-7 rounded-lg py-1">
          Envoyer
        </button>
      </div>
    </div>
  </div>
</template>
