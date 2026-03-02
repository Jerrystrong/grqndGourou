<script setup lang="ts">
import WhatsappIcon from '@/components/whatsappIcon.vue'
import useDuration from '@/composable/useDuration'
import { useBlogStore } from '@/stores/blog'
import { useAuth } from '@/stores/auth'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import type { Blog } from '../../types'
import FooterComponent from '@/components/footerComponent.vue'

const route = useRoute()
const blogStorage = useBlogStore()
blogStorage.fetchData()
// use auth storage
const useAuthen = useAuth()
// vars
const commentaire = ref('')
const sendCommentaire = () => {
  if (useAuthen.isAuthentificated) {
    console.log(commentaire.value)
  } else {
    console.log('user not connected')
  }
}
const getPost = computed(() => {
  const post: Blog[] | undefined = blogStorage.data?.filter(
    (blog: Blog) => blog._id === route.params.id,
  )
  if (post === undefined) return
  else {
    return useDuration(post)[0]
  }
})

const getPopularPost = computed(() => {
  const post: Blog[] | undefined = blogStorage.data?.filter((blog: Blog) => blog?.feeds?.like >= 10)
  console.log(post)
  if (post === undefined) return
  else {
    return useDuration(post)
  }
})
</script>
<template>
  <div class="w-[90%] mx-auto">
    <!-- post header -->
    <div class="pt-[100px]">
      <div
        class="header flex md:items-center md:justify-between border-b pb-5 md:flex-row flex-col items-start gap-2"
      >
        <div class="grid gap-7">
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
          <div>
            <div class="author flex">
              <img
                :src="`/${getPost?.instructeur.profil}`"
                alt=""
                class="w-[50px] h-[50px] object-cover rounded-full"
              />
              <div
                class="w-[50px] h-[50px] rounded-full block bg-secondary -translate-x-5 -z-50"
              ></div>
              <div class="athorname translate-y-2">
                <h1 class="font-abeeze m-0">{{ getPost?.instructeur.name }}</h1>
                <p class="-translate-y-2">Auteur</p>
              </div>
            </div>
          </div>
        </div>
        <div class="badge bg-secondary w-fit px-3 rounded-full h-fit">
          <span class="gradient-text">{{ getPost?.categorie }}</span>
        </div>
      </div>
      <div class="title m-5 flex justify-between md:flex-row flex-col md:gap-0 gap-2">
        <h2
          class="font-satoshi md:text-4xl text-2xl md:w-[70%] w-[100%]"
          style="font-family: 'Urbanist', sans-serif"
        >
          {{ getPost?.title }}
        </h2>
      </div>
      <!-- post body -->
      <div class="flex my-7 w-full gap-3 lg:flex-row flex-col">
        <div class="lg:h-[100dvh] lg:w-[70%] flex flex-col gap-7 md:overflow-y-scroll scrollCustom">
          <div class="banner relative">
            <div class="degTr w-full h-[100px] bottom-0 left-0 right-0"></div>
            <div
              class="flex gap-4 items-center absolute h-[50px] px-4 rounded-lg glass-container bottom-2 right-5"
            >
              <button class="flex gap-2 items-center">
                <img src="/visible.png" alt="" class="w-5 h-5" />
                {{ getPost?.feeds.viewer }}
              </button>
              <button class="flex gap-2 items-center">
                <img src="/message.png" alt="" class="w-5 h-5" />
                {{ getPost?.feeds.commentaires.length }}
              </button>
            </div>
            <img
              :src="`/${getPost?.imageBanner}`"
              alt=""
              class="w-full lg:h-[400px] h-[200px] object-cover rounded-lg"
            />
          </div>
          <p class="text-left mt-5" style="font-family: 'Satoshi', sans-serif">
            {{ getPost?.body }}
          </p>

          <div class="flex gap-3 items-center mt-5 flex-wrap">
            <button
              class="bg-secondary/90 backdrop-blur-2xl p-2 px-3 rounded-full flex text-bleu/70 gap-1 items-center justify-center cursor-pointer hover:scale-95 text-[14px]"
            >
              <i class="bx bxs-like"></i>
              {{ getPost?.feeds?.like }}
            </button>

            <a
              href=""
              class="flex gap-2 glass-container w-[40px] h-[40px] rounded-full items-center justify-center text-secondary backdrop-blur-2xl shadow-2xl shadow-bleu/5 hover:shadow-bleu/10 hover:scale-95 transition-all duration-300 cursor-pointer"
            >
              <i class="bx bx-share-alt"></i>
            </a>

            <a
              href=""
              class="flex gap-2 glass-container p-2 px-3 rounded-full items-center justify-center text-secondary backdrop-blur-2xl shadow-2xl shadow-bleu/5 hover:shadow-bleu/10 hover:scale-95 transition-all duration-300 cursor-pointer"
            >
              <i class="bx bx-download"></i>
              100
            </a>
            <!-- tags -->
            <div class="flex gap-4">
              <span class="before:content-['#'] before:text-secondary/50 font-satoshi text-[14px]"
                >Technologie</span
              >
              <span class="before:content-['#'] before:text-secondary/50 font-satoshi text-[14px]"
                >Algorithme</span
              >
              <span class="before:content-['#'] before:text-secondary/50 font-satoshi text-[14px]"
                >Python</span
              >
            </div>
          </div>
          <div class="commentaire text-secondary">
            <h2 class="pb-3 text-2xl mb-2">Commentaires</h2>
            <div
              v-for="(commentaire, index) in getPost?.feeds?.commentaires"
              :key="index"
              class="bg-secondary/10 backdrop-blur-md mb-7 p-5 relative rounded-[20px]"
            >
              <div class="flex gap-1 absolute -bottom-5">
                <button
                  class="bg-secondary w-[30px] h-[30px] flex items-center justify-center rounded-full text-bleu/70 gap-3 cursor-pointer hover:scale-95"
                >
                  <i class="bx bxs-like"></i>
                </button>
                <p>({{ commentaire.like }})</p>
              </div>
              <h3 class="font-bold font-satoshi">{{ commentaire.name }}</h3>
              <p style="font-family: 'Satoshi', sans-serif">
                {{ commentaire.message }}
              </p>
            </div>

            <div class="flex gap-5 my-10 glass-container backdrop-blur-2xl rounded-lg w-fit p-5">
              <input
                type="text"
                placeholder="Ecrivez votre commentaire ici"
                class="focus:outline-secondary/10 focus:border-secondary/10 rounded-lg px-3 py-1 md:w-[500px] w-[300px] outline-0"
                v-model="commentaire"
              />
              <button
                class="text-secondary glass-container backdrop-blur-md px-3 py-1 flex items-center rounded-full gap-3 w-[40px] h-[40px] justify-center"
                @click.prevent="sendCommentaire"
              >
                <i class="bx bxs-send"></i>
              </button>
            </div>
          </div>
        </div>
        <!-- right side -->
        <div class="lg:h-[100dvh] lg:w-[30%]">
          <div
            class="glass-container backdrop-blur-md rounded-lg px-2 py-3 lg:w-[80%] w-full mx-auto"
          >
            <h2 class="text-xl text-center">Postes simulaires</h2>
            <div v-for="recent in blogStorage.threeLast" :key="recent._id" class="m-3 border-b">
              <router-link :to="{ name: 'singleBlog', params: { id: recent._id } }">
                <h3 class="font-semibold font-satoshi">{{ recent.title }}</h3>
                <p class="text-secondary/70">{{ recent.timePassed }}</p>
              </router-link>
            </div>
          </div>

          <div class="lg:w-[80%] w-ful mx-auto mb-1">
            <h3 class="text-xl font-bold mb-2">Les plus populaire</h3>
            <router-link
              :to="{ name: 'singleBlog', params: { id: popular._id } }"
              v-for="(popular, index) in getPopularPost"
              :key="index"
            >
              <div>
                <img
                  :src="`/${popular.imageBanner}`"
                  class="w-full lg:h-[100px] h-[200px] object-cover"
                />
                <h3 class="font-bold m-2">{{ popular.title }}</h3>
                <div class="flex justify-between text-secondary m-2">
                  <p>{{ popular.timePassed }}</p>

                  <div class="flex gap-2 text-secondary items-center">
                    <i class="bx bxs-like"></i>
                    {{ popular?.feeds?.like }}
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <FooterComponent />
  </div>
</template>
