import { X } from "lucide-react"
import { Button } from "../ui/Buttons/Button"
import { useEffect, useRef } from "react"
import { useAddForms } from "../../store/store"




export const VariantItem = ({ item, cardItem, setCardItem, openSettings, register, errors, setValue }) => {

    const forms = useAddForms(state => state.forms)
    

    const onDeleteVariant = (e) => {
        e.preventDefault()
        setCardItem(prev => {
            return {
                ...prev,
                variants: prev.variants.filter((i) => i.id !== item.id)
            }
        })
    }

    const inputVariant = useRef(null)
    const inputCheckbox = useRef(null)
    openSettings && useEffect(() => {
        const allVariants = forms.find(form => form.id === openSettings).variants
        console.log(allVariants.find(i => i.id === item.id))
        // inputVariant.current.value = allVariants.find(i => i.id === item.id)?.answer
        setValue(`${item.id}`, `${[...allVariants].find(i => i.id === item.id)?.answer}`)
        inputCheckbox.current.checked = allVariants.find(i => i.id === item.id)?.check
        // setValue(`answ${item.id}`, `${[...allVariants].find(i => i.id === item.id)?.check}`)
        // unregister()
        
    }, [openSettings])

    const handleTrueVariant = (e) => {
        setCardItem(prev => {
            prev.variants.find(i => i.id === item.id).check = e.target.checked
            return {
                ...prev,
                variants: prev.variants
            }
        })
    }

    //{...register(`${item.id}`, {required: true})}
    //{...register(`answ${item.id}`, {validate: () => cardItem.variants.filter((i) => i.check).length === 1})}

    return (
        <li>
            <input {...register(`${item.id}`, {required: true})} type="text" className='list-inputs__variant' onInput={(e) => {
                setCardItem(prev => {
                    prev.variants.find(i => i.id === item.id).answer = e.target.value
                    return {
                        ...prev,
                        variants: prev.variants
                    }
                })
            }}
            style={errors[item.id] && {borderBottom: '1px solid red'}}
            />
            {cardItem.variants.length > 1 &&
                <Button onClick={onDeleteVariant}><X /></Button>
            }
            <label className="list-inputs__checks">
                <input ref={inputCheckbox} name="checkbox" 
                type="checkbox" className='list-inputs__checkbox' onClick={handleTrueVariant}
                />
                <span className="list-inputs__custom-checkbox"></span>
            </label>
        </li>
    )
}