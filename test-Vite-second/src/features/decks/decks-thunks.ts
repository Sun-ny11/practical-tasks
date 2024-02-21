import { Dispatch } from 'redux'
import { decksAPI, UpdateDeckParams } from './decks-api.ts'
import { addDeckAC, deleteDeckAC, setDecksAC, updateDeckAC } from './decks-reducer.ts'
import { setAppStatus } from '../../app/app-reducer.ts'

export const fetchDecksTC = () => async (dispatch: Dispatch) => {
  dispatch(setAppStatus("loading"))

  try {
    const res = await decksAPI.fetchDecks()

    dispatch(setDecksAC(res.data.items))
    dispatch(setAppStatus("succeeded"))
  } catch (err) {
    alert(err)
  }
  // dispatch(setAppStatus("loading"))
  // decksAPI.fetchDecks().then((res) => {
  //   dispatch(setDecksAC(res.data.items))
  //   dispatch(setAppStatus("succeeded"))

  // })
}

export const addDeckTC = (name: string) => async (dispatch: Dispatch) => {
  return decksAPI.addDeck(name).then((res) => {
    dispatch(addDeckAC(res.data))
  })
}

export const deleteDeckTC = (id: string) => async (dispatch: Dispatch) => {
  return decksAPI.deleteDeck(id).then((res) => {
    dispatch(deleteDeckAC(res.data.id))
  })
}

export const updateDeckTC = (params: UpdateDeckParams) => async (dispatch: Dispatch) => {

  try {
    // throw new Error("AAAA!")
    const res = await decksAPI.updateDeck(params)
    dispatch(updateDeckAC(res.data))

  } catch (e: any) {
    let errorMessage: string

    if (e.code === "ERR_BAD_REQUEST") {
      errorMessage = e.response.data.errorMessages[0].message
    }
    if (e.code === "ERR_NETWORK") {

      errorMessage = e.message
    } else {
      errorMessage = e.message
    }

    console.log(errorMessage);
    console.log(e);

  }
}
export const setError = () => {
//here
}