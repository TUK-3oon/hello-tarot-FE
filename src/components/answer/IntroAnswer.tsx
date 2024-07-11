import { IntroAnswerProps } from "@/types/componentsTypes"

export const IntroAnswer = ({selectedCard}:IntroAnswerProps) => {
    return(
        <>
            <div className="mb-12 text-center">
              <h1 className="font-bold text-2xl mb-1">{selectedCard.card_name}</h1>
            </div>
            <div className="mb-7">
              <h1 className="font-bold text-lg mb-1">Good</h1>
              <p>{selectedCard.card_contents.forward}</p>
            </div>
            <div className="mb-7">
              <h1 className="font-bold text-lg mb-1">Bad</h1>
              <p>{selectedCard.card_contents.reverse}</p>
            </div>
        </>
    )
}