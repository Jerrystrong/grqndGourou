interface formation {
  readonly _id: string
  title: string
  imageBanner: string
  categorie: string
  instructeur: { name: string; profil: string }
  lieu?: string
  createAt: number | string
  timePassed?: string
}
type Blog = {
  readonly _id: string
  title: string
  imageBanner: string
  categorie: string
  description?: string
  instructeur: { name: string; profil: string }
  body: string
  feeds: { viewer: number; commentaires: []; like: number | number }
  createAt: number | string
  timePassed?: string
}
export type { formation, Blog }
