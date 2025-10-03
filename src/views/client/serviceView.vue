<script setup lang="ts">
// import { Splide, SplideSlide, SplideTrack, Options } from '@splidejs/vue-splide'
import WhatsappIcon from '../../components/whatsappIcon.vue'
import { ref } from 'vue'
import InputComponent from '../../components/inputComponent.vue'
import worldCountries from 'world-countries'
import FooterComponent from '../../components/footerComponent.vue'
import {
  motion,
  useScroll,
  useMotionValue,
  useMotionValueEvent,
  useDomRef,
  animate,
} from 'motion-v'

// slide splite config --one
// const opt = ref<Options>()
// opt.value = {
//   gap: '1rem',
//   autoplay: true,
//   focus: 'center',
//   drag: 'free',
//   height: '10rem',
//   perPage: 3,
//   type: 'loop',
//   arrows: false,
//   pagination: false,
//   autoScroll: {
//     speed: 100,
//   },
// }
// client form
const clientName = ref('')
const clientEmail = ref('')
const clientFirm = ref('')
const clientAge = ref('')
const isFormVisible: boolean = ref(false)
const clientCountry = ref('DR Congo')
const countryCode = ref('+243')
const countryFlag = ref('CD')
const clientPhoneNumber = ref('')
const clientProfession = ref<string | undefined>()
const professionActive = ref(false)
const clientService = ref<string[]>([])
// ====================
const setProfession = (profession: string) => {
  clientProfession.value = profession
  professionActive.value = false
}
const ClientCountryActive = ref(false)
const setClientCountry = (country: string, flag: string, code: string[]) => {
  clientCountry.value = country
  countryCode.value = code.join('')
  countryFlag.value = flag
  ClientCountryActive.value = false
}
// whatcall
const whatsappCall = () => {
  window.open(`whatsapp://send?phone=+243826526374`)
}
// from motion v
const containerRef = useDomRef()
const { scrollXProgress } = useScroll({ container: containerRef })
const maskImage = useScrollOverflowMask(scrollXProgress)
const left = `0%`
const right = `100%`
const leftInset = `20%`
interface ScrollMaskConfig {
  left: string
  right: string
  leftInset: string
  rightInset: string
  transparent: string
  opaque: string
}

