import { useState } from "react"


export const AnswerItem = ({ item }) => {
    
    const [isAnswer, setIsAnswer] = useState(null)

    const handleInput = () => {
        item.isTrue && setIsAnswer(true)
        !item.isTrue && setIsAnswer(false)
    }


    return (
        <div className="ready-question__variant-item">
            <input type="checkbox" onInput={handleInput}/>
            <p style={isAnswer === true ? {color: 'green'} : isAnswer === false ? {color: 'red'} : {color: 'black'}}>{item.answer}</p>
        </div>
    )
}