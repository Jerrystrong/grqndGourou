<script setup lang="ts">
import WhatsappIcon from '../../components/whatsappIcon.vue'
import SectionHeader from '../../components/sectionHeader.vue'
import { useFetch } from '../../composable/useFetch'
import { ref } from 'vue'
import type { formation } from '../../types'
import useDuration from '../../composable/useDuration'
import FooterComponent from '../../components/footerComponent.vue'
import { Splide, SplideSlide, SplideTrack, Options } from '@splidejs/vue-splide'

const activities = ref<formation[]>([])

const fetchActivities = async () => {
  const data = await useFetch('/activites.json', 'get')
  if (data?.status === 200) {
    const dataArr = useDuration(data?.data)
    activities.value = dataArr
    console.log(activities.value)
  } else {
    console.log('Error during the fetch of recent activities')
  }
}
fetchActivities()

// slide splite config --one
const opt = ref<Options>()
opt.value = {
  gap: '1rem',
  autoplay: true,
  focus: 'center',
  drag: 'free',
  height: '10rem',
  perPage: 3,
  type: 'loop',
  arrows: false,
  pagination: false,
  autoScroll: {
    speed: 100,
  },
}
</script>
<template>
  <div class="bg-primary dark:bg-primary w-screen">
    <div class="w-[90%] mx-auto bg-primary">
      <!-- header -->
      <div
        class="h-[90dvh] w-full flex items-center lg:gap-[200px] md:gap-[100px] gap-10 lg:flex-row flex-col justify-center lg:justify-start relative"
      >
        <div class="absolute bottom-4 right-6">
          <svg
            width="55"
            height="58"
            viewBox="0 0 85 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="slide"
          >
            <path d="M1 0.5L43 56.5L84.5 0.5" stroke="#F8FAFC" stroke-opacity="0.2" />
          </svg>
        </div>
        <div class="relative">
          <div
            class="block w-[300px] h-[300px] border border-secondary/20 rounded-full absolute -z-50 -top-7 Color"
          ></div>
          <div
            class="block w-[300px] h-[300px] border border-secondary/20 rounded-full absolute -z-50 -top-14"
          ></div>
          <div
            class="absolute bg-yellow-300/50 border border-yellow-300 px-6 py-1 rounded-full font-abeeze -top-3 -left-7"
          >
            50+ Etudiants
          </div>
          <div
            class="absolute bg-bleu/50 border border-bleu px-6 py-1 rounded-full font-abeeze -bottom-3 -right-[30%] md:block hidden"
          >
            10+ Collaborations
          </div>
          <img
            src="/plame.jpg"
            alt="legrandgourou-img"
            class="md:w-[450px] h-[300px] w-full object-cover rounded-lg"
          />
        </div>

        <div>
          <h1 class="text-5xl mb-6 lg:text-left text-center font-abeeze">PLAMEDI MUSENGA</h1>
          <div class="md:w-[80%] lg:mx-0 mx-auto w-full grid gap-6 lg:text-left text-center">
            <p>Expert en IA, Ingénierie des Données, Architecture Logicielle et Algorithmique.</p>
            <p>
              Je transforme les défis technologiques en solutions innovantes et performantes pour
              façonner l'avenir numérique.
            </p>
          </div>
          <div class="flex flex-row gap-7 mt-7 justify-center lg:justify-start">
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
        </div>
      </div>

      <!--  slogant -->
      <h2
        class="slogant lg:text-4xl md:text-2xl text-[14px] second-text-gradient flex md:lg:gap-7 gap-4 justify-center"
      >
        <span>Les détails</span>
        <span class="before:content-[''] before:block before:h-4">façonnent</span>
        <span>l'excellence</span>
        <span class="before:content-[''] before:block before:h-4">technologique</span>
      </h2>
      <!--  -->
      <p class="my-10 md:text-2xl text-xl second-text-gradient text-center">
        Passionné par l'innovation, je suis expert en Intelligence Artificielle, Ingénierie des
        Données, Architecture Logicielle et Algorithmique. Mon objectif ? Concevoir des solutions
        performantes, optimiser les systèmes et décrypter les tendances technologiques pour façonner
        l'avenir du numérique.
      </p>

      <div class="flex justify-center items-center flex-col m-8 gap-7">
        <p class="text-center md:w-1/3 w-full text-xl">
          Offrez à votre business un nouveau souffle en collaborant avec le Grand Gourou
        </p>
        <router-link :to="{ name: 'service' }">
          <div class="primaryDeg px-10 py-3 rounded-full relative shadownCustom">
            <div
              class="w-full h-full block absolute left-0 bottom-0 rounded-full shadow-white shadow-2xl -z-40"
            ></div>
            Travailler avec moi
          </div>
        </router-link>
      </div>

      <!-- Partenaire -->
      <h2 class="text-4xl font-abeeze">Partenariats</h2>

      <div class="my-10">
        <Splide :options="opt" tag="div" :has-track="false">
          <SplideTrack tag="div" class="">
            <SplideSlide class="rounded-lg overflow-hidden" tag="div">
              <img
                src="/logo.jpg"
                alt=""
                class="w-[200px] h-[200px] rounded-lg hover:scale-102 grayscale-75 hover:grayscale-0 transition duration-300 delay-200 cursor-pointer object-contain"
              />
            </SplideSlide>
            <SplideSlide class="rounded-lg overflow-hidden" tag="div">
              <img
                src="/logob.png"
                alt=""
                class="w-[200px] h-[200px] rounded-lg hover:scale-102 grayscale-75 hover:grayscale-0 transition duration-300 delay-200 cursor-pointer object-contain"
              />
            </SplideSlide>
            <SplideSlide class="" tag="div">
              <img
                src="/logomemiore.png"
                alt=""
                class="w-[200px] h-[200px] rounded-lg hover:scale-102 grayscale-75 hover:grayscale-0 transition duration-300 delay-200 cursor-pointer object-contain"
              />
            </SplideSlide>
            <SplideSlide class="" tag="div">
              <img
                src="/logoBiblio.png"
                alt=""
                class="w-[200px] h-[200px] rounded-lg hover:scale-102 grayscale-75 hover:grayscale-0 transition duration-300 delay-200 cursor-pointer object-contain"
              />
            </SplideSlide>
          </SplideTrack>
        </Splide>
      </div>

      <!-- recents activities -->
      <div class="my-[100px]">
        <SectionHeader sectionName="Recents activités" :width-c="80" />
        <div
          v-if="activities.length > 0"
          class="overflow-hidden w-full grid md:grid-cols-[repeat(2,800px)] grid-cols-1 grid-rows-1 gap-5 my-8"
        >
          <div
            v-for="(activity, index) in activities"
            :key="activity._id"
            class="w-[100%] flex gap-5 md:flex-row flex-col"
            :class="{ hidden: index > 1 }"
          >
            <div class="md:w-[50%] w-[100%]">
              <img
                :src="`/${activity?.imageBanner}`"
                alt=""
                class="rounded-lg h-[150px] w-[100%] object-cover"
              />
            </div>
            <div class="md:w-[40%] w-[100%] p-1">
              <div class="bg-secondary w-fit px-6 rounded-full text-bleu my-2">
                {{ activity.categorie }}
              </div>
              <h2 class="text-2xl font-bold">{{ activity.title }}</h2>
              <div class="flex justify-between mt-5">
                <p>{{ activity.timePassed }}</p>
                <p>Lieu: {{ activity?.lieu }}</p>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <p>Données en chargement</p>
        </div>
        <div class="flex justify-end -translate-y-5">
          <button
            class="flex items-center gap-4 group/route transistion duration-300 ease-in-out w-fit"
          >
            <span class="group-hover/route:font-semibold cursor-pointer">Plus</span>
            <svg
              width="30"
              height="20"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="-translate-x-1 group-hover/route:translate-x-1 cursor-pointer transistion duration-300 ease-in-out"
            >
              <rect width="30" height="30" fill="url(#pattern0_28_33)" />
              <defs>
                <pattern
                  id="pattern0_28_33"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use xlink:href="#image0_28_33" transform="scale(0.0333333)" />
                </pattern>
                <image
                  id="image0_28_33"
                  width="30"
                  height="30"
                  preserveAspectRatio="none"
                  xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAqUlEQVR4nO3VwQrCMAzG8YK+hqKPI3t28Sgqgk59hSXkK0S6nWS1Cm7Zwfwhx/KD0mwheJ5XSFVnqjoP1pHEHQtOTaNLU5glaje4Eul6Ajja4vwCG+Lcg1v8UsQZqFjwyB/+dXB+++BYcB8H/YDzqGhshwTHtOtTwIcMjJvBVS9yj2vDgtoUHarCOq0GQ76DDdBUBrX+ZMIOTZHELQn25r/FVG9PPe9vegI0+B9Qd3bRHQAAAABJRU5ErkJggg=="
                />
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Project section -->
  <div class="hideScroll">
    <div class="my-10 -translate-y-5 grid gap-7 w-[85%] mx-auto">
      <SectionHeader sectionName="Projets" :width-c="100" />

      <div class="">
        <div class="flex justify-end my-5">
          <a class="flex items-center gap-4 group/route transistion duration-300 ease-in-out w-fit">
            <span class="group-hover/route:font-semibold">Visitez</span>
            <svg
              width="30"
              height="20"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="-translate-x-1 group-hover/route:translate-x-1 cursor-pointer transistion duration-300 ease-in-out"
            >
              <rect width="30" height="30" fill="url(#pattern0_28_33)" />
              <defs>
                <pattern
                  id="pattern0_28_33"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use xlink:href="#image0_28_33" transform="scale(0.0333333)" />
                </pattern>
                <image
                  id="image0_28_33"
                  width="30"
                  height="30"
                  preserveAspectRatio="none"
                  xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAqUlEQVR4nO3VwQrCMAzG8YK+hqKPI3t28Sgqgk59hSXkK0S6nWS1Cm7Zwfwhx/KD0mwheJ5XSFVnqjoP1pHEHQtOTaNLU5glaje4Eul6Ajja4vwCG+Lcg1v8UsQZqFjwyB/+dXB+++BYcB8H/YDzqGhshwTHtOtTwIcMjJvBVS9yj2vDgtoUHarCOq0GQ76DDdBUBrX+ZMIOTZHELQn25r/FVG9PPe9vegI0+B9Qd3bRHQAAAABJRU5ErkJggg=="
                />
              </defs>
            </svg>
          </a>
        </div>
        <div class="grid gap-7">
          <div class="w-full">
            <img src="/codeBack.jpg" alt="" class="h-[300px] w-full object-cover" />
          </div>
          <div>
            <h2 class="text-4xl font-semibold p-2 w-[80%] mb-3 font-abeeze">
              Implementation d'un agent detecteur de faux billets Dollars USD
            </h2>
            <p class="border-t p-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus magnam minima
              accusamus consectetur vero saepe maiores inventore eum rem dolorum, porro nihil
              eveniet repellat autem architecto quam id? Nemo, ducimus.
            </p>

            <div class="tags p-4 flex gap-4">
              <div class="bg-secondary w-fit px-6 rounded-full text-bleu my-2">#tech</div>
              <div class="bg-secondary w-fit px-6 rounded-full text-bleu my-2">#IA</div>
              <div class="bg-secondary w-fit px-6 rounded-full text-bleu my-2">#Math</div>
            </div>
          </div>
        </div>
      </div>

      <div class="">
        <div class="flex justify-end my-5">
          <a class="flex items-center gap-4 group/route transistion duration-300 ease-in-out w-fit">
            <span class="group-hover/route:font-semibold">Visitez</span>
            <svg
              width="30"
              height="20"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="-translate-x-1 group-hover/route:translate-x-1 cursor-pointer transistion duration-300 ease-in-out"
            >
              <rect width="30" height="30" fill="url(#pattern0_28_33)" />
              <defs>
                <pattern
                  id="pattern0_28_33"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use xlink:href="#image0_28_33" transform="scale(0.0333333)" />
                </pattern>
                <image
                  id="image0_28_33"
                  width="30"
                  height="30"
                  preserveAspectRatio="none"
                  xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAqUlEQVR4nO3VwQrCMAzG8YK+hqKPI3t28Sgqgk59hSXkK0S6nWS1Cm7Zwfwhx/KD0mwheJ5XSFVnqjoP1pHEHQtOTaNLU5glaje4Eul6Ajja4vwCG+Lcg1v8UsQZqFjwyB/+dXB+++BYcB8H/YDzqGhshwTHtOtTwIcMjJvBVS9yj2vDgtoUHarCOq0GQ76DDdBUBrX+ZMIOTZHELQn25r/FVG9PPe9vegI0+B9Qd3bRHQAAAABJRU5ErkJggg=="
                />
              </defs>
            </svg>
          </a>
        </div>
        <div class="grid gap-7">
          <div class="w-full">
            <img src="/codeBack.jpg" alt="" class="h-[300px] w-full object-cover" />
          </div>
          <div>
            <h2 class="text-4xl font-semibold p-2 w-[80%] mb-3 font-abeeze">
              Implementation d'un agent detecteur de faux billets Dollars USD
            </h2>
            <p class="border-t p-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus magnam minima
              accusamus consectetur vero saepe maiores inventore eum rem dolorum, porro nihil
              eveniet repellat autem architecto quam id? Nemo, ducimus.
            </p>

            <div class="tags p-4 flex gap-4">
              <div class="bg-secondary w-fit px-6 rounded-full text-bleu my-2">#tech</div>
              <div class="bg-secondary w-fit px-6 rounded-full text-bleu my-2">#IA</div>
              <div class="bg-secondary w-fit px-6 rounded-full text-bleu my-2">#Math</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer-component class="w-[95%] mx-auto" />
</template>
<style scoped>
.hideScroll {
  overflow: scroll;
  scrollbar-width: 0;
  scrollbar-track-color: transparent;
  scroll-behavior: smooth;
  scrollbar-arrow-color: transparent;
  position: sticky;
  position: sticky;
  bottom: -170%;
  overflow: hidden;
  z-index: -55555;
  /* top: 200px; */
}
.slide {
  animation: slide 2s ease-out infinite;
  animation-delay: 300ms;
}
.Color {
  animation: Color 2s ease-out infinite;
}
@keyframes Color {
  from {
    border-color: rgba(248, 250, 252, 0.2);
    box-shadow: 0px 0px 0px rgba(248, 250, 252, 0.2);
  }
  to {
    border-color: rgba(248, 250, 252, 0.3);
    box-shadow: 1px 5px 10px rgba(248, 250, 252, 0.2);
  }
}
@keyframes slide {
  from {
    transform: translateY(-30px);
  }
  to {
    transform: translateY(0px);
  }
}
</style>
