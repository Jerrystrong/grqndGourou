<script setup lang="ts">
import { Splide, SplideSlide, SplideTrack, Options } from '@splidejs/vue-splide'
import WhatsappIcon from '../../components/whatsappIcon.vue'
import { ref } from 'vue'
import InputComponent from '@/components/inputComponent.vue'
import worldCountries from 'world-countries'
import FooterComponent from '@/components/footerComponent.vue'
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
// client form
const clientName = ref('')
const clientEmail = ref('')
const clientFirm = ref('')
const clientAge = ref('')
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
</script>
<template>
  <div>
    <!-- header -->
    <div>
      <div
        class="flex items-center md:justify-end justify-center lg:h-[65dvh] md:h-[45dvh] h-[65dvh] flex-col gap-7 relative"
      >
        <div class="flex self-start translate-x-10 opacity-50">
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

        <h1 class="md:text-5xl text-2xl second-text-gradient text-center">
          Offrez à votre business un nouveau souffle
        </h1>
        <div class="flex gap-4">
          <button
            class="text-bleu bg-secondary px-5 py-1 rounded-full flex items-center gap-3"
            @click="whatsappCall"
          >
            Appel
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

        <div class="flex flex-row-reverse self-end -translate-x-10 opacity-55">
          <div class="relative">
            <img src="/coupeProfJey.png" alt="students" class="rounded-full w-10 h-10" />
            <div class="w-10 h-10 rounded-full bg-secondary absolute -right-1/2 top-0 -z-20"></div>
          </div>

          <div
            class="-translate-x-2 flex items-center bg-bleu/50 border border-bleu rounded-full font-abeeze md:px-6 px-4 py-1 rounded-full font-abeeze md:text-[16px] text-[12px]"
          >
            10+ Collaborations
          </div>
        </div>
      </div>
    </div>
    <!--  -->

    <!-- slide -->
    <div class="w-[90%] mx-auto">
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
    <!--  -->

    <!-- formulaire -->
    <div class="my-[100px] flex items-center justify-center flex-col gap-7">
      <h2 class="text-3xl lg:w-[50%] w-[95%] text-center">
        Remplissez ce formulaire en nous parlant de vous et de votre entreprise
      </h2>
    </div>

    <div class="flex justify-center py-7 gap-1 lg:flex-row flex-col">
      <div
        class="bg-secondary/20 md:w-[400px] w-[90%] mx-auto p-5 h-full md:rounded-tl-lg rounded-tl-0"
      >
        <h2 class="font-semibold text-2xl my-5">Vos coordonnées</h2>
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
      <div class="flex flex-col gap-6 md:w-fit w-[90%] mx-auto">
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
      </div>
    </div>
    <!-- footer -->
    <FooterComponent class="w-[95%] mx-auto" />
  </div>
</template>
