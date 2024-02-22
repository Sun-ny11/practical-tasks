import s from './DecksList.module.css'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { useFetchDecks } from './useFetchDecks.ts'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { DeckItemSkeleton } from './DeckItem/DeckItemSkeleton.tsx'

export const DecksList = () => {
  const { decks, isLoading } = useFetchDecks()

  return (
    <>
      {/* {isLoading &&

        <SkeletonTheme baseColor="#202020" highlightColor="#444" height="150px">
          <p>
            <Skeleton count={4} />
          </p>
        </SkeletonTheme>} */
      }

      <ul className={s.list}>
        {isLoading && decks.length == 0 && <DeckItemSkeleton count={10} />}
        {decks.map((deck) => (
          <DeckItem key={deck.id} deck={deck} />
        ))}
      </ul>
    </>

  )
}
