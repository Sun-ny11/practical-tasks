import { Dispatch } from 'redux';
import { CreateParam, desk } from './decks-api';
import { addDeckAC, setDesksAC } from './decks-reducer';

export const setDesksTC = () => (dispatch: Dispatch) => {
   desk.getDesk()
      .then((res) => dispatch(setDesksAC(res.data)))
}
export const addDeckTC = (name: CreateParam) => async (dispatch: Dispatch) => {
   return desk.createDeck(name)
      .then((res) => {
         dispatch(addDeckAC(res.data))
      }
      )
}
// 