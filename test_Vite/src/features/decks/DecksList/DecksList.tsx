import s from './DecksList.module.css'
import { DeckItem } from './DeckItem/DeckItem'
import { useFetchDecks } from './useFetchDecks'

export const DecksList = () => {
  const { decks } = useFetchDecks()
  console.log("re");

  return (
    <>
      <ul className={s.list}></ul>
      {decks.map(el =>
        <DeckItem key={el.id} deck={el} />
      )}
    </>

  )
}
