<script setup lang="ts">
import { useRouter } from 'vue-router'
import FooterComponent from '../../components/footerComponent.vue'
const router = useRouter()
const verifyAndlog = async () => {
  console.log('free access')
  router.push({ name: 'login' })
}
const goTopaye = async () => {
  router.push({ name: 'paiement' })
}
</script>

<template>
  <div class="w-[95%] mx-auto">
    <div class="flex items-center justify-center h-[70dvh]">
      <h1 class="second-text-gradient font-abeeze md:text-[32px] text-[24px] w-[800px] text-center">
        Notre plateforme propose un modèle hybride conciliant accessibilité et exclusivité, pensé
        aussi bien pour les curieux que pour les professionnels exigeants.
      </h1>
    </div>
    <div
      id="tarif"
      class="flex items-center justify-center mb-10 md:mb-[150px] md:gap-[200px] gap-[100px] md:flex-row flex-col"
    >
      <div
        class="h-[400px] w-[300px] bg-bleu rounded-[20px] p-4 relative before:absolute before:block before:content-[''] before:w-full before:h-full before:bg-secondary before:left-4 before:top-4 before:rounded-[20px] before:-z-50"
      >
        <h1 class="font-abeeze text-[24px] text-center">Offre Standard (Gratuite)</h1>
        <p class="text-center">
          Accédez à une sélection d’articles, de résumés et de ressources essentielles. Idéal pour
          découvrir la qualité de notre contenu, amorcer votre parcours et rester informé.
        </p>

        <button
          class="bg-secondary w-[200px] h-[50px] rounded-[20px] text-bleu font-bold absolute bottom-3 left-1/6 cursor-pointer hover:shadow-sm hover:shadow-bleu/50 hover:scale-95 transition-all duration-300"
          @click="verifyAndlog"
        >
          Accéder
        </button>
      </div>
      <div
        class="h-[400px] w-[300px] bg-yl rounded-[20px] p-4 relative before:absolute before:block before:content-[''] before:w-full before:h-full before:bg-secondary before:left-4 before:top-4 before:rounded-[20px] before:-z-50"
      >
        <h1 class="font-abeeze text-[24px] text-center">Offre Standard (Payante)</h1>
        <p class="text-center">
          Libérez tout le potentiel de notre plateforme en souscrivant à un abonnement mensuel ou
          annuel. L'offre Premium vous donne un accès <b>illimité</b> à l'intégralité de notre blog
          et à toutes nos ressources.
        </p>
        <ul class="mt-1">
          <li class="flex gap-1 items-center opacity-60">
            <img src="/checkIcon.svg" alt="" /> Contenus exclusifs
          </li>
          <li class="flex gap-1 items-center opacity-70">
            <img src="/checkIcon.svg" alt="" /> Ressources Avancées
          </li>
          <li class="flex gap-1 items-center opacity-80">
            <img src="/checkIcon.svg" alt="" /> Accès illimité aux archives
          </li>
          <li class="flex gap-1 items-center opacity-90">
            <img src="/checkIcon.svg" alt="" /> Mises à jour prioritaires
          </li>
        </ul>

        <button
          class="bg-secondary w-[200px] h-[50px] rounded-[20px] text-yl font-bold absolute bottom-3 left-1/6 cursor-pointer hover:shadow-xs hover:shadow-yl/50 hover:scale-95 transition-all duration-300"
          @click="goTopaye"
        >
          Acheter
        </button>
      </div>
    </div>
    <FooterComponent />
  </div>
</template>
