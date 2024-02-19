import { Item, ResponseDeskType } from "./decks-api"

const initialState = {
  decks: [] as Item[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {

  switch (action.type) {
    case "SET-DESKS": {
      return { ...state, decks: action.payload.desks.items }
    }
    case "ADD-DESKS": {
      return { ...state, decks: [action.payload.name, ...state.decks] }
    }
    default:
      return state
  }
}

export type DecksActions = setDesksACType | addDeckACType
type setDesksACType = ReturnType<typeof setDesksAC>
export const setDesksAC = (desks: ResponseDeskType) => {
  return {
    type: "SET-DESKS",
    payload: {
      desks
    }
  } as const
}

type addDeckACType = ReturnType<typeof addDeckAC>
export const addDeckAC = (name: Item) => {
  return {
    type: "ADD-DESKS",
    payload: {
      name
    }
  } as const
}