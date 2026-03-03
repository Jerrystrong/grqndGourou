<script setup lang="ts">
import InputComponent from './inputComponent.vue'
import worldCountries from 'world-countries'
import { ref } from 'vue'
defineProps<{
  serviceName: string
}>()
const clientName = ref('')
const clientEmail = ref('')
const clientFirm = ref('')
const clientAge = ref('')
// const isFormVisible: boolean = ref(false)
const clientCountry = ref('DR Congo')
const countryCode = ref('+243')
const countryFlag = ref('CD')
const clientPhoneNumber = ref('')
const clientProfession = ref<string | undefined>()
const professionActive = ref(false)
// const clientService = ref<string[]>([])
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
</script>
<template>
  <div class="form">
    <div class="grid gap-5">
      <InputComponent
        name="Noms"
        placeholder="Entrez votre nom complet"
        type="text"
        inputId="userName"
        v-model="clientName"
      >
        <i class="bx bx-user"></i>
      </InputComponent>
      <InputComponent
        name="Email"
        placeholder="Entrez votre email"
        type="email"
        inputId="userEmail"
        v-model="clientEmail"
      >
        <i class="bx bx-envelope"></i>
      </InputComponent>
      <!-- PROFESSION -->
      <div
        class="border border-secondary/20 px-5 py-2 rounded-xl bg-secondary/10 focus-within:bg-secondary/20 transition duration-300 ease-in-out relative"
      >
        <label for="" class="font-bold">Proffession</label>
        <div class="flex gap-3 items-center justify-between" @click="professionActive = true">
          <button>{{ clientProfession || 'Selectionnez' }}</button>
          <i class="bx bx-caret-down"></i>
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
      <div
        class="border border-secondary/20 px-5 py-2 rounded-xl bg-secondary/10 focus-within:bg-secondary/20 transition duration-300 ease-in-out relative"
      >
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
      <div
        class="border border-secondary/20 px-5 py-2 rounded-xl bg-secondary/10 focus-within:bg-secondary/20 transition duration-300 ease-in-out relative"
      >
        <label for="" class="font-bold">Pays</label>
        <div class="flex gap-3 items-center justify-between" @click="ClientCountryActive = true">
          <button class="flex gap-4">
            <span
              class="border border-secondary/20 py-2 rounded-xl bg-secondary/10 focus-within:bg-secondary/20 transition duration-300 ease-in-out px-2 font-semibold"
              >{{ countryFlag }}</span
            >
            {{ clientCountry }}
          </button>
          <i class="bx bx-caret-down"></i>
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
      <div
        class="border border-secondary/20 px-5 py-2 rounded-xl bg-secondary/10 focus-within:bg-secondary/20 transition duration-300 ease-in-out relative"
      >
        <label for="" class="font-bold">Portable</label>
        <div class="flex gap-3 items-center">
          <div
            class="border border-secondary/20 py-2 rounded-xl bg-secondary/10 focus-within:bg-secondary/20 transition duration-300 ease-in-out px-2 font-semibold"
          >
            {{ countryCode }}
          </div>
          <input
            type="text"
            placeholder="Entrez votre numéro de portable"
            class="w-full border-0 outline-none bg-transparent text-secondary/70 placeholder:text-secondary/70"
            v-model="clientPhoneNumber"
          />
        </div>
      </div>
      <!-- service -->
      <div
        class="border border-secondary/20 px-5 py-2 rounded-xl bg-secondary/10 focus-within:bg-secondary/20 transition duration-300 ease-in-out relative"
      >
        <label for="" class="font-bold">Service</label>
        <div class="flex gap-3 items-center">
          <input
            type="text"
            placeholder="Entrez votre numéro de portable"
            readonly
            class="w-full border-0 outline-none bg-transparent text-secondary/70 placeholder:text-secondary/70"
            :value="serviceName"
          />
        </div>
      </div>

      <!-- btn -->
      <button
        class="text-white primaryDeg rounded-full p-3 font-bold"
        style="font-family: 'Satoshi', sans-serif"
      >
        Entrez en contact
      </button>
    </div>
  </div>
</template>
