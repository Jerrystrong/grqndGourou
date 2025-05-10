<script setup lang="ts">
import leftIcon from '../../components/icons/leftIcon.vue'
import { useBlogStore } from '../../stores/blog'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { useFetch } from '../../composable/useFetch'
import useDuration from '../../composable/useDuration'
import BounderBal from '../../components/bounderBal.vue'
import FooterComponent from '../../components/footerComponent.vue'
import WhatsappIcon from '../../components/whatsappIcon.vue'
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

// new letter logic
const userMail = ref<string>('')
const userName = ref<string>('')
const sendNewsLetter = () => {
  console.log('cordonate send with success')
}

// user message
const userMessage = ref<string>('')
const sendMessage = () => {
  console.log('message send with success')
}
</script>
<template>
  <div class="w-[95%] mx-auto">
    <!-- hero -->
    <div
      class="hero flex lg:gap-[100px] gap-10 items-center justify-center lg:h-screen sm:h-[calc(100dvh-100px)] max-sm:h-[calc(100dvh-100px)] lg:flex-row flex-col-reverse"
    >
      <div class="flex lg:flex-col flex-row gap-7">
        <a href="" class="">
          <WhatsappIcon w="30" h="30" />
        </a>
        <a href="">
          <img
            src="@/assets/linkedin.svg"
            alt=""
            class="lg:w-[50px] lg:h-[50px] w-[30px] h-[30px]"
          />
        </a>
        <a href="">
          <img
            src="@/assets/twitter.svg"
            alt=""
            class="lg:w-[50px] lg:h-[50px] w-[30px] h-[30px]"
          />
        </a>
      </div>
      <div class="flex flex-col items-center justify-center max-sm:gap-5 gap-7">
        <h1 class="md:text-[32px] text-[24px] max-sm:text-[18px] text-center w-[95%] font-abeeze">
          Façonner l'avenir du numérique avec intelligence et précision : expert en IA, Ingénierie
          des Données, Architecture Logicielle et Algorithmique, j'allie innovation et performance
          pour créer des solutions technologiques d'excellence.
        </h1>
        <router-link :to="{ name: 'blogs' }">
          <div class="primaryDeg px-10 py-3 rounded-full relative shadownCustom">
            <div
              class="w-full h-full block absolute left-0 bottom-0 rounded-full shadow-white shadow-2xl -z-40"
            ></div>
            Lire mon blog
          </div>
        </router-link>
      </div>
    </div>

    <!-- blogs -->
    <div>
      <div class="flex items-center md:gap-8 gap-2 lg:flex-row flex-col">
        <h2 class="w-fit font-abeeze md:text-[24px] text-[18px]">Articles recents</h2>
        <div class="flex items-center w-[80%]">
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
            class="cart bg-secondary/20 rounded-lg lg:w-[380px] md:w-[300px] h-fit cursor-pointer group/blog w-[95%] md:m-0 m-auto hover:bg-secondary/15 transition duration-300 delay-200 ease-in-out before before:content-[''] before:w-full before:h-[50px] before:bg-primary before:block before:absolute relative before:bottom-0 before:z-30 z-10 before:rounded-bl-lg before:rounded-br-lg before:blur-lg"
            @click="changeRoute(data._id)"
          >
            <div class="w-full h-[200px] rounded-tl-lg rounded-tr-lg relative overflow-hidden">
              <!-- little background effect -->
              <div class="absolute top-0 left-0 w-full h-full bg-primary/25"></div>
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
              <h2 class="font-abeeze text-2xl">{{ data.title }}</h2>
              <p class="h-[80px] mt-4 overflow-clip">{{ data.body }}</p>
            </div>
          </div>
        </div>

        <div class="flex justify-center mb-7">
          <router-link :to="{ name: 'blogs' }" class="gradient-border"
            ><span
              class="flex items-center group/btn transition duration-300 ease-in-out delay-200"
            >
              <span
                class="translate-x-2 gradient-text group-hover/btn:-translate-x-1 transition duration-300 ease-in-out"
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
    <div class="flex items-center md:gap-8 gap-2 lg:flex-row flex-col">
      <h2 class="w-fit font-abeeze md:text-[24px] text-[18px]">Formation</h2>
      <div class="flex items-center w-[80%]">
        <div class="rond rounded-full w-[15px] h-[15px] block bg-secondary"></div>
        <div class="rond rounded-full w-[100%] h-[1px] block bg-secondary"></div>
      </div>
    </div>
    <!-- formation part -->

    <div class="overflow-hidden my-10 flex gap-7">
      <div v-for="(data, index) in formation" :key="index" class="" style="flex-wrap: nowrap">
        <!-- only when the index===1 -->
        <div
          v-if="index === 0"
          class="lg:w-[500px] w-[300px] bg-secondary/25 rounded-lg cursor-pointer group/form hover:bg-secondary/15 transition duration-300 delay-200 ease-in-out"
          @click="router.push({ name: 'service' })"
        >
          <!-- formation header -->
          <div class="w-full h-[150px] rounded-tl-lg rounded-tr-lg relative overflow-hidden">
            <!-- little background effect -->
            <div class="absolute top-0 left-0 w-full h-full bg-primary/25"></div>
            <!-- badge -->
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

          <!-- formation body -->

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
        <!-- all the rest -->
        <div
          class="lg:w-[300px] flex relative rounded-lg overflow-hidden items-center justify-center h-full group/back cursor-pointer md:w-[250px] w-[95%]"
          @click="router.push({ name: 'service' })"
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
      <button class="gradient-border">
        <span class="flex items-center group/btn transition duration-300 ease-in-out delay-200">
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
    </div>

    <!-- newletter section  -->
    <div
      class="relative bg-secondary w-full h-[300px] flex items-center justify-center flex-col text-primary lg:gap-6 gap-2 mb-10 overflow-hidden"
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
          class="border border-bleu px-2 rounded-lg placeholder:text-black/70 focus:outline-2 py-1 focus:outline-bleu/60 focus:border-bleu focus:transition focus:placeholder:text-black/50 transition duration-300 ease-in-out active:outline-bleu/60 active:outline-2"
          v-model="userName"
        />
        <div class="flex gap-2">
          <input
            type="email"
            name="userMail"
            id="userMail"
            placeholder="Entrez votre e-mail"
            class="border border-bleu px-2 rounded-lg placeholder:text-black/70 focus:outline-2 py-1 focus:outline-bleu/60 focus:border-bleu focus:transition focus:placeholder:text-black/50 transition duration-300 ease-in-out active:outline-bleu/60 active:outline-2"
            v-model="userMail"
          />
          <button @click="sendNewsLetter" class="text-secondary bg-bleu px-7 rounded-lg py-1">
            Envoyer
          </button>
        </div>
      </div>
    </div>

    <!-- categories -->

    <div class="mb-8">
      <h2 class="font-abeeze text-2xl">Toutes les categories</h2>
      <div class="flex items-center justify-center my-10">
        <div
          class="grid grid-cols-2 lg:w-1/2 md:w-[60%] w-[90%] gap-y-[30px] relative lg:text-[16px] text-[12px] place-items-center"
        >
          <div
            class="text-bleu bg-secondary rounded-[50px] text-center w-fit md:px-8 absolute lg:-left-[40%] md:top-[35%] md:-left-[30%] top-[110%] px-5 max-[380]:px-1"
          >
            Decryptage du goourou
          </div>
          <div
            class="text-bleu bg-secondary rounded-[50px] text-center w-fit absolute lg:-right-[35%] top-[35%] md:-right-[25%] px-5 max-[380]:px-1"
          >
            Service et partaria
          </div>
          <div class="text-bleu bg-secondary rounded-[50px] text-center w-fit px-5 max-[380]:px-1">
            Rituels du Code
          </div>
          <div
            class="text-bleu bg-secondary rounded-[50px] text-center w-fit px-5 max-[380]:px-1 truncate"
          >
            Oracles de la Cyber
          </div>
          <div
            class="text-bleu bg-secondary rounded-[50px] text-center w-fit px-5 max-[380]:px-1 truncate"
          >
            Grimoire des Outils
          </div>
          <div
            class="text-bleu bg-secondary rounded-[50px] text-center w-fit px-5 max-[380]:px-1 truncate"
          >
            Formation & mentorat
          </div>
        </div>
      </div>
    </div>

    <!--  ask the gourou-->
    <div class="mb-8">
      <h2 class="font-abeeze text-2xl">Ask the Guru</h2>

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
          class="md:w-1/2 w-[70%] bg-secondary placeholder:text-black/70 rounded-lg p-3 text-primary"
          placeholder="Ecrivez vos questions ici"
        ></textarea>
      </div>
      <button
        @click="sendMessage"
        class="text-secondary bg-bleu px-7 rounded-lg py-1 md:ml-[25%] ml-[15%] mt-8"
      >
        Envoyer
      </button>
    </div>

    <!-- footer -->
    <FooterComponent />
  </div>
</template>
