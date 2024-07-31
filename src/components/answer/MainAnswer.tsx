import { MainAnswerProps } from "@/types/componentsTypes"

export const MainAnswer = ({responseAnswer}:MainAnswerProps) => {
  console.log(responseAnswer)
    return(
        <>
          {responseAnswer}  
        </>
    )
}