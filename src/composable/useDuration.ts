import moment from 'moment'

interface formation {
  readonly _id: string
  title: string
  imageBanner: string
  categorie: string
  instructeur: { name: string; profil: string }
  lieu?: string
  createAt: number | string
}

interface formation {
  timePassed?: string
}

const useDuration = (data: formation[]): formation[] => {
  const filterArray = [...(data ?? [])]
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
  return filterArray.reverse()
}

export default useDuration
