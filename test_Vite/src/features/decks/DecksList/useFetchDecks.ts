import { useSelector } from "react-redux"
import { selectDecks } from "../decks-selectors"
import { useAppDispatch } from "../../../app/store"
import { useEffect } from "react"
import { setDesksTC } from "../decks-thunks"
import { addDeckAC } from "../decks-reducer"

export const useFetchDecks = () => {
   const decks = useSelector(selectDecks)
   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(setDesksTC())
   }, [])

   return {
      decks
   }
}