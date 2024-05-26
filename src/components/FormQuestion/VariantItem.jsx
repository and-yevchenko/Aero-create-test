import { X } from "lucide-react"
import { useAddForms, useReUpdate } from "../../store/store"
import { useEffect, useState } from "react"




export const VariantItem = ({item, el}) => {

    const arrUpdate = useReUpdate(state => state.arrUpdate)
    const reUpdate = useReUpdate(state => state.updates)
    const deleteVariants = useAddForms(state => state.deleteVariant)
    const onDeleteVariants = (e) => {
        // el.variants = el.variants.filter((variant) => variant.id !== item.id)
        deleteVariants(el.id, item.id)
        reUpdate()
        console.log(el);
    }

    const [answerQuestion, setAnswerQuestion] = useState("")
    const forms = useAddForms(state => state.forms)
    const updateVariants = useAddForms(state => state.updateFormVariants)
    useEffect(() => {
        updateVariants(el.id, item.id, answerQuestion)
        console.log(el.variants);
    }, [answerQuestion])

    const addTrueVariants = useAddForms(state => state.addTrueVariant)
    const deleteTrueVariants = useAddForms(state => state.deleteTrueVariant)
    const handleChange = (e) => {
        e.target.checked === true && addTrueVariants(el.id, item.id)
        e.target.checked === false && deleteTrueVariants(el.id, item.id)
        console.log(forms);
    }

    return (
        <li>
            <input type="text" name='variants' className='list-inputs__variant' onInput={(e) => {
                    setAnswerQuestion(e.target.value)
                }}/>
            {el.variants.length > 1 &&
                <button type="button" className='list-inputs__btn' onClick={onDeleteVariants}><X /></button> }
            <input type="checkbox" name="checkbox" className='list-inputs__checkbox' onChange={handleChange}/>
        </li>
    )
}