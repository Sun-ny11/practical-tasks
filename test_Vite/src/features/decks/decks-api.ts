import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

type Author = {
  id: string
  name: string
}

export type Item = {
  author: Author
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: string
  updated: string
  cardsCount: number
}

type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}

export type ResponseDeskType = {
  items: Item[]
  pagination: Pagination
  // maxCardsCount: number
}

export type CreateParam = {
  name: string
}

export const desk = {
  getDesk() {
    return instance.get<ResponseDeskType>("/v2/decks")
  },
  createDeck(name: CreateParam) {
    return instance.post<Item>("/v1/decks", name)
  }
}