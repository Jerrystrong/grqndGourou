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
        <h2 class="font-abeeze md:text-4xl text-2xl md:w-[70%] w-[100%]">
          {{ getPost?.title }}
        </h2>
        <div class="flex gap-4 items-center">
          <button class="flex gap-1">
            <img src="/visible.png" alt="" class="w-7 h-7" />
            {{ getPost?.feeds.viewer }}
          </button>
          <button class="flex gap-1">
            <img src="/message.png" alt="" class="w-7 h-7" />
            {{ getPost?.feeds.commentaires.length }}
          </button>
        </div>
      </div>
      <div class="flex my-7 w-full gap-3 lg:flex-row flex-col">
        <div class="lg:h-[100dvh] lg:w-[70%] flex flex-col gap-7 md:overflow-y-scroll scrollCustom">
          <div class="banner">
            <img
              :src="`/${getPost?.imageBanner}`"
              alt=""
              class="w-full lg:h-[400px] h-[200px] object-cover"
            />
          </div>
          <p class="text-justify">{{ getPost?.body }}</p>
          <div>
            <h3 class="mb-1">Tags</h3>
            <div class="flex gap-4">
              <span class="before:content-['#'] before:text-bleu font-abeeze">Technologie</span>
              <span class="before:content-['#'] before:text-bleu font-abeeze">Algorithme</span>
              <span class="before:content-['#'] before:text-bleu font-abeeze">Python</span>
            </div>
          </div>

          <div class="flex gap-7 items-center">
            <button
              class="bg-secondary px-3 py-1 rounded-full flex text-bleu/70 gap-3 items-center cursor-pointer hover:scale-95"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <rect width="20" height="20" fill="url(#pattern0_136_34)" />
                <defs>
                  <pattern
                    id="pattern0_136_34"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use xlink:href="#image0_136_34" transform="scale(0.02)" />
                  </pattern>
                  <image
                    id="image0_136_34"
                    width="50"
                    height="50"
                    preserveAspectRatio="none"
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC9UlEQVR4nO2YPYgTQRTHB/zIzsQvxErOSsXiCi0sLATBQlsLD5HsmwQFC0EQsbRUO1HQRksbIZi8tx6cnArCRUvxwELlxNoPoncqgo0ns5nLucluMrMmmx3JgymyM7Mzv3kf/80wNraxuWVC0nMhaVm3XxzoSVEGk8w1E6sQ7cYlfhF+bS9zyYTefPjDny0KiVX97C2bqnLmJIgyf7bIAV/r55eYsyCMsaIfHA5DDKjpjFdEDIgyLmlePfcATzCnQQDPthKf7jKXQYoymGwnfe7t0NO1SSCtCqb68AfLuwkfK1o33nT2bTpd3aoTfpHl3xu4EJ66j5XObl4ODugcmWcueEMAvVNQnf0e0AXtrTvMVW8oExKpBRqUmaveYOdmChzwm5D4m5+i7SyXNlVdo0pqT28AHtVh9YI56w0WhtUtDXJ5eBuR1Ij79DZoDZPc0CDvU66x3P4roEITsL6xRHuSQL6nXmDFGxIXkryh15j7VxDRBqImL9Umuhbhkl6Fg8q4z8KL+sX9vTEo46XaBAea0etWuwdImg5JfTxm+tLoKfX2xiDNq+AOnWtL3ZsCvKlj8HwKkJ82BzAwEKBmzKbwot7UddMXJn4YDhmCAz7sFVrH9cYwjyAieisTXmQU/GBX10AOtF+762UuQQCfRXOyfiR24IaTD7ZpkK95DS0erVj3em0s1JLNZdyS5xwRrdD6kDjIVktGCgIxFSutlmQN4vWrWGm1JCsQYVqx0mpJZiBgWLHSakmWocVNK1YaLRlFjoh+FSuNlowMBOhT38E2WpIliBetWL1Dy1ZLhg0iOqpVK6zoY0HWd/adnKQlHPCquubkQFcyA4FoteISHxtB9NKSlZBT/5mzDC1uU61MtER5QsH8fQOSVY54q9Xqs/EkGy2JuRRosOFWq0XjSTZaEne74UH9IBtWtQK6bzxxRUtsWggFeMN2nk3jQM31lendVqfAJT6yWGQunHTm9joh8ZoSq4ECSFxSnrCGGNvYxvZ/2h/2LIvMUttLygAAAABJRU5ErkJggg=="
                  />
                </defs>
              </svg>
              {{ getPost?.feeds?.like }}
            </button>

            <a href="" class="flex gap-2 items-center">
              Partage
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <rect width="20" height="20" fill="url(#pattern0_136_35)" />
                <defs>
                  <pattern
                    id="pattern0_136_35"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use xlink:href="#image0_136_35" transform="scale(0.02)" />
                  </pattern>
                  <image
                    id="image0_136_35"
                    width="50"
                    height="50"
                    preserveAspectRatio="none"
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADtUlEQVR4nN2ZW08TURDHD9f0nOIlGu/fQONnaGJ89C7rjc4UUYmfgZc+mCgY4wU1kUcjIq6xM1Xia7+FIIjooyESg4K+SM3ZbUsrbTnbbrtbJzlJH/Zs97dzOTP/FSJMZtndEaDzCnhCIs0opJ96Ob+BJyKYOqevEWE2idyrkD4p5GzVBfxRIp8WobNksl0i39kUAEuXBB7Re0VYrBYItQ4zLMJgMkFna4VQeZg4nQqWwrK7dbzXC6KA5wMtALoC1Q2BOa8g9wYGopAnfQMBGg8OBGjWP4/QTJAgKz56ZLm5Tx/LdArL7siB/Go9kFimU0E6oZDmov102AXhhdYJrVimUyFjcT5EMHXRBaFXPnrkWWMALLvjX4Ci9VhfEgW6FN7ym0y2S0hbbuda6e3xdzH4RuUOxIXGHoiW3e0cWCXtNK8q5M8K+GUkzhdKNlt2RxRTcYX8wSwU+Lo/LQqtSeQTZRkkpM9oSoM3sVBopx1P0LiH5FxSfa/36a0K6H4dSX6rfFgg3fbuWrorRLZNJ7YEmjJPUH7nlONksl3fw7MngIfLtvE1QZTACBGNv94tgb952DuZP1ckpE+aDVY0q6+tHE71Vw4nzBTwNcM9qzqstiVoe+FBBse6dLFQSC9yUDovf0jk97rEOtVpcKyrYmIb5cTm67PzJ4lMpKpX9IkO9CCfI6FspyNA5x2vID2qBCAHeL9ohCngCb9AdGleFxKKAJBHGwaQN9Pabwgyr+8ZxfQhBfRbAT2U+PaAaIZJoGXfQJBXC0nbLID/DkQ1ILR6+vhg03IjbxL5uY8emdzQQzWq3Dan/PJoubBTyPdUYmqvCLm+tOAciJbdLZEWq+WRbmmiF9J7fGeRyKfrhPgTjaeP6HupOPWb7aEVLZfuHOAtxS9VumJ2UYviUY3XonCtIBLohr7H1iv2Don81cO+p/kOVkHqmOH4sIka78wUXmFoTSEN5fd7nMOpoKggDbn3Yv/UeC0Ka7XDAOKTjNNxd1e2TQE/MX4IpMWey/YuNxLoZu2RwCPVk8Y50LhXT30SaFq30o6gpl2vx19IW/+Ounm5x9CTV/W2KPBRnV/hU+Nj6/pVFW8sCcuWTrVE+lIPhHJfylzlGaWhQPQo/HKQAVBBoEOyW0+Nj7W6ZPrfidgbLNuWE/1aHUSIarKq8g4yHRiI20+FXY03MFe/apXyu+n44MN3RAj48/R6X9cgNb7ZVtf4gOXU+KCspq8AVFmND9qMxweoosaHxnJqfMn4YKjG/wUOieGwXn90swAAAABJRU5ErkJggg=="
                  />
                </defs>
              </svg>
            </a>
          </div>
          <div class="commentaire text-secondary">
            <h2 class="border-b pb-3 text-2xl">Commentaires</h2>
            <div
              v-for="(commentaire, index) in getPost?.feeds?.commentaires"
              :key="index"
              class="bg-secondary/20 mb-7 p-3 relative"
            >
              <div class="flex gap-1 absolute -bottom-5">
                <button
                  class="bg-secondary px-3 py-1 rounded-full flex text-bleu/70 gap-3 items-center cursor-pointer hover:scale-95"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <rect width="20" height="20" fill="url(#pattern0_136_34)" />
                    <defs>
                      <pattern
                        id="pattern0_136_34"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use xlink:href="#image0_136_34" transform="scale(0.02)" />
                      </pattern>
                      <image
                        id="image0_136_34"
                        width="50"
                        height="50"
                        preserveAspectRatio="none"
                        xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC9UlEQVR4nO2YPYgTQRTHB/zIzsQvxErOSsXiCi0sLATBQlsLD5HsmwQFC0EQsbRUO1HQRksbIZi8tx6cnArCRUvxwELlxNoPoncqgo0ns5nLucluMrMmmx3JgymyM7Mzv3kf/80wNraxuWVC0nMhaVm3XxzoSVEGk8w1E6sQ7cYlfhF+bS9zyYTefPjDny0KiVX97C2bqnLmJIgyf7bIAV/r55eYsyCMsaIfHA5DDKjpjFdEDIgyLmlePfcATzCnQQDPthKf7jKXQYoymGwnfe7t0NO1SSCtCqb68AfLuwkfK1o33nT2bTpd3aoTfpHl3xu4EJ66j5XObl4ODugcmWcueEMAvVNQnf0e0AXtrTvMVW8oExKpBRqUmaveYOdmChzwm5D4m5+i7SyXNlVdo0pqT28AHtVh9YI56w0WhtUtDXJ5eBuR1Ij79DZoDZPc0CDvU66x3P4roEITsL6xRHuSQL6nXmDFGxIXkryh15j7VxDRBqImL9Umuhbhkl6Fg8q4z8KL+sX9vTEo46XaBAea0etWuwdImg5JfTxm+tLoKfX2xiDNq+AOnWtL3ZsCvKlj8HwKkJ82BzAwEKBmzKbwot7UddMXJn4YDhmCAz7sFVrH9cYwjyAieisTXmQU/GBX10AOtF+762UuQQCfRXOyfiR24IaTD7ZpkK95DS0erVj3em0s1JLNZdyS5xwRrdD6kDjIVktGCgIxFSutlmQN4vWrWGm1JCsQYVqx0mpJZiBgWLHSakmWocVNK1YaLRlFjoh+FSuNlowMBOhT38E2WpIliBetWL1Dy1ZLhg0iOqpVK6zoY0HWd/adnKQlHPCquubkQFcyA4FoteISHxtB9NKSlZBT/5mzDC1uU61MtER5QsH8fQOSVY54q9Xqs/EkGy2JuRRosOFWq0XjSTZaEne74UH9IBtWtQK6bzxxRUtsWggFeMN2nk3jQM31lendVqfAJT6yWGQunHTm9joh8ZoSq4ECSFxSnrCGGNvYxvZ/2h/2LIvMUttLygAAAABJRU5ErkJggg=="
                      />
                    </defs>
                  </svg>
                </button>
                <p>({{ commentaire.like }})</p>
              </div>
              <h3>{{ commentaire.name }}</h3>
              {{ commentaire.message }}
            </div>

            <div class="flex gap-5 my-10">
              <input
                type="text"
                placeholder="Ecrivez votre commentaire ici"
                class="outline-secondary rounded-lg px-3 py-1 w-[300px]"
                v-model="commentaire"
              />
              <button
                class="text-bleu bg-secondary px-3 py-1 flex items-center rounded-lg gap-3 font-abeeze"
                @click.prevent="sendCommentaire"
              >
                Envoyer
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <rect width="20" height="20" fill="url(#pattern0_180_48)" />
                  <defs>
                    <pattern
                      id="pattern0_180_48"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use xlink:href="#image0_180_48" transform="scale(0.0333333)" />
                    </pattern>
                    <image
                      id="image0_180_48"
                      width="30"
                      height="30"
                      preserveAspectRatio="none"
                      xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABLElEQVR4nO2Wv0oDQRCHF2IzE4koWOhTCBYp7YWU1+jOnH8gD2HlK1jaWy3ob0R7lWjhE4iClhaCnZ2FkhPOIohe4u42Gdjy+L4bZmd/zk0rV7HaDQnuWE1dEVrJwCT2ymof1RE8JBNgsdsaXB88cYm+W7uYiQYmwdEoOIEACfZ/BkcUaOuJ/x0cQYC8df8O/keBzm5YaA6eUGB2OyyyIowPHkOA5LQgsZfJoU0FikC0Y8tcYpU8esMPqgkXHFRdEFyz2CMr3rPMgCtCizePl7jECgvW2WOLFXu1oNrga+PhbURAcJUHrHbZoNV2SGpn0VpNHj1Se04/XM65uY3z+eEfJr1OWRdI1pXZzvZISKZnkXIFAc4Xfew77Knds0DShD21QRVvUwGn5SLXJxyckChOvGeyAAAAAElFTkSuQmCC"
                    />
                  </defs>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="lg:h-[100dvh] lg:w-[30%]">
          <div class="bg-secondary/20 lg:w-[80%] w-full mx-auto">
            <h2 class="text-xl text-center">Postes simulaires</h2>
            <div v-for="recent in blogStorage.threeLast" :key="recent._id" class="m-3 border-b">
              <router-link :to="{ name: 'singleBlog', params: { id: recent._id } }">
                <h3 class="font-semibold">{{ recent.title }}</h3>
                <p class="text-secondary/70">{{ recent.timePassed }}</p>
              </router-link>
            </div>
          </div>

          <div class="lg:w-[80%] w-ful mx-auto">
            <h3 class="text-xl font-bold mb-4">Les plus populaire</h3>
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

                  <div class="flex gap-2 text-secondary">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                      <rect width="20" height="20" fill="url(#pattern0_136_34)" />
                      <defs>
                        <pattern
                          id="pattern0_136_34"
                          patternContentUnits="objectBoundingBox"
                          width="1"
                          height="1"
                        >
                          <use xlink:href="#image0_136_34" transform="scale(0.02)" />
                        </pattern>
                        <image
                          id="image0_136_34"
                          width="50"
                          height="50"
                          preserveAspectRatio="none"
                          xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC9UlEQVR4nO2YPYgTQRTHB/zIzsQvxErOSsXiCi0sLATBQlsLD5HsmwQFC0EQsbRUO1HQRksbIZi8tx6cnArCRUvxwELlxNoPoncqgo0ns5nLucluMrMmmx3JgymyM7Mzv3kf/80wNraxuWVC0nMhaVm3XxzoSVEGk8w1E6sQ7cYlfhF+bS9zyYTefPjDny0KiVX97C2bqnLmJIgyf7bIAV/r55eYsyCMsaIfHA5DDKjpjFdEDIgyLmlePfcATzCnQQDPthKf7jKXQYoymGwnfe7t0NO1SSCtCqb68AfLuwkfK1o33nT2bTpd3aoTfpHl3xu4EJ66j5XObl4ODugcmWcueEMAvVNQnf0e0AXtrTvMVW8oExKpBRqUmaveYOdmChzwm5D4m5+i7SyXNlVdo0pqT28AHtVh9YI56w0WhtUtDXJ5eBuR1Ij79DZoDZPc0CDvU66x3P4roEITsL6xRHuSQL6nXmDFGxIXkryh15j7VxDRBqImL9Umuhbhkl6Fg8q4z8KL+sX9vTEo46XaBAea0etWuwdImg5JfTxm+tLoKfX2xiDNq+AOnWtL3ZsCvKlj8HwKkJ82BzAwEKBmzKbwot7UddMXJn4YDhmCAz7sFVrH9cYwjyAieisTXmQU/GBX10AOtF+762UuQQCfRXOyfiR24IaTD7ZpkK95DS0erVj3em0s1JLNZdyS5xwRrdD6kDjIVktGCgIxFSutlmQN4vWrWGm1JCsQYVqx0mpJZiBgWLHSakmWocVNK1YaLRlFjoh+FSuNlowMBOhT38E2WpIliBetWL1Dy1ZLhg0iOqpVK6zoY0HWd/adnKQlHPCquubkQFcyA4FoteISHxtB9NKSlZBT/5mzDC1uU61MtER5QsH8fQOSVY54q9Xqs/EkGy2JuRRosOFWq0XjSTZaEne74UH9IBtWtQK6bzxxRUtsWggFeMN2nk3jQM31lendVqfAJT6yWGQunHTm9joh8ZoSq4ECSFxSnrCGGNvYxvZ/2h/2LIvMUttLygAAAABJRU5ErkJggg=="
                        />
                      </defs>
                    </svg>
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