const rightInset: ScrollMaskConfig['rightInset'] = `80%`
const transparent = `#0000`
const opaque = `#000`
function useScrollOverflowMask(scrollXProgress: ReturnType<typeof useScroll>['scrollXProgress']) {
  const maskImage = useMotionValue(
    `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`,
  )

  useMotionValueEvent(scrollXProgress, 'change', (value) => {
    if (value === 0) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`,
      )
    } else if (value === 1) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`,
      )
    } else if (scrollXProgress.getPrevious() === 0 || scrollXProgress.getPrevious() === 1) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`,
      )
    }
  })

  return maskImage
}
</script>
<template>
  <div>
    <!-- header -->
    <div class="pt-[100px] md:pt-[100px]">
      <div
        class="hero flex items-center md:justify-end justify-center lg:h-[65dvh] md:h-[45dvh] h-[65dvh] flex-col gap-7 relative"
      >
        <!-- blur effect -->
        <div
          class="blur-xl block w-full h-full absolute bg-primary/70 bottom-0 right-0 left-0 -z-1 transition duration-300 delay-200"
        ></div>
        <div
          class="blur-xs block w-full h-[24px] absolute bg-primary -top-1 right-0 left-0 transition duration-300 delay-200 -z-30"
        ></div>
        <div
          class="blur-xs block w-full h-[24px] absolute bg-primary -bottom-1 right-0 left-0 transition duration-300 delay-200 -z-30"
        ></div>
        <!-- end blur effect -->
        <div class="md:flex hidden self-start translate-x-10 opacity-50">
          <div class="relative">
            <img src="/coupeProfJey.png" alt="students" class="rounded-full w-10 h-10" />
            <div class="w-10 h-10 rounded-full bg-secondary absolute -right-1/2 top-0 -z-20"></div>
          </div>

          <div
            class="translate-x-7 flex items-center bg-yellow-300/50 border border-yellow-300 md:px-6 px-4 py-1 rounded-full font-abeeze md:text-[16px] text-[12px]"
          >
            50+ Etudiants
          </div>
        </div>

        <h1
          class="md:text-[24px] text-[18px] text-secondary text-center md:w-[80%] w-[90%] relative"
        >
          Nous accompagnons <span class="text-bleu">professionnels</span>, startups et entreprises
          dans la maîtrise des enjeux technologiques contemporains :
          <span class="font-bold">Intelligence Artificielle</span>, <span>Data</span>,
          <span class="text-yl">Architecture Logicielle</span> et Algorithmes. Que vous souhaitiez à
          optimiser vos systèmes, former vos équipes ou pivoter vers un nouveau domaine, nos
          solutions sont conçues pour répondre à vos besoins avec
          <span class="relative spanOne text-secondary">précision</span> et impact.
        </h1>
        <div class="flex gap-4">
          <button
            class="text-bleu bg-secondary px-5 py-1 rounded-full flex items-center gap-3"
            @click="whatsappCall"
          >
            <span class="max-sm:hidden">Appel</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <rect width="20" height="20" fill="url(#pattern0_142_110)" />
              <defs>
                <pattern
                  id="pattern0_142_110"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use xlink:href="#image0_142_110" transform="scale(0.02)" />
                </pattern>
                <image
                  id="image0_142_110"
                  width="50"
                  height="50"
                  preserveAspectRatio="none"
                  xlink:href="data:image/png;base64,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"
                />
              </defs>
            </svg>
          </button>

          <router-link :to="{ name: 'about' }" class="primaryDeg px-5 p-1 rounded-full"
            >A propos de moi</router-link
          >
        </div>
        <!-- figure process -->
        <div class="w-screen absolute -bottom-10 left-0">
          <img
            src="/figg.png"
            alt="figure"
            class="md:w-[75%] w-[100%] md:h-[100px] h-[60px] object-cover z-50"
          />
        </div>
        <div class="flex flex-row-reverse self-end -translate-x-10 opacity-55">
          <div class="relative">
            <img src="/coupeProfJey.png" alt="students" class="rounded-full w-10 h-10" />
            <div class="w-10 h-10 rounded-full bg-secondary absolute -right-1/2 top-0 -z-20"></div>
          </div>

          <div
            class="-translate-x-2 flex items-center bg-bleu/50 border border-bleu rounded-full font-abeeze md:px-6 px-4 py-1 rounded-full font-abeeze md:text-[16px] text-[12px] gap-1"
          >
            <span>10+</span> <span class="max-sm:hidden"> Collaborations</span>
          </div>
        </div>
      </div>
    </div>
    <!--  -->

    <!-- slide -->
    <!-- <div class="w-[90%] mx-auto">
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
    </div> -->
    <!--  -->

    <!-- formulaire -->
    <div class="my-[100px] flex justify-center flex-col gap-7">
      <!-- <h2 class="text-[32px] lg:w-[50%] w-[95%] text-center">Nos services clés</h2> -->
      <!-- service section -->
      <div class="flex md:flex-row flex-col items-center gap-10 md:gap-0 justify-center">
        <h3
          class="text-center text-secondary font-abeeze md:w-[30%] w-[100%] text-[24px] flex flex-col items-center"
        >
          <span
            >Découvrez nos services conçus pour propulser votre entreprise vers l'avenir
            numérique.</span
          >
          <button
            class="bg-secondary text-[14px] text-bleu px-6 py-2 rounded-full flex items-center gap-3 mt-5 justify-center"
          >
            Plus de 5 services
            <p class="animate-showing">
              <span class="md:block hidden">👉</span> <span class="md:hidden block">👇</span>
            </p>
          </button>
        </h3>
        <div class="serviceScrol w-[100vw] md:max-w-[700px] max-w-[400px]" id="serviceScrol">
          <motion.ul
            ref="containerRef"
            :style="{ maskImage }"
            class="flex gap-[20px] overflow-x-scroll h-[300px] flex-[0_0_600px] ffg"
          >
            <li
              class="bg-secondary/20 flex flex-col flex-[0_0_300px] w-[300px] mx-auto p-5 h-full rounded-lg relative beforeCont before:content-['1']"
              style=""
            >
              <h2 class="font-bold">Consulting & Expertise Technique</h2>
              <p>
                Un regard expert sur vos projets en IA, Data, architecture logicielle et
                algorithmes, pour entreprises et indépendants.
              </p>
            </li>
            <li
              class="bg-secondary/20 flex flex-col flex-[0_0_300px] w-[300px] mx-auto p-5 h-full rounded-lg relative beforeCont before:content-['2']"
              style=""
            >
              <h2 class="font-bold">Formations & Masterclasses</h2>
              <p>
                Des parcours pratiques et progressifs, adaptés aussi bien aux débutants qu'aux
                experts.
              </p>
            </li>
            <li
              class="bg-secondary/20 flex flex-col flex-[0_0_300px] w-[300px] mx-auto p-5 h-full rounded-lg relative beforeCont before:content-['3']"
              style=""
            >
              <h2 class="font-bold">Conférences & Interventions</h2>
              <p>
                Partage d’expertise lors d’événements, séminaires et rencontres professionnelles.
              </p>
            </li>
            <li
              class="bg-secondary/20 flex flex-col flex-[0_0_300px] w-[300px] mx-auto p-5 h-full rounded-lg relative beforeCont before:content-['4']"
              style=""
            >
              <h2 class="font-bold">Partenariats & Contenu Sponsorisé</h2>
              <p>
                Création et diffusion de contenus à forte valeur ajoutée, en collaboration avec
                votre marque.
              </p>
            </li>
            <li
              class="bg-secondary/20 flex flex-col flex-[0_0_300px] w-[300px] mx-auto p-5 h-full rounded-lg relative beforeCont before:content-['5']"
              style=""
            >
              <h2 class="font-bold">Mentorat & Coaching Individuel</h2>
              <p>Un accompagnement personnalisé (1:1) pour les professionnels ambitieux.</p>
            </li>
            <li
              class="bg-secondary/20 flex flex-col flex-[0_0_300px] w-[300px] mx-auto p-5 h-full rounded-lg relative beforeCont before:content-['6']"
              style=""
            >
              <h2 class="font-bold">Reconversion Professionnelle</h2>
              <p>
                Un parcours clé en main pour se lancer dans la tech ou réussir une transition de
                carrière dans ce secteur.
              </p>
            </li>
          </motion.ul>
        </div>
      </div>
    </div>
    <!-- form first entry -->
    <div>
      <h1
        class="md:text-[32px] text-[24px] w-[90%] md:w-[50%] mx-auto second-text-gradient text-center"
      >
        Pour garantir une collaboration fluide et alignée, nous avons mis en place un processus
        simple :
        <ol class="list-decimal list-inside mt-5 text-left text-[16px] font-medium">
          <li>
            Remplissez notre formulaire de demande (lien ci-dessous) en précisant :
            <ul class="list-disc list-inside font-normal">
              <li>Le service qui vous intéresse (un ou plusieurs)</li>
              <li>Vos objectifs</li>
              <li>
                Vos contraintes (budget, délais, préférences de format : distanciel/présentiel)
              </li>
              <li>Vos coordonnées pour un retour sous 48h maximum.</li>
            </ul>
          </li>
        </ol>
      </h1>
      <div
        class="w-[90%] md:w-[50%] mx-auto mt-5 flex items-center gap-5 md:flex-row flex-col cursor-pointer"
      >
        <button class="primaryDeg rounded-full relative w-fit p-2" @click="isFormVisible = true">
          Remplir le formulaire
        </button>
        <p>Ceci est indispensable pour souscrire à un de nos services</p>
      </div>
      <div class="w-[90%] md:w-[50%] mx-auto mt-5 second-text-gradient">
        <h2>2. Échange exploratoire gratuit (15-30 min) :</h2>
        <ul class="list-disc list-inside font-normal">
          <li>
            Nous analysons vos besoins et vous proposons un plan d’action détaillé (avec devis si
            nécessaire).
          </li>
        </ul>
      </div>
      <div class="w-[90%] md:w-[50%] mx-auto">
        <p>Définir un chrono préçu</p>
        <input
          type="hour"
          class="border-2 text-bleu placeholder:text-bleu p-1 px-2 rounded-full w-[80px] mt-2 bg-secondary/80 border-bleu"
          placeholder="12:00"
        />
        <button
          class="border-2 text-bleu p-1 rounded-lg w-[150px] mt-2 ml-4 bg-secondary border-bleu"
        >
          Enregistrer
        </button>
      </div>
      <div class="w-[90%] md:w-[50%] mx-auto mt-5 second-text-gradient">
        <h2>3. Lancement du projet :</h2>
        <ul class="list-disc list-inside font-normal">
          <li>Signature d’un accord (si besoin) et démarrage sous 7 jours.</li>
        </ul>
      </div>
    </div>

    <!-- footer -->
    <FooterComponent class="w-[95%] mx-auto" />
  </div>
  <transition name="formFade">
    <div
      class="flex justify-center py-7 gap-1 lg:flex-row flex-col fixed z-50 top-0 left-0 right-0 bottom-0 w-full bg-primary/80"
      v-if="isFormVisible"
    >
      <div
        class="absolute w-full h-full blur-2xl top-0 bottom-0 left-0 right-0 bg-primary/20 -z-10"
      ></div>
      <div
        class="bg-primary/80 md:w-[400px] w-[90%] mx-auto p-5 h-full md:rounded-tl-lg rounded-tl-0 shadow-sm shadow-bleu/20 overflow-y-scroll ffg animate-simpleFormAnim"
      >
        <div class="flex justify-between items-center">
          <h2 class="font-semibold text-2xl my-5">Vos coordonnées</h2>

          <button
            class="font-abeeze text-[16px] text-bleu bg-secondary p-1 px-3 rounded-full cursor-pointer"
            @click.self="isFormVisible = false"
          >
            X
          </button>
        </div>
        <div class="form">
          <div class="grid gap-5">
            <InputComponent
              name="Noms"
              placeholder="Entrez votre nom complet"
              type="text"
              inputId="userName"
              v-model="clientName"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <rect width="30" height="30" fill="url(#pattern0_137_86)" />
                <defs>
                  <pattern
                    id="pattern0_137_86"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use xlink:href="#image0_137_86" transform="scale(0.0333333)" />
                  </pattern>
                  <image
                    id="image0_137_86"
                    width="30"
                    height="30"
                    preserveAspectRatio="none"
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABSElEQVR4nO2UsUoDQRCGg8WZmSbaKdb6CvoiEcHMnJWV5yuk00YUX+PAzISInZYaqwQfQBtJrBSJaBnZkEgQ4+2RiVG5H/5qd/n4Z3Yml8v0KxWdzUKou8hSR5aXvutAErmziTCBa0vA2kTW7lcG0oa7Y5+UR0OH4abJoVfe76EfcK7umIGR9NoXjCRXdmDWjjeYtWMJ7qbxVBIDy/Pf7zGQRFP51Tk3x6QNrzkuxoH95qLR8MlsroGKceBK6frY/3DOl73yWifN9LMql2cgrK4Byz6QXABJG0nenIG1BSznQLIHJV11d8fm4ebJIpIcAsuD9xyTtIH1AMPThdTAQihzSHKMrK9p9/SQ3duj+e244AUNqLKCpHdjAD9ZboOt2nIiGEhv7KCDNarNZDBryxqMJPeJ4HxJN4D0yS6tPOa5su7V50z/Su9zYiZacdRUJAAAAABJRU5ErkJggg=="
                  />
                </defs>
              </svg>
            </InputComponent>
            <InputComponent
              name="Email"
              placeholder="Entrez votre email"
              type="email"
              inputId="userEmail"
              v-model="clientEmail"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <rect width="30" height="30" fill="url(#pattern0_138_94)" />
                <defs>
                  <pattern
                    id="pattern0_138_94"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use xlink:href="#image0_138_94" transform="scale(0.0416667)" />
                  </pattern>
                  <image
                    id="image0_138_94"
                    width="24"
                    height="24"
                    preserveAspectRatio="none"
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABUklEQVR4nO2SO0jEQBCG1wd4OxELwcJGsBcLC1tBEBSuvUKSnWhzraXlCTa2go2tZeAykwg+KittrrneRmMviDaiEsliwkESkssJWmTgh2V35v92Z1aIOv5NGJa3AcgPgByOJnqMvFIAQDoZ3Zy1pKLD9BM6nXGwqS2RXiobIz1HHkKEY7mtArM7L5HPKrTGmd515nKNpaJLUG4zASm3WW4mdG9Y3noyS5tNQOplzCB+Jp83lL+gN1uOlIoOAPk9w/gDFB0L69qIUqcsb1EiX8XnuYCf4jdA2hctZ0LfCr1lQL4byLk1rO6SLly7mZTIe4D8OuhRAEhAPTD9lfgTNNDdjhStdVvRXZXI/azakgAOQfEXKD6dNS9mkuS2D1LxESB/5tWVB2ACCsCiHS3kp6L84QE4nGpAWKVFhYODslIcZADcrV+BKA7A9jZTgDr+LL4BPrJYwzTtIeAAAAAASUVORK5CYII="
                  />
                </defs>
              </svg>
            </InputComponent>
            <!-- PROFESSION -->
            <div class="border border-secondary px-5 py-2 rounded-xl relative">
              <label for="" class="font-bold">Proffession</label>
              <div class="flex gap-3 items-center justify-between" @click="professionActive = true">
                <button>{{ clientProfession || 'Selectionnez' }}</button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <rect width="20" height="20" fill="url(#pattern0_139_100)" />
                  <defs>
                    <pattern
                      id="pattern0_139_100"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use xlink:href="#image0_139_100" transform="scale(0.0416667)" />
                    </pattern>
                    <image
                      id="image0_139_100"
                      width="24"
                      height="24"
                      preserveAspectRatio="none"
                      xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA/ElEQVR4nO3VPUpDQRSG4RskglhkATauIK0ES91CmizAxsLS1ir+7MAt2CqCTZbgEmwkKdIKVsojI3NhvNyrN8koFnnhNIcz3zec+TlF8RdgE1eYWZ0ZLoJmanApP+epQbnzvQzdGEStaZr8ZFXxRr21wf9rEW5xhq2Wb+gEd+j8aIBRcpefcYSNGuEOhnhK6kdtDCY1j+YRh0n9QcxVmbQx6OIY8xqB+xhV5nFNt9UZxNw2TvGimdf47/QWOuRK8Q6u8ZYIv+MGuw1r2huUoI+HGP3iG5YyWIS1wVItKgfOIIP4ft3ACXc5N+PUIHxYwWSaQThojL8M/d/kA3lrjcV5ttuGAAAAAElFTkSuQmCC"
                    />
                  </defs>
                </svg>
              </div>
              <div
                class="bg-secondary p-2 px-5 flex-col flex text-primary/70 rounded-lg absolute top-8 w-full right-0"
                v-if="professionActive"
              >
                <div
                  class="cursor-pointer border-b hover:font-semibold hover:transition transistion duration-300 ease-in-out hover:scale-105"
                  @click.self="setProfession('IA engineer')"
                >
                  IA engineer
                </div>
                <div
                  class="cursor-pointer border-b hover:font-semibold hover:transition transistion duration-300 ease-in-out hover:scale-105"
                  @click.self="setProfession('Backend Developper')"
                >
                  Backend Developper
                </div>
                <div
                  class="cursor-pointer border-b hover:font-semibold hover:transition transistion duration-300 ease-in-out hover:scale-105"
                  @click.self="setProfession('Software engineeerr')"
                >
                  Software engineeer
                </div>
                <div
                  class="cursor-pointer border-b hover:font-semibold hover:transition transistion duration-300 ease-in-out hover:scale-105"
                  @click.self="setProfession('Algorithmicien and Mathematic')"
                >
                  Algorithmicien and Mathematic
                </div>
                <div
                  class="cursor-pointer border-b hover:font-semibold hover:transition transistion duration-300 ease-in-out hover:scale-105"
                  @click.self="setProfession('DevOps')"
                >
                  DevOps
                </div>
                <div
                  class="cursor-pointer border-b hover:font-semibold hover:transition transistion duration-300 ease-in-out hover:scale-105"
                  @click.self="setProfession('Cloud enginner')"
                >
                  Cloud enginner
                </div>
              </div>
            </div>

            <!-- entreprise name -->
            <InputComponent
              name="Nom de l'entreprise"
              placeholder="Entrez le nom de l'entreprise"
              type="text"
              inputId="userFirm"
              v-model="clientFirm"
            />
            <!-- entreprise size -->
            <div class="border border-secondary px-5 py-2 rounded-xl relative">
              <label for="" class="font-bold">Taille d’entreprise</label>
              <div class="flex gap-3 items-center justify-between">
                <div class="flex gap-1 items-center">
                  <input
                    type="radio"
                    name="userAge"
                    v-model="clientAge"
                    id="userAge"
                    class="ring-bleu right-1 accent-bleu"
                    checked
                  />
                  <label for="userAge">1 à 10 employés</label>
                </div>
                <div class="flex gap-1 items-center">
                  <input
                    type="radio"
                    name="userAge"
                    v-model="clientAge"
                    id="userAge"
                    class="ring-bleu right-1 accent-bleu"
                  />
                  <label for="userAge">20+ employés</label>
                </div>
              </div>
            </div>
            <!-- countrie -->
            <div class="border border-secondary px-5 py-2 rounded-xl relative">
              <label for="" class="font-bold">Proffession</label>
              <div
                class="flex gap-3 items-center justify-between"
                @click="ClientCountryActive = true"
              >
                <button class="flex gap-4">
                  <span
                    class="border border-secondary/70 px-2 rounded-md flex items-center justify-center"
                    >{{ countryFlag }}</span
                  >
                  {{ clientCountry }}
                </button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <rect width="20" height="20" fill="url(#pattern0_139_100)" />
                  <defs>
                    <pattern
                      id="pattern0_139_100"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use xlink:href="#image0_139_100" transform="scale(0.0416667)" />
                    </pattern>
                    <image
                      id="image0_139_100"
                      width="24"
                      height="24"
                      preserveAspectRatio="none"
                      xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA/ElEQVR4nO3VPUpDQRSG4RskglhkATauIK0ES91CmizAxsLS1ir+7MAt2CqCTZbgEmwkKdIKVsojI3NhvNyrN8koFnnhNIcz3zec+TlF8RdgE1eYWZ0ZLoJmanApP+epQbnzvQzdGEStaZr8ZFXxRr21wf9rEW5xhq2Wb+gEd+j8aIBRcpefcYSNGuEOhnhK6kdtDCY1j+YRh0n9QcxVmbQx6OIY8xqB+xhV5nFNt9UZxNw2TvGimdf47/QWOuRK8Q6u8ZYIv+MGuw1r2huUoI+HGP3iG5YyWIS1wVItKgfOIIP4ft3ACXc5N+PUIHxYwWSaQThojL8M/d/kA3lrjcV5ttuGAAAAAElFTkSuQmCC"
                    />
                  </defs>
                </svg>
              </div>
              <div
                class="bg-secondary p-2 px-5 flex-col flex text-primary/70 rounded-lg absolute top-8 w-full right-0 gap-2 h-[300px] overflow-y-scroll z-50"
                v-if="ClientCountryActive"
              >
                <div
                  class="cursor-pointer border-b hover:font-semibold hover:transition transistion duration-300 ease-in-out hover:scale-105 flex gap-3"
                  @click.self="
                    setClientCountry(country.name.common, country.flag, [
                      country.idd.root,
                      country.idd.suffixes[0],
                    ])
                  "
                  v-for="(country, i) in worldCountries"
                  :key="i"
                >
                  <div>{{ country.flag }}({{ country.idd.root }}{{ country.idd.suffixes[0] }})</div>
                  <div>{{ country.name.common }}</div>
                </div>
              </div>
            </div>

            <!-- Portable -->
            <div class="border border-secondary px-5 py-2 rounded-xl relative">
              <label for="" class="font-bold">Portable</label>
              <div class="flex gap-3 items-center">
                <div class="border rounded-md px-2 font-semibold">{{ countryCode }}</div>
                <input
                  type="text"
                  placeholder="Entrez votre numéro de portable"
                  class="w-full"
                  v-model="clientPhoneNumber"
                />
              </div>
            </div>

            <!-- service -->
            <h2 class="text-3xl">Nos services</h2>

            <div class="grid gap-5">
              <div class="flex gap-3">
                <input
                  type="checkbox"
                  name="consulting"
                  id="consulting"
                  class="accent-bleu"
                  v-model="clientService"
                />
                <div class="grid">
                  <label for="consulting" class="font-bold">Consulting / Expertise technique</label>
                  <label for="consulting" class="text-secondary/70"
                    >(IA, Data, Architecture Logicielle et Algorithme)</label
                  >
                </div>
              </div>
              <div class="flex gap-3">
                <input
                  type="checkbox"
                  name="consulting"
                  id="consulting"
                  class="accent-bleu"
                  v-model="clientService"
                />
                <div class="grid">
                  <label for="consulting" class="font-bold">Formation et masterclass</label>
                  <label for="consulting" class="text-secondary/70">(en direct ou en ligne)</label>
                </div>
              </div>
            </div>

            <!-- btn -->
            <button class="text-white primaryDeg rounded-lg p-2 font-bold">
              Entrez en contact
            </button>
          </div>
        </div>
      </div>
      <!-- <div class="flex flex-col gap-6 md:w-fit w-[90%] mx-auto">
      <div>
        <h2 class="text-2xl my-5">Email support</h2>
        <p>Pour toutes préoccupations contacter nous via notre mail</p>
        <a href="" class="decoration-secondary text-secondary underline underline-offset-5"
          >legrandGourou@gmail.com</a
        >
      </div>
      <div>
        <h2 class="text-2xl my-5">Localisation</h2>
        <div>
          <img src="/map.png" alt="" class="md:w-[400px] w-full h-fit" />
        </div>
      </div>
      <div>
        <h2 class="text-2xl my-5">Réseaux sociaux</h2>
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
      </div>
    </div> -->
    </div>
  </transition>
</template>
<style lang="scss" scoped>
.beforeCont {
  position: relative;
  &::before {
    // content: '';
    background: url('/contBefore.svg');
    width: 100px;
    height: 100px;
    object-fit: cover;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -555555;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding-right: 20px;
    padding-bottom: 10px;
  }
}
.serviceScrol {
  margin: 0 auto;
  position: relative;

  &::-webkit-scrollbar {
    height: 5px;
    width: 5px;
    background: #0a5eb0;
    -webkit-border-radius: 1ex;
  }

  &::-webkit-scrollbar-thumb {
    // background: rgb(10, 94, 176, 0.25);
    background: red;
    -webkit-border-radius: 1ex;
  }

  &::-webkit-scrollbar-corner {
    background: #fff3;
  }
}
.ffg::-webkit-scrollbar {
  height: 5px;
  width: 5px;
  background: rgba(83, 111, 140, 0.5);
  border-radius: 1ex;
}

.ffg::-webkit-scrollbar-thumb {
  background: #0a5eb0; /* test couleur visible */
  border-radius: 1ex;
}

.ffg::-webkit-scrollbar-corner {
  background: #fff3;
}
.formFade-leave-active,
.formFade-enter-active {
  transition: all 0.4s ease-out;
}
.formFade-enter-from,
.formFade-leave-to {
  opacity: 0;
}
.formFade-enter-to,
.formFade-leave-from {
  opacity: 1;
}
</style>
