type statusType = 'Alive' | 'Dead' | 'unknown'
type genderType = 'Female' | 'Male' | 'Genderless' | 'unknown'

interface ICommonInterface {
  name: string
  url: string
}

export interface ICharacterInfo {
  id: number
  name: string
  status: statusType
  species: string
  type: string
  gender: genderType
  origin: ICommonInterface
  location: ICommonInterface
  image: string
  episodes: string[]
  url: string
  created: string
}
