<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  scroll: Boolean,
})
const xScreen = ref<number>(0)
const yScreen = ref<number>(0)
const menuOpen = ref<boolean>(false)

const setHover = (e: Event) => {
  xScreen.value = (e as MouseEvent).x
  yScreen.value = (e as MouseEvent).y
}
const openMenu = (): void => {
  menuOpen.value = !menuOpen.value
}
</script>
<template>
  <div>
    <div
      class="z-50 desktop hidden lg:flex items-center justify-between px-10 pt-6 pb-2 fixed w-full transition duration-300 delay-200"
      :class="{
        'border-b border-white ': scroll,
      }"
    >
      <div
        class="blur-xl block w-full h-full absolute bg-primary top-0 left-0 -z-1 transition duration-300 delay-200"
      ></div>
      <div
        :class="`w-4 h-4 bg-secondary rounded-full blur-md absolute transition duration-300 delay-200 right-[${xScreen}px] top-[40px]`"
      ></div>
      <div
        :class="`w-4 h-4 bg-secondary rounded-full blur-md absolute transition duration-300 left-[900px] top-[${yScreen}px]`"
      ></div>
      <div class="logo">
        <img src="@/assets/CHEZLEGRANDGOUROU.svg" alt="logo-chezlegrandgourou" />
      </div>

      <nav
        class="text-white text-deux flex gap-6 items-center bg-secondary/10 rounded-full h-[50px] px-7"
        @mouseover="setHover"
      >
        <router-link
          :to="{ name: 'home' }"
          class="hover:text-bleu/50 transition duration-300 delay-200 hover:after:block after:content-[''] after:bg-secondary/45 after:left-1/2 after:-bottom-1 after:w-1 after:h-1 after:rounded-full after:absolute relative after:transition after:duration-300 after:delay-200 after:hidden"
          >Acceuil</router-link
        >
        <router-link
          :to="{ name: 'blogs' }"
          class="hover:text-bleu/50 transition duration-300 hover:after:block after:content-[''] after:bg-secondary/45 after:left-1/2 after:-bottom-1 after:w-1 after:h-1 after:rounded-full after:absolute relative after:transition after:duration-300 after:delay-200 after:hidden"
          >Blog</router-link
        >
        <router-link
          :to="{ name: 'about' }"
          class="hover:text-bleu/50 transition duration-300 hover:after:block after:content-[''] after:bg-secondary/45 after:left-1/2 after:-bottom-1 after:w-1 after:h-1 after:rounded-full after:absolute relative after:transition after:duration-300 after:delay-200 after:hidden"
          >À propos</router-link
        >
        <router-link
          :to="{ name: 'service' }"
          class="hover:text-bleu/50 transition duration-300 hover:after:block after:content-[''] after:bg-secondary/45 after:left-1/2 after:-bottom-1 after:w-1 after:h-1 after:rounded-full after:absolute relative after:transition after:duration-300 after:delay-200 after:hidden"
          >Services et collaboration</router-link
        >
      </nav>

      <button
        class="transition duration-300 delay-200 cursor-pointer border rounded-md border-white text-white px-5 py-1 h-fit hover:bg-white hover:text-primary"
      >
        Communauté
      </button>
    </div>

    <!-- mobile menu -->
    <div
      class="z-50 mobileMenu lg:hidden w-screen py-6 flex items-center justify-between fixed transition duration-300 delay-200"
      :class="{
        'border-b border-white ': scroll,
      }"
    >
      <div
        class="blur-xl block w-full h-full absolute bg-primary top-0 left-0 -z-1 transition duration-300 delay-200"
      ></div>
      <div class="logo ml-2 md:ml-5">
        <img
          src="@/assets/CHEZLEGRANDGOUROU.svg"
          alt="logo-chezlegrandgourou"
          class="md:w-[350px] w-[250px]"
        />
      </div>

      <transition name="fade" appear>
        <div
          class="flex flex-col gap-5 text-white absolute top-13 bg-gray-900 backdrop-blur-lg border-t w-full border-secondary/35 h-screen p-5"
          v-if="menuOpen"
        >
          <router-link
            :to="{ name: 'home' }"
            class="hover:text-bleu/50 transition duration-300 delay-200 h-fit text-xl"
            >Acceuil</router-link
          >
          <router-link
            :to="{ name: 'blogs' }"
            class="hover:text-bleu/50 transition duration-300 h-fit text-xl"
            >Blog</router-link
          >
          <router-link
            :to="{ name: 'about' }"
            class="hover:text-bleu/50 transition duration-300 h-fit text-xl"
            >À propos</router-link
          >
          <router-link
            :to="{ name: 'service' }"
            class="hover:text-bleu/50 transition duration-300 h-fit text-xl"
            >Services et collaboration</router-link
          >
          <button
            class="border rounded-md border-white text-white px-5 py-1 w-fit text-xl hover:bg-white hover:text-primary z-50"
          >
            Communauté
          </button>
        </div>
      </transition>

      <button @click="openMenu" class="mr-2 md:mr-5">
        <div class="text-white w-8 grid gap-[2px]">
          <span
            class="h-1 w-[80%] bg-secondary block rounded-full transistion duration-200 delay-100"
            :class="{ 'rotate-45 translate-y-[6px]': menuOpen }"
          ></span>
          <span
            class="h-1 w-[50%] bg-secondary block rounded-full transistion duration-200 delay-10"
            :class="{ '-rotate-45 -translate-y-[1px] w-[80%]': menuOpen }"
          ></span>
          <span
            class="h-1 w-[30%] bg-secondary block rounded-full transistion duration-200 delay-10"
            :class="{ hidden: menuOpen }"
          ></span>
        </div>
      </button>
    </div>
  </div>
</template>
