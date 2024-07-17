import { useEffect, useRef, useState } from "react"


export const AnswerItem = ({ item, question, setVarAA, varAA, showResult }) => {
    
    const [isAnswer, setIsAnswer] = useState({color: 'black'})
    const inputCheck = useRef(null)

    const handleInput = (e) => {
        
        inputCheck.current.checked === item.check ? setVarAA(1) : setVarAA(0)
        
        // const arr = document.getElementsByName("test " + question)
        // console.log([...arr].filter((i)=> i.checked !== item.check))
        // console.log([...arr].filter((i)=> i.checked !== item.check))
        // console.log(e.target.checked === item.check)
        // setVarAA(e.target.checked === item.check && 1)
        // console.log(varAA)

    }
    useEffect(()=> {
        if (showResult) {
            if (inputCheck.current.checked) {
                item.check && setIsAnswer({color: 'green'})
                !item.check && setIsAnswer({color: 'red'})
            }
            inputCheck.current.disabled = true
        }
    }, [showResult])
    // useEffect(()=> {
    //     resV !== undefined ? inputCheck.current.disabled = true : null
    // }, [handleInput])


    return (
        <div className="ready-question__variant-item">
            <label style={isAnswer}>
                <input className="ready-question__radio" type="radio" onClick={handleInput} ref={inputCheck} name={"test " + question} id={item.id}/>
                <span className="ready-question__custom-radio"></span>
                {item.answer}
            </label>
        </div>
    )
}