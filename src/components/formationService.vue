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
        Le programme d'immersion totale pour passer de novice à talent de la Tech
      </h1>
      <p
        class="md:text-[16px] text-[14px] mt-5 text-center w-full md:w-[80%] mx-auto text-secondary/70"
        style="font-family: 'Satoshi', sans-serif"
      >
        Vous venez d’un autre univers, mais vous possédez la discipline des meilleurs. La Forge
        n'est pas un bootcamp, c'est une mutation. Notre objectif : faire de la technologie votre
        langue maternelle pour vous rendre immédiatement indispensable sur le marché.
      </p>
    </div>
    <!-- offre -->
    <div class="w-[90%] mx-auto mt-10">
      <h2 class="md:text-[24px] text-[18px]">
        Un parcours complet en Data, Intelligence Artificielle et Architecture Logicielle
      </h2>
      <p class="md:text-[16px] text-[14px]">
        Un programme structuré autour de la construction réelle. Ici, nous bâtissons vos compétences
        brique par brique.
      </p>
      <div class="flex gap-3 w-full p-5 md:flex-nowrap flex-wrap items-center justify-center">
        <!-- offre one -->
        <div
          class="bg-secondary/10 rounded-[20px] p-3 flex items-center gap-3 md:w-1/3 w-[200px] md:flex-row flex-col"
        >
          <div
            class="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center text-green-700"
          >
            <i class="bx bx-brain"></i>
          </div>
          <p style="font-family: 'Satoshi', sans-serif" class="text-[14px] w-[90%]">
            Maîtrise algorithmique et programmation Python, le langage roi de l'IA et de la Data.
          </p>
        </div>
        <!-- offre two -->
        <div
          class="bg-secondary/10 rounded-[20px] p-3 flex items-center gap-3 md:w-1/3 w-[200px] md:flex-row flex-col"
        >
          <div
            class="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center text-yellow-700"
          >
            <i class="bx bx-server"></i>
          </div>
          <p style="font-family: 'Satoshi', sans-serif" class="text-[14px] w-[90%]">
            Conception d’API robustes et découplées des frameworks, conçues pour être portables et
            adaptables à tout écosystème technologique.
          </p>
        </div>
      </div>
      <!-- adding slug -->
      <div class="mt-5 text-center">
        <p>
          Chez Le Grand Gourou, nous privilégions le “Build” : apprendre en construisant,
          concrètement et efficacement.
        </p>
        <div class="flex items-center justify-center p-5 md:flex-row flex-col">
          <div class="md:w-[400px] w-[300px] text-left flex gap-2">
            <i class="bx bx-caret-right"></i>
            <p>
              <b>Zéro QCM, 100% Code</b> : Ici, on ne valide pas des cases, on valide des
              fonctionnalités métier sur des architectures professionnelles
            </p>
          </div>
          <div class="md:w-[400px] w-[300px] text-left flex gap-2">
            <i class="bx bx-caret-right"></i>
            <p>
              <b>Accompagnement Post-Forge </b> : Coaching intensif pour vos entretiens techniques
            </p>
          </div>
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
        <FormulaireService service-name="formation" />
      </div>
    </div>
  </div>
</template>
