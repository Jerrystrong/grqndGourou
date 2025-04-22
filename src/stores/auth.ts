import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useAuth = defineStore('authentification', () => {
  const token = ref<string>('')
  const isAuthentificated = computed(() => {
    if (token.value) {
      return true
    } else {
      return false
    }
  })
  const chargeToken = (tkn: string) => {
    token.value = tkn
  }
  const checkTokenValibility = computed(async () => {
    // contact the backend to verify token
    return { message: 'token expire', state: false }
  })
  return { token, isAuthentificated, chargeToken, checkTokenValibility }
})
