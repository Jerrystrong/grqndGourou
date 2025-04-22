import moment from 'moment'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { Blog } from '../types'

export const useBlogStore = defineStore('blog', () => {
  const data = ref<Array<Blog>>()
  const total = ref<number | undefined>(0)
  const fetchData = async () => {
    try {
      const fetchD = await fetch('/data.json')
      data.value = await fetchD.json()
      total.value = data.value?.length
    } catch (e) {
      console.log(`Error: ${e}`)
    }
  }

  const threeLast = computed(() => {
    const filterArray = [...(data.value ?? [])]
    filterArray.map((item) => {
      const now = moment()
      item.createAt = Number(item.createAt)
      const oldDate = moment(item.createAt)

      if (oldDate.isValid()) {
        const duration = moment.duration(now.diff(oldDate))
        const Days = Math.floor(duration.asDays())
        const Hours = Math.floor(duration.asHours())
        const Mounths = Math.floor(duration.asMonths())
        const Munite = Math.floor(duration.asMinutes())
        item.timePassed =
          Days === 0
            ? Hours === 0
              ? `Il y a ${Munite} Minutes`
              : `Il y a ${Hours} heures `
            : Days > 31
              ? `Il y a ${Mounths} mois`
              : Days < 0
                ? 'Date Error: Future Occur'
                : `Il y a ${Days} Jours`
      } else {
        console.log('date invalid')
        item.timePassed = 'date invalid'
      }
    })
    return filterArray.reverse().slice(0, 3)
  })

  const filterBlog = computed(() => {
    return (filterTerm: string, type: string) => {
      let filterArray = [...(data.value ?? [])]
      if (type === 'title') {
        filterArray = filterArray.filter((arr) => {
          return arr.title.toLocaleLowerCase().includes(filterTerm.toLocaleLowerCase())
        })
        return filterArray
      } else {
        if (filterTerm === '') return filterArray.reverse()
        filterArray = filterArray.filter(
          (arr) => arr.categorie.toLowerCase() === filterTerm.toLowerCase(),
        )
        filterArray.reverse()
        return filterArray
      }
    }
  })

  return { data, fetchData, threeLast, total, filterBlog }
})
