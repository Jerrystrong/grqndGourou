<script setup lang="ts">
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
const props = defineProps({
  searchTerm: String,
  data: Array<Blog>,
})

const emits = defineEmits(['closeComponent'])
const closeSearch = () => {
  emits('closeComponent')
}
console.log(props.data)
</script>
<template>
  <div
    class="fixed z-50 top-0 bottom-0 left-0 w-full h-[100%] bg-black/75 flex justify-center items-center flex-col gap-2"
  >
    <div class="self-end mr-[10%] cursor-pointer" @click="closeSearch">
      <img src="/close.png" alt="" />
    </div>
    <div class="bg-secondary w-[70%] h-[80%] text-primary p-6 overflow-y-scroll">
      <h2 class="text-3xl font-abeeze">Recherche</h2>
      <p>Terme recherché "{{ searchTerm }}"</p>
      <p>{{ data?.length }} suggection(s) possible</p>
      <div class="flex flex-col gap-2 m-2 md:gap-5">
        <div
          v-for="(blog, index) in data"
          :key="index"
          class="flex gap-3 md:gap-6 group/hov cursor-pointer md:flex-row flex-col"
        >
          <div>
            <img
              :src="`/${blog?.imageBanner}`"
              alt=""
              class="md:w-[200px] md:h-[100px] w-[100px] h-[60px] object-cover rounded-lg group-hover/hov:scale-105 transistion duration-300 ease-in-out"
            />
          </div>

          <div>
            <h2
              class="md:text-2xl text-[14px] font-semibold group-hover/hov:font-bold transistion duration-300 ease-in-out"
            >
              {{ blog?.title }}
            </h2>
            <p class="md:block hidden">{{ blog?.description }}</p>
            <!-- <router-link
              :to="{ name: 'singleBlog', params: { id: blog?._id } }"
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
            </router-link> -->
            <router-link
              :to="{ name: 'singleBlog', params: { id: blog?._id } }"
              class="flex items-center gap-4 group/route transistion duration-300 ease-in-out w-fit text-[12px]"
            >
              <span class="group-hover/route:font-semibold group-hover/route:text-bleu"
                >Lire la suite</span
              >
              <svg
                width="30"
                height="20"
                viewBox="0 0 30 30"
                fill="#010101"
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
        </div>
      </div>
    </div>
  </div>
</template>
