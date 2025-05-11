<script setup lang="ts">
import { ref } from 'vue'
import { useBlogStore } from '../../stores/blog'
import FooterComponent from '../../components/footerComponent.vue'
import SearchComponent from '../../components/searchComponent.vue'
import { useRouter } from 'vue-router'
import SectionHeader from '../../components/sectionHeader.vue'

type Blog = {
  readonly _id: string
  title: string
  imageBanner: string
  categorie: string
  description?: string
  body: string
  createAt: number | string
  timePassed?: string
}
const props = defineProps<{
  searchTerm: string
}>()
// router
const router = useRouter()
// initialising blog store
const blogs = useBlogStore()
const search = ref('')
const focusState = ref(false)
const openSearch = ref(false)
// filterTerm use to change term according to category
const filterTerm = ref<string>('')
// filterArray use to push data in search-component
const filterArray = ref<Blog[]>()
// open research component and push data
const searchBlog = () => {
  router.replace({ query: { search: search.value } })
  console.log(props.searchTerm)
  console.log('iici')
  filterArray.value = blogs.filterBlog(search.value, 'title')
  openSearch.value = true
}
const closeRearch = () => {
  openSearch.value = false
}

// fetching data
blogs.fetchData()
</script>
<template>
  <div class="w-[95%] mx-auto">
    <SearchComponent
      :searchTerm="search"
      v-if="openSearch"
      @close-component="closeRearch"
      :data="filterArray"
    />
    <!-- header -->
    <div class="md:h-[90vh] h-[70vh] w-full flex items-center justify-center flex-col gap-8">
      <h1 class="md:text-5xl text-3xl second-text-gradient text-center">
        LES ÉCRITS DU GRAND GOUROU
      </h1>
      <div
        class="bg-secondary px-8 py-4 rounded-full transition duration-300 ease-in-out flex items-center"
        :class="{
          'outline-4 py-1 outline-bleu/50 border-2 border-bleu/50 focus:transition placeholder:text-black/50 transition duration-300 ease-in-out':
            focusState,
        }"
      >
        <input
          type="text"
          name="search"
          id="search"
          v-model="search"
          placeholder="Recherche"
          class="placeholder:text-black/70 focus:border-0 focus:outline-0 text-primary"
          @focusin="focusState = true"
          @focusout="focusState = false"
        />

        <button class="p-2 rounded-full bg-bleu cursor-pointer" @click="searchBlog">
          <img src="/search.png" alt="search-icon" class="w-4 h-4" />
        </button>
      </div>
    </div>
    <!-- blogs -->
    <div>
      <SectionHeader section-name="Rubriques" :width-c="100" />
      <div class="filters flex gap-4 my-6 flex-wrap md:justify-start justify-center">
        <button class="px-4 py-1 filter active" @click="filterTerm = ''">Recents</button>
        <button class="px-4 py-1 filter" @click="filterTerm = 'Rituels du Code'">
          Rituels du Code
        </button>
        <button
          class="px-4 py-1 filter max-[380px]:tricante"
          @click="filterTerm = 'Grimoire des Outils'"
        >
          Grimoire des Outils
        </button>
        <button class="px-4 py-1 filter" @click="filterTerm = 'Oracles de la Cyber'">
          Oracles de la Cyber
        </button>
        <button class="px-4 py-1 filter" @click="filterTerm = 'Decryptage du gourou'">
          Decryptage du gourou
        </button>
      </div>
      <div>
        <!-- render blog -->
        <transition appear>
          <div class="grid gap-8 mt-8" v-if="blogs.filterBlog(filterTerm, 'categorie').length > 0">
            <h2 class="second-text-gradient md:text-4xl text-2xl md:my-7 my-3">
              Les plus recents [{{ blogs.filterBlog(filterTerm, 'categorie').length }}]
            </h2>
            <transition-group appear name="slide">
              <div v-for="(data, index) in blogs.filterBlog(filterTerm, 'categorie')" :key="index">
                <div class="flex gap-10 justify-between p-8 md:flex-row flex-col-reverse fade">
                  <div class="flex flex-col gap-4">
                    <h2 class="md:text-2xl text-xl font-bold md:w-[70%] w-full">
                      {{ data.title }}
                    </h2>
                    <p>{{ data?.description }}</p>
                    <router-link
                      :to="{ name: 'singleBlog', params: { id: data._id } }"
                      class="flex items-center gap-4 group/route transistion duration-300 ease-in-out w-fit"
                    >
                      <span class="group-hover/route:font-semibold">Lire la suite</span>
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
                    </router-link>
                  </div>
                  <div class="md:w-[400px] w-full h-[200px] relative">
                    <div
                      class="bag fade bg-secondary text-bleu rounded-full absolute px-5 top-2 left-2 border border-primary"
                    >
                      {{ data.categorie }}
                    </div>
                    <img
                      :src="`/${data.imageBanner}`"
                      alt=""
                      class="w-full h-full rounded-lg object-cover"
                    />
                  </div>
                </div>
                <div
                  class="flex items-center w-[100%]"
                  v-if="!(index + 1 === blogs.filterBlog(filterTerm, 'categorie').length)"
                >
                  <div class="rond rounded-full w-[15px] h-[15px] block bg-secondary"></div>
                  <div class="rond rounded-full w-[100%] h-[1px] block bg-secondary"></div>
                </div>
              </div>
            </transition-group>
          </div>
          <div
            v-else
            class="w-full bg-secondary/60 h-[300px] flex items-center justify-center relative text-3xl animate-pulse"
          >
            <!-- <div
              class="absolute w-full bg-primary/30 h-full top-0 left-0 bottom-0 animatedOne"
            ></div> -->
            Not data available now
          </div>
        </transition>
        <!-- end blog -->
      </div>
    </div>
    <!-- footer -->
    <FooterComponent />
  </div>
</template>
<style scoped>
.filter {
  background: #f8fafc;
  color: #0a5eb0;
  border-radius: 50px;
  cursor: pointer;
}
.filter:hover {
  transform: scale(1.05);
  transition: all 0.2s ease-in-out;
}
.active {
  background: #0a5eb0;
  color: #f8fafc;
  border-radius: 8px;
}
.animatedOne {
  animation: animatedOne 2s ease-in-out infinite;
}
.fade {
  animation: fade 1.5s ease-in-out forwards;
}
@keyframes animatedOne {
  from {
    opacity: 0;
    width: 0;
  }
  top {
    opacity: 1;
    width: 100%;
  }
}
@keyframes fade {
  from {
    opacity: 0;
  }
  top {
    opacity: 1;
  }
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(50px);
}
.slide-enter-to,
.slide-leave-from {
  transform: translateX(0px);
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-in-out;
}
</style>
