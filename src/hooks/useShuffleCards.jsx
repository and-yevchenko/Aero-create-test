import { useEffect, useState } from "react"
import { useAddForms } from "../store/store"



export const useShuffleCards = () => {
    
    const forms = useAddForms(state => state.forms)
    
    const [shuffle, setShuffle] = useState(false)
    // const [status, setStatus] = useState(0)
    const [cards, setCards] = useState([...forms].sort(() => 0.5 - Math.random()))

    const handleIsShuffle = () => setShuffle(!shuffle)

    // useEffect(()=> {
    //     setCards([...forms].sort(() => 0.5 - Math.random()))
    //     console.log(cards)
    //     console.log(status)
    // }, [status])

    return {
        shuffle,
        handleIsShuffle,
        setCards,
        cards
    }
}