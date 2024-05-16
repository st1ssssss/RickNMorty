import type { ICharacterInfo } from '@/components/ui/card/config'
export interface pageInfo {
  count: number
  pages: number
  next: string
  prev: string
}

interface ICharProm {
  info: pageInfo
  results: ICharacterInfo[]
}

export class RequestsRepository {
  res: Promise<ICharProm> | any
  constructor() {
    this.res
  }
  async getCharacters(): Promise<ICharProm> {
    await fetch('https://rickandmortyapi.com/api/character/?page=1').then((resp) => {
      this.res = resp.json()
    })
    return this.res
  }
  openPrevOrNextPage(pageUrl: string) {
    fetch(pageUrl).then((resp) => console.log(resp.body))
  }
}
