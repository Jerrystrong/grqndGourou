<script setup lang="ts">
import FormulaireService from './formulaireService.vue'
</script>
<template>
  <div class="">
    <!-- hero -->
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
      <!-- end blur effect -->
      <h1 class="md:text-[52px] text-[24px] text-center" style="font-family: 'Satoshi', sans-serif">
        L'accompagnement haute performance pour les experts qui refusent la stagnation
      </h1>
      <p
        class="md:text-[16px] text-[14px] mt-5 text-center w-full md:w-[80%] mx-auto text-secondary/70"
        style="font-family: 'Satoshi', sans-serif"
      >
        Vous maîtrisez les bases, mais vous stagnez techniquement. Ce mentorat est conçu pour briser
        votre plafond de verre : passez du statut d'exécutant à celui d'Expert Référent capable.
      </p>
    </div>
    <!-- destimony -->
    <div class="destimony mb-10 w-[98%] mx-auto overflow-hidden relative">
      <h2 class="text-[21px] md:ml-5 ml-0">Ce que nos formés disent de nous</h2>
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
      <!-- end blur effect -->
      <div class="flex items-center gap-3">
        <div v-for="t in 4" :key="t" class="p-3">
          <div
            class="bg-white/20 shadow-sm shadow-darkGray/20 h-fit rounded-[20px] p-3 mt-5 flex flex-col w-[300px]"
          >
            <div class="flex justify-between">
              <i class="bx bxs-quote-alt-left text-darkGray/30 text-[21px]"></i>
              <div class="flex gap-1">
                <img
                  v-for="i in 3"
                  :key="i"
                  src="../assets/images/starRate.png"
                  alt="star"
                  class="w-[16px] h-[16px]"
                />
                <img src="../assets/images/outLineStar.png" alt="star" class="w-[16px] h-[16px]" />
              </div>
            </div>
            <!-- testimony text -->
            <p
              class="font-inter text-darkGray mt-2"
              style="font-family: 'Inter', sans-serif !important"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur est harum labore
              soluta id ducimus.
            </p>
            <div class="flex items-center gap-3 mt-5">
              <div
                class="bg-darkGray w-[50px] h-[50px] rounded-full flex items-center justify-center"
              >
                <i class="bx bx-user text-white text-[21px]"></i>
              </div>
              <p>Jean Dupont</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- offre -->
    <div class="w-[90%] mx-auto">
      <h2 class="md:text-[32px] text-[24px]">Le Protocole d'Accélération 1:1</h2>
      <p>
        Une immersion stratégique dans votre propre flux de travail pour acquérir une stature
        d'autorité.
      </p>
      <div class="flex gap-3 w-full p-5 md:flex-nowrap flex-wrap items-center justify-center">
        <!-- offre one -->
        <div
          class="bg-secondary/10 rounded-[20px] p-3 flex items-center gap-3 md:w-1/3 w-[200px] md:flex-row flex-col"
        >
          <div
            class="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center text-green-700"
          >
            <i class="bx bx-code"></i>
          </div>
          <p style="font-family: 'Satoshi', sans-serif" class="text-[14px] w-[90%]">
            Maîtrise de la Clean Architecture et intégration intelligente d'agents IA dans vos
            workflows de développement.
          </p>
        </div>
        <!-- offre two -->
        <div
          class="bg-secondary/10 rounded-[20px] p-3 flex items-center gap-3 md:w-1/3 w-[200px] md:flex-row flex-col"
        >
          <div
            class="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center text-yellow-700"
          >
            <i class="bx bx-layer"></i>
          </div>
          <p style="font-family: 'Satoshi', sans-serif" class="text-[14px] w-[90%]">
            Apprendre à concevoir des systèmes pilotés par la donnée (PostgreSQL, Vector Databases,
            Docker, etc) pour des projets à haute valeur ajoutée.
          </p>
        </div>
        <!-- offre three -->
        <div
          class="bg-secondary/10 rounded-[20px] p-3 flex items-center gap-3 md:w-1/3 w-[200px] md:flex-row flex-col"
        >
          <div
            class="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center text-green-700"
          >
            <i class="bx bx-search"></i>
          </div>
          <p style="font-family: 'Satoshi', sans-serif" class="text-[14px] w-[90%]">
            Analyse sans concession de vos projets réels pour transformer votre code en un actif
            professionnel de rang mondial.
          </p>
        </div>
      </div>
    </div>
    <!-- formulaire de demande de service -->
    <div class="w-[90%] mx-auto mt-5">
      <h2 class="md:text-[32px] text-[24px] text-center mb-5">
        Demander un service de consultation
      </h2>
      <!-- formulaire part -->
      <div class="md:w-[400px] w-[300px] mx-auto">
        <FormulaireService service-name="mentorat" />
      </div>
    </div>
  </div>
</template>
