<script setup lang="ts">
import leftIcon from '../../components/icons/leftIcon.vue'
import { useBlogStore } from '../../stores/blog'
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import { useFetch } from '../../composable/useFetch'
import useDuration from '../../composable/useDuration'
import FooterComponent from '../../components/footerComponent.vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import NewsLetterComponent from '@/components/newsLetterComponent.vue'

// import type { QuickToFunc } from 'gsap'
const router = useRouter()
const changeRoute = (id: string) => {
  router.push({ name: 'singleBlog', params: { id } })
}
const blogs = useBlogStore()
blogs.fetchData()

// fetching formation data
interface formation {
  readonly _id: string
  title: string
  imageBanner: string
  categorie: string
  instructeur: { name: string; profil: string }
  createAt: number | string
  timePassed?: string
}

const formation = ref<formation[]>()
const fetchData = async () => {
  const data = await useFetch('/formation.json', 'get')
  if (data?.status === 200) {
    // add useDuration composable to calculer the time size last publish
    formation.value = useDuration(data.data)
  } else {
    console.log('set other status')
  }
}
fetchData()

// user message
const userMessage = ref<string>('')
const errorUserMessage = ref('')
const successUserMessage = ref('')
const isSendingMessage = ref(false)
const sendMessage = () => {
  isSendingMessage.value = true
  if (!userMessage.value) {
    isSendingMessage.value = false
    errorUserMessage.value = 'veuillez saisir votre message.'
    setTimeout(() => {
      errorUserMessage.value = ''
    }, 2000)
    return
  }
  setTimeout(() => {
    isSendingMessage.value = false
    userMessage.value = ''
    successUserMessage.value = 'Message envoyé avec succès'
    // successUserMessage.value = ''
  }, 2000)
}
// scroll effect for mobile <formation Section>
const cursor = ref(0)
const scroll = ref(0)
const codex = ref(null)
const lang = ref(null)
const split = ref(null)
const putOtherFormation = () => {
  const formContainer = document.querySelector('#formContainer')
  const firstFormation: HTMLElement | null = document.getElementById('0')
  cursor.value = cursor.value + 1
  if (cursor.value === 1) {
    if (firstFormation) {
      scroll.value = scroll.value + firstFormation?.getClientRects()[0].width
      const two = document.getElementById('1')
      if (two) {
        two.classList.add('w-[300px]')
        // scroll.value = scroll.value + 300
      }
    } else {
      console.log('composant raté')
    }
  } else if (cursor.value > 3) {
    cursor.value = 1
    scroll.value = 0
  } else {
    console.log('next')
    const el = document.getElementById(`${cursor.value}`)
    if (el) {
      scroll.value = scroll.value + 300
      el.classList.add('w-[300px]')
      const next = document.getElementById(`${cursor.value + 1}`)
      console.log(el)
      console.log(next)
      // if (next) {
      //   next.classList.add('w-[300px]')
      // }
    }
  }
  formContainer?.scrollTo(scroll.value, 0)
  console.log(formContainer)
}
// all gsap animations
// codex animation circle code in cta btn
let tl = null
const stopCodexTimeLine = () => {
  if (tl) {
    tl.pause()
  }
}
let outerRX: QuickToFunc = null
let outerRY: QuickToFunc = null
const languageOver = (e: MouseEvent) => {
  outerRX(gsap.utils.interpolate(15, -15, e.clientY / window.innerHeight))
  outerRY(gsap.utils.interpolate(-15, 15, e.clientX / window.innerWidth))
}
const languageLeave = () => {
  outerRX(0)
  outerRY(0)
}
onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  tl = gsap.timeline()
  tl.to(codex.value, { duration: 2, y: -72, repeat: -1, yoyo: true })
  // card effect for language slide
  outerRX = gsap.quickTo(lang.value, 'rotationX', { ease: 'power3', duration: 0.6 })
  outerRY = gsap.quickTo(lang.value, 'rotationY', { ease: 'power3', duration: 0.6 })
  gsap.set(lang.value, { perspective: 650 })
  // scroll event text appear
  gsap.set(split.value, { opacity: 1 })
  // const containers: HTMLDivElement[] = gsap.utils.toArray('.containr')
  const splits = new SplitType(split.value!, { types: 'lines,words' })
  gsap.from(splits.words, {
    opacity: 0,
    y: 50,
    stagger: 0.1,
    duration: 0.6,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: split.value,
      start: 'top 80%',
      end: 'bottom 50%',
      scrub: true,
    },
  })
})
</script>
<template>
  <div class="w-[95%] mx-auto">
    <!-- hero -->
    <div
      class="hero flex lg:gap-[100px] md:gap-10 gap-5 items-center justify-center lg:h-[85dvh] sm:h-[calc(90dvh-100px)] max-sm:h-[calc(90dvh-100px)] lg:flex-row flex-col-reverse md:pb-5 pb-[100px]"
    >
      <!-- blur effect -->
      <div
        class="blur-xl block w-full h-full absolute bg-primary/70 bottom-0 right-0 left-0 -z-1 transition duration-300 delay-200"
      ></div>
      <div
        class="blur-xs block w-full h-[24px] absolute bg-primary -bottom-5 right-0 left-0 z-5 transition duration-300 delay-200"
      ></div>
      <div
        class="blur-xs block w-[24px] h-full absolute bg-primary -right-1 transition duration-300 delay-200 -z-30"
      ></div>
      <!-- end blur effect -->
      <!-- social links -->
      <div
        class="flex lg:flex-col flex-row gap-7 mt-0 lg:mt-0 lg:bg-secondary/10 backdrop-blur-2xl md:p-5 p-0 rounded-[20px] shadow-2xl shadow-bleu/10"
      >
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
      <!-- header containt -->
      <div class="flex flex-col items-center justify-center max-sm:gap-5 gap-7 relative">
        <h1
          class="md:text-[32px] text-[24px] max-sm:text-[18px] text-center w-[95%] font-satoshi font-bold"
          style="font-family: 'Satoshi', sans-serif"
        >
          L'architecture de votre succès ne supporte aucune
          <span class="relative spanOne" style="font-family: 'Satoshi', sans-serif"
            >approximation.</span
          >
        </h1>
        <p class="md:text-[16px] text-[14px] text-white/80 w-[400px]">
          IA, Data & Software Architecture. Nous transformons la complexité technique en levier de
          croissance stratégique.
        </p>
        <!-- button cta -->
        <router-link :to="{ name: 'about' }">
          <div
            class="primaryDeg px-10 py-3 rounded-full relative shadownCustom transition-all duration-300 font-urbanist cursor-pointer"
            @mouseover="stopCodexTimeLine"
          >
            <div
              class="w-full h-full block absolute left-0 bottom-0 rounded-full shadow-white/50 shadow-2xl -z-40"
            ></div>
            Découvrir notre expertise
            <div class="absolute w-[60px] -right-[41px] translate-y-[14px] -z-5 blur-[2px]">
              <img src="../../components/icons/codeX.svg" alt="" class="w-full -z-3" ref="codex" />
            </div>
          </div>
        </router-link>
        <!-- language slide -->
        <div
          class="flex flex-col gap-3 mt-5 absolute md:-bottom-[140px] -bottom-[200px] glass-container backdrop-blur-2xl rounded-2xl py-5 px-7 shadow-sm cursor-pointer"
          ref="lang"
          @mouseover="languageOver"
          @mouseleave="languageLeave"
        >
          <small class="text-white/70"
            >Nous travaillons avec les technologies de référence du marché</small
          >
          <div class="flex gap-10">
            <div class="w-[50px] h-[50px] overflow-hidden">
              <img src="/c++bg.png" alt="lang-logo" class="w-full h-full object-cover" />
            </div>
            <div class="w-[50px] h-[50px] overflow-hidden">
              <img src="/goLangbg.png" alt="lang-logo" class="w-full h-full object-cover" />
            </div>
            <div class="w-[50px] h-[50px] overflow-hidden">
              <img src="/pythonLogobg.png" alt="lang-logo" class="w-full h-full object-cover" />
            </div>
            <div class="w-[50px] h-[50px] overflow-hidden">
              <img src="/jsLogo.png" alt="lang-logo" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
      <!-- end content -->
    </div>
    <!-- profil show -->
    <div id="profilSection" class="relative">
      <!-- emodji bg -->
      <!-- <div class="freeBg absolute w-[200px] h-[200px] right-1/3 top-1/3 block opacity-15"></div> -->
      <!-- <div class="freeBgChild absolute w-[200px] h-[200px] right-1/3 top-1/3 block"></div> -->
      <!--  -->
      <div class="grid grid-cols-12 w-full mb-10 mt-5">
        <div class="md:col-span-6 col-span-12 p-4">
          <div class="relative w-full h-fit border-2 border-b-0 rounded-[18px] border-bleu/10">
            <div class="degProfHeader"></div>
            <img
              src="/yellowAsset.png"
              alt=""
              class="absolute -left-5 md:w-[100px] w-[50px] bottom-[100px]"
            />
            <img src="/profilT.png" alt="" class="w-full" />
          </div>
          <p class="text-[16px] font-urbanist text-center">
            AI, Data, Software Architect and Algorithm Engineer
          </p>
          <div class="flex items-center justify-center gap-4 mt-3">
            <router-link :to="{ name: 'blogs' }">
              <div
                class="bg-blue-50/20 font-satoshi rounded-full text-white flex p-2 gap-2 items-center md:w-[120px] w-[110px] hover:scale-[0.98] transition-all duration-300 backdrop-blur-md"
              >
                <div
                  class="bg-bleu/40 border rounded-full flex items-center justify-center border-bleu/50 w-[30px] h-[30px] backdrop-blur-md"
                >
                  <img src="/seeOph.svg" alt="" class="w-[20px] h-[20px]" />
                </div>
                <router-link :to="{ name: 'blogs' }"> Insights </router-link>
              </div>
            </router-link>
            <router-link :to="{ name: 'service' }">
              <div
                class="bg-yellow-200/20 font-satoshi rounded-full text-yellow-50 flex p-2 gap-2 items-center md:w-[150px] w-fit hover:scale-[0.98] transition-all duration-300 backdrop-blur-md relative overflow-hidden"
              >
                <div
                  class="w-[30px] h-[30px] rounded-full bg-yellow-300/10 absolute -bottom-2 -right-2"
                ></div>
                <div
                  class="w-[30px] h-[30px] rounded-full bg-yellow-300/10 absolute -bottom-4 right-2"
                ></div>
                <span
                  class="bg-yellow-300/40 border rounded-full flex items-center justify-center border-yellow-300/50 w-[30px] h-[30px] backdrop-blur-md"
                >
                  <img src="/commu.svg" alt="" class="w-[20px] h-[20px]" />
                </span>
                <span class="md:block hidden"> Collaborer </span>
              </div>
            </router-link>
            <router-link :to="{ name: 'tarif' }">
              <div
                class="bg-blue-50/20 font-satoshi rounded-full text-white flex p-2 gap-2 items-center md:w-[120px] w-[110px] hover:scale-[0.98] transition-all duration-300 backdrop-blur-md"
              >
                <div
                  class="bg-bleu/40 border rounded-full flex items-center justify-center border-bleu/50 w-[30px] h-[30px] backdrop-blur-md"
                >
                  <img src="/etiquette.svg" alt="" class="w-[20px] h-[20px]" />
                </div>
                Prix
              </div>
            </router-link>
          </div>
        </div>
        <!-- right -->
        <div
          class="md:col-span-6 col-span-12 flex flex-col items-center justify-center gap-6 p-3 md:mt-0 mt-10"
        >
          <h1
            class="font-satoshi md:text-[52px] text-[32px] flex md:flex-col m-0 flex-row gap-2 md:gap-0 self-start"
          >
            <span style="text-shadow: 52px -32px 1px #cccccc25">Plamedi</span>
            <span class="md:translate-x-[100px] md:-translate-y-[20px] translate-y-[20px]"
              >Musenga</span
            >
          </h1>
          <div class="containr">
            <p class="lg:w-[435px] md:w-[350px] 250px font-urbanist md:mt-0 mt-5 text-left">
              Dans un écosystème où les solutions se ressemblent, ce sont les détails qui créent la
              singularité — et la performance. Notre approche ? Allier innovation, précision et
              pragmatisme pour des résultats concrets.
            </p>
          </div>
          <div>
            <router-link :to="{ name: 'about' }">
              <div
                class="primaryDeg py-2 w-[200px] rounded-full mt-5 font-satoshi text-[16px] relative text-center group/bs hover:scale-[1.02] transition-all duration-300"
              >
                A propos
                <img
                  src="/bs.svg"
                  class="w-[80px] absolute -right-5 -top-5 group-hover/bs:translate-x-2 transition-all duration-300"
                />
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- blogs -->
    <div>
      <div class="flex items-center md:gap-8 gap-2 lg:flex-row flex-col">
        <h2 class="w-fit font-satoshi md:text-[24px] text-[18px]">Articles recents</h2>
        <div class="flex items-center w-[64%]">
          <div class="rond rounded-full w-[15px] h-[15px] block bg-secondary"></div>
          <div class="rond rounded-full w-[100%] h-[1px] block bg-secondary"></div>
        </div>
      </div>

      <!-- blogs part -->
      <div>
        <div class="py-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 place-items-center">
          <div
            v-for="(data, index) in blogs.threeLast"
            :key="index"
            class="cart bg-secondary/10 rounded-lg lg:w-[380px] md:w-[300px] h-fit cursor-pointer group/blog w-[95%] md:m-0 m-auto hover:bg-secondary/5 transition duration-300 delay-200 ease-in-out relative backdrop-blur-md shadow-sm shadow-bleu/10"
            @click="changeRoute(data._id)"
          >
            <!-- button link -->
            <div class="degTr h-[100px] w-full bottom-0"></div>
            <div
              class="absolute bottom-5 right-1/3 w-fit z-30 md:text-[16px] text-[14px] flex items-center gap-3 glass-container rounded-full py-2 px-4 backdrop-blur-md font-urbanist hover:scale-[1.05] duration-300 transition-all"
            >
              <span>Lire la suite</span>
              <leftIcon class="text-white transition duration-300 ease-in-out" />
            </div>
            <!--  -->
            <div class="w-full h-[200px] rounded-tl-lg rounded-tr-lg relative overflow-hidden">
              <!-- little background effect -->
              <div
                class="absolute top-0 left-0 w-full h-full bg-primary/30 group-hover/blog:bg-primary/15"
              ></div>
              <!-- badge -->
              <div class="absolute w-full top-[70%] transition duration-300 ease-in-out">
                <div class="flex items-center justify-between absolute w-full px-5">
                  <div
                    class="bag primaryDeg w-fit rounded-full md:px-7 px-5 py-1 border border-primary truncate"
                  >
                    {{ data.categorie }}
                  </div>
                  <p>{{ data.timePassed }}</p>
                </div>
              </div>

              <img
                :src="`/${data.imageBanner}`"
                alt=""
                class="w-full h-full overflow-hidden object-cover rounded-tl-lg rounded-tr-lg group-hover/blog:scale-110 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div class="p-5">
              <h2 class="font-satoshi md:text-2xl text-xl">{{ data.title }}</h2>
              <p class="h-[80px] mt-4 overflow-clip">{{ data.body }}</p>
            </div>
          </div>
        </div>

        <!-- see more link -->
        <div class="flex justify-end mb-7">
          <router-link
            :to="{ name: 'blogs' }"
            class="gradient-border hover:shadow-sm hover:shadow-bleu/70 group/btn transition duration-300 ease-in-out delay-200"
            ><span class="flex items-center">
              <span
                class="font-inter translate-x-2 gradient-text group-hover/btn:-translate-x-1 transition duration-300 ease-in-out"
              >
                Voir plus
              </span>
              <leftIcon
                class="text-bleu invisible group-hover/btn:visible group-hover/btn:translate-x-1 transition duration-300 ease-in-out"
              />
            </span>
          </router-link>
        </div>
      </div>
    </div>

    <!-- formation -->
    <!-- section title  -->
    <!-- <div class="flex items-center md:gap-8 gap-2 lg:flex-row flex-col">
      <h2 class="w-fit font-abeeze md:text-[24px] text-[18px]">Formation</h2>
      <div class="flex items-center w-[80%]">
        <div class="rond rounded-full w-[15px] h-[15px] block bg-secondary"></div>
        <div class="rond rounded-full w-[100%] h-[1px] block bg-secondary"></div>
      </div>
    </div> -->
    <!-- formation part -->

    <!-- <div class="overflow-hidden my-10 flex gap-7" id="formContainer">
      <div v-for="(data, index) in formation" :key="index" class="" style="flex-wrap: nowrap">
        only when the index===1
        <div
          v-if="index === 0"
          class="lg:w-[500px] w-[300px] bg-secondary/25 rounded-lg cursor-pointer group/form hover:bg-secondary/15 transition duration-300 delay-200 ease-in-out"
          @click="router.push({ name: 'service' })"
          :id="index.toString()"
        >
          formation header
          <div class="w-full h-[150px] rounded-tl-lg rounded-tr-lg relative overflow-hidden">
            little background effect
            <div class="absolute top-0 left-0 w-full h-full bg-primary/25"></div>
            badge
            <div class="absolute w-full top-[70%] transition duration-300 ease-in-out">
              <div class="flex items-center justify-between absolute w-full px-5">
                <div
                  class="bag primaryDeg w-fit rounded-full lg:px-7 px-5 lg:text-[16px] text-[12px] py-1 border border-primary truncate"
                >
                  {{ data.categorie }}
                </div>
                <p>{{ data.timePassed }}</p>
              </div>
            </div>

            <img
              :src="`/${data.imageBanner}`"
              alt=""
              class="w-full h-full overflow-hidden object-cover rounded-tl-lg rounded-tr-lg group-hover/form:scale-110 transition-transform duration-300 ease-in-out"
            />
          </div>

          formation body

          <div class="p-5">
            <h2 class="font-abeeze text-2xl mb-7">{{ data.title }}</h2>
            <div class="flex gap-12">
              <div class="profitInstructure relative w-fit">
                <img
                  :src="`/${data.instructeur?.profil}`"
                  alt="instructor-profil"
                  class="w-[50px] h-[50px] object-cover rounded-full"
                />
                <div
                  class="w-[50px] h-[50px] object-cover rounded-full block bg-secondary absolute right-[-50%] top-0 -z-10"
                ></div>
              </div>
              <div class="w-[80%]">
                <p class="border-b border-secondary">Instructeur</p>
                <div class="md:text-2xl text-xl">{{ data.instructeur?.name }}</div>
              </div>
            </div>
          </div>
        </div>
        all the rest
        <div
          class="lg:w-[300px] flex relative rounded-lg overflow-hidden items-center justify-center h-full group/back cursor-pointer md:w-[250px] w-[95%]"
          @click="router.push({ name: 'service' })"
          :id="index.toString()"
          v-else
        >
          <img
            :src="`/${data.imageBanner}`"
            alt=""
            class="object-coverw-full h-full absolute top-0 left-0 -z-20"
          />
          <div
            class="bg-black/60 block w-full h-full absolute top-0 left-0 -z-20 group-hover/back:bg-black/45 transition duration-300 ease-in-out"
          ></div>
          <div class="title text-center w-[70%] text-2xl">{{ data.title }}</div>
        </div>
      </div>
    </div>
    <div class="flex justify-end mb-7 -translate-x-5">
      <button
        class="gradient-border group/btn transition duration-300 ease-in-out delay-200 cursor-pointer"
        @click="putOtherFormation"
      >
        <span class="flex items-center">
          <span
            class="translate-x-2 gradient-text group-hover/btn:-translate-x-1 transition duration-300 ease-in-out"
          >
            Voir plus
          </span>
          <leftIcon
            class="text-bleu invisible group-hover/btn:visible group-hover/btn:translate-x-1 transition duration-300 ease-in-out focus:visible"
          />
        </span>
      </button>
    </div> -->

    <!-- pattern bg -->
    <div class="blogHeaderBg2 h-[100px] w-full opacity-65 mb-10"></div>
    <!-- newletter section  -->
    <NewsLetterComponent />

    <!-- categories -->

    <!-- <div class="mb-8">
      <h2 class="font-satoshi text-2xl">Toutes les categories</h2>
      <div class="flex items-center justify-center my-10">
        <div
          class="grid grid-cols-2 lg:w-1/2 md:w-[60%] w-[90%] gap-y-[30px] relative lg:text-[16px] text-[12px] place-items-center"
        >
          <div
            class="text-bleu bg-secondary rounded-[50px] text-center w-fit md:px-8 absolute lg:-left-[40%] md:top-[35%] md:-left-[30%] top-[110%] px-5 max-[380]:px-1"
          >
            Decryptage du gourou
          </div>
          <div
            class="text-bleu bg-secondary rounded-[50px] text-center w-fit absolute lg:-right-[35%] top-[35%] md:-right-[25%] px-5 max-[380]:px-1"
          >
            Service et partariat
          </div>
          <div class="text-bleu bg-secondary rounded-[50px] text-center w-fit px-5 max-[380]:px-1">
            Rituels du gourou
          </div>
          <div
            class="text-bleu bg-secondary rounded-[50px] text-center w-fit px-5 max-[380]:px-1 truncate"
          >
            Oracles du gourou
          </div>
          <div
            class="text-bleu bg-secondary rounded-[50px] text-center w-fit px-5 max-[380]:px-1 truncate"
          >
            Grimoire du gourou
          </div>
          <div
            class="text-bleu bg-secondary rounded-[50px] text-center w-fit px-5 max-[380]:px-1 truncate"
          >
            Formation & mentorat
          </div>
        </div>
      </div>
    </div> -->

    <!--  ask the gourou-->
    <div class="mb-8">
      <h2 class="font-satoshi text-2xl">Ask the Guru</h2>

      <div class="flex justify-center flex-col items-center gap-8 mt-8">
        <div class="md:w-[60%] text-center w-full">
          Une question sur l'IA, l'ingénierie des données, l'architecture logicielle ou
          l'algorithmique ? Posez-la au Grand Gourou et obtenez une réponse claire, précise et
          experte !"
        </div>

        <textarea
          name="message"
          id="message"
          v-model="userMessage"
          class="md:w-1/2 w-[70%] bg-secondary placeholder:text-black/70 rounded-lg p-3 text-primary resize-none h-[100px] focus:border-bleu/90 focus:outline-bleu/90"
          placeholder="Ecrivez vos questions ici"
        ></textarea>
      </div>
      <button
        @click="sendMessage"
        class="text-secondary bg-yl px-7 rounded-full py-2 md:ml-[25%] ml-[15%] mt-8 cursor-pointer hover:scale-[1.02] transition-all duration-300"
        v-if="!isSendingMessage"
      >
        Envoyer
      </button>
      <button
        disabled
        class="text-secondary bg-yl px-7 rounded-full py-2 md:ml-[25%] ml-[15%] mt-8 cursor-pointer hover:scale-[1.02] transition-all duration-300 opacity-25"
        v-if="isSendingMessage"
      >
        <span
          class="inline-block w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"
        ></span>
      </button>
      <div class="md:ml-[25%] ml-[15%]">
        <small class="text-red-500" v-if="errorUserMessage">{{ errorUserMessage }}</small>
        <small class="text-green-500" v-if="successUserMessage">{{ successUserMessage }}</small>
      </div>
    </div>

    <!-- footer -->
    <FooterComponent />
  </div>
</template>
<style lang="scss">
.hero {
  // background-color: #dfdbe5;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  backdrop-filter: blur(10px);
  // filter: blur(0.5px);
  position: relative;
  &:before {
    content: '';
    display: block;
    width: 50px;
    height: 100%;
    position: absolute;
    background: #02000a;
    z-index: -50000;
    filter: blur(8px);
    left: -5px;
  }
  /*&:after {
    content: '';
    display: block;
    width: 50px;
    height: 100%;
    position: absolute;
    background: #02000a;
    z-index: -50000;
    filter: blur(8px);
    right: -5px;
  }*/
}
.degTr {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 20%, #02000a 60%);
  position: absolute;
}
.degProfHeader {
  background: linear-gradient(180deg, rgb(0, 0, 0, 0.2), #02000a);
  position: absolute;
  width: 100%;
  height: 100%;
}
.spanOne {
  &:before {
    content: '';
    display: block;
    background: url('/shapeOne.svg');
    position: absolute;
    width: 130px;
    height: 20px;
    bottom: -18px;
    right: 0;
  }
}
</style>
