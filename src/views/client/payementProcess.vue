<script setup lang="ts">
import { useRouter } from 'vue-router'
import LeftIcon from '../../components/icons/leftIcon.vue'
import worldCountries from 'world-countries'
import { ref } from 'vue'
const router = useRouter()
const paymentMethod = ref('visa')
const clientCountry = ref('DR Congo')
const countryCode = ref('+243')
const countryFlag = ref('CD')
const ClientCountryActive = ref(false)
const setClientCountry = (country: string, flag: string, code: string[]) => {
  clientCountry.value = country
  countryCode.value = code.join('')
  countryFlag.value = flag
  ClientCountryActive.value = false
}
const goBack = () => {
  router.back()
}
</script>
<template>
  <div class="pt-[100px]">
    <div class="w-[90%] mx-auto">
      <button class="flex gap-1 items-center" @click="goBack">
        <LeftIcon class="rotate-[180deg]" />Retour
      </button>
      <div class="grid md:grid-cols-[60%_40%] grid-cols-1">
        <div class="p-5 hero relative">
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
          <div
            class="blur-xs block w-[24px] h-full absolute bg-primary -right-1 transition duration-300 delay-200 -z-30"
          ></div>
          <!-- end blur effect -->
          <h2 class="font-abeeze text-[24px]">Selectionnez le méthode de payement</h2>
          <div class="grid gap-2 mt-5 z-50">
            <label
              class="bg-secondary/10 p-2 flex justify-between cursor-pointer"
              :class="{ 'border-2 border-secondary/10 bg-secondary/20': paymentMethod === 'visa' }"
            >
              <div class="flex gap-2 items-center">
                <img src="/visaCard.png" class="w-[30px] h-[30px]" /> Credit/ Débit (Visa)
              </div>
              <input
                type="radio"
                name="paymentMethod"
                id="paymentMethod"
                v-model="paymentMethod"
                value="visa"
                class="bg-bleu accent-bleu"
              />
            </label>
            <label
              class="bg-secondary/10 p-2 flex justify-between cursor-pointer"
              :class="{
                'border-2 border-secondary/10 bg-secondary/20': paymentMethod === 'mobile',
              }"
            >
              <div class="flex gap-2 items-center">
                <img src="/mobileMoney.png" class="w-[30px] h-[30px]" /> Mobile money
              </div>
              <!-- <p>Mobile money</p> -->
              <input
                type="radio"
                name="paymentMethod"
                id="paymentMethod"
                v-model="paymentMethod"
                value="mobile"
                class="bg-bleu accent-bleu"
              />
            </label>
          </div>
          <div class="bg-secondary/10 h-[250px] mt-4 p-5">
            <div>
              <small>Abonnement mentuel</small>
              <div class="flex gap-2 items-center">
                <h2 class="text-[32px]">5$</h2>
                <small>Par mois</small>
              </div>
            </div>
            <ul class="mt-3 text-sm text-gray-700 space-y-1">
              <li>✔️ Accès complet à toutes les fonctionnalités</li>
              <li>✔️ Assistance prioritaire 24/7</li>
              <li>✔️ Annulation à tout moment</li>
              <li>✔️ Renouvellement automatique chaque mois</li>
            </ul>
          </div>
        </div>
        <div class="p-5" v-if="paymentMethod === 'visa'">
          <h2 class="text-[32px]">Payement via carte visa</h2>
          <div>
            <form class="space-y-4">
              <div>
                <label class="block text-sm font-medium mb-1">Nom du titulaire</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  class="w-full border rounded-lg p-2 border-secondary/20 focus:border-secondary transition-all duration-300"
                />
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Numéro de carte</label>
                <input
                  type="text"
                  placeholder="4111 1111 1111 1111"
                  maxlength="16"
                  class="w-full border rounded-lg p-2 border-secondary/20 focus:border-secondary transition-all duration-300"
                />
              </div>
              <div class="flex gap-4">
                <div class="flex-1">
                  <label class="block text-sm font-medium mb-1">Expiration</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    class="w-full border rounded-lg p-2 border-secondary/20 focus:border-secondary transition-all duration-300"
                  />
                </div>
                <div class="flex-1">
                  <label class="block text-sm font-medium mb-1">CVV</label>
                  <input
                    type="text"
                    placeholder="123"
                    maxlength="3"
                    class="w-full border rounded-lg p-2 border-secondary/20 focus:border-secondary transition-all duration-300"
                  />
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium mb-1">Adresse de facturation</label>
                <input
                  type="text"
                  placeholder="Rue, Ville, Code postal"
                  class="w-full border rounded-lg p-2 border-secondary/20 focus:border-secondary transition-all duration-300"
                />
              </div>
              <button
                type="submit"
                class="w-full primaryDeg text-white py-2 rounded-lg font-abeeze"
              >
                Procéder au payement
              </button>
            </form>
          </div>
        </div>
        <div v-else class="p-5">
          <h2 class="text-[32px]">Payement Mobile Money</h2>
          <div class="space-y-4 mt-5">
            <div
              class="border border-secondary/20 px-5 py-2 rounded-xl relative"
              :class="{ 'border-secondary': ClientCountryActive === true }"
            >
              <label for="" class="font-bold">Pays</label>
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
            <div>
              <label class="block text-sm font-medium mb-1">Numéro de téléphone</label>
              <div class="flex gap-2">
                <input
                  type="text"
                  readonly
                  v-model="countryCode"
                  class="w-[100px] border border-secondary/20 bg-secondary/10 rounded-md text-center"
                />
                <input
                  type="text"
                  placeholder="982 220 8865"
                  class="w-full border rounded-lg p-2 border-secondary/20 focus:border-secondary transition-all duration-300"
                />
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Opérateur</label>
              <div class="flex gap-5">
                <div
                  class="cursor-pointer w-[80px] h-[80px] border border-bleu/40 rounded-md overflow-hidden hover:scale-105 hover:transition transition duration-300 ease-in-out"
                >
                  <img src="/orangeMoney.jpeg" alt="" class="w-full h-full object-cover" />
                </div>
                <div
                  class="cursor-pointer w-[80px] h-[80px] border border-bleu/40 rounded-md overflow-hidden hover:scale-105 hover:transition transition duration-300 ease-in-out"
                >
                  <img src="/airtelMoney.jpeg" alt="" class="w-full h-full object-cover" />
                </div>
                <div
                  class="cursor-pointer w-[80px] h-[80px] border border-bleu/40 rounded-md overflow-hidden hover:scale-105 hover:transition transition duration-300 ease-in-out"
                >
                  <img src="/mpesa.jpeg" alt="" class="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <button class="w-full primaryDeg text-white py-2 rounded-lg font-abeeze" type="submit">
              Procéder au payement
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
