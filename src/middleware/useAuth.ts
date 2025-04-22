import { useAuth } from '@/stores/auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const useA = useAuth()
const useAuthentification = () => {
  router.beforeEach((to, from, next) => {
    if (to.name === '/' && useA.isAuthentificated) {
      next()
    } else {
      next({ name: 'login' })
    }
  })
}
export default useAuthentification
