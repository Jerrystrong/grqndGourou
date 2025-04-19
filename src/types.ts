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
export type { formation }
