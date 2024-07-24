import { X } from "lucide-react"
import { useFormCardContext } from "./FormProvider"
import { useEffect, useRef } from "react"


export const FormResponsesList = ({ item, el }) => {

    const props = useFormCardContext()
    const inputCheckbox = useRef(null)

    useEffect(() => {
        if (props.count === 1) {
            props.onEditVariant(props.getValues(`${item.id}`), item.id)
            props.onEditTrueVariant(inputCheckbox.current.checked, item.id)
        }
        return () => {
            if (props.count === 1) props.handleSaveSettings(el, props.isValid)
            props.setCount(0)
        }
    }, [props.count])

    useEffect(() => {
        if (props.openSettings) {
            props.setValue("question", props.forms.find(form => form.id === props.openSettings).title)
            const allVariants = props.forms.find(form => form.id === props.openSettings).variants
            if (allVariants.find(i => i.id === item.id)?.answer) {
                props.setValue(`${item.id}`, `${allVariants.find(i => i.id === item.id)?.answer}`)
            } else {props.setValue(`${item.id}`, '')}
            inputCheckbox.current.checked = allVariants.find(i => i.id === item.id)?.check
            // props.unregister()
        }
    }, [props.openSettings])

    return (
        <li>
            <input
            {...props.register(`${item.id}`, {required: true})} 
            type="text" className='list-inputs__variant' 
            onInput={(e) => !props.openSettings && props.onUpdateVariant(e, item.id)}
            style={props.errors[item.id] && {borderBottom: '1px solid red'}}
            autoComplete="off"
            />

            {props.cardItem.variants.length > 1 &&
            <button onClick={(e) => props.onDeleteVariant(e, item.id)}><X /></button>
            }
            
            <label className="list-inputs__checks">
                <input 
                ref={inputCheckbox}
                name="checkbox" 
                type="checkbox" className='list-inputs__checkbox' onClick={(e) => !props.openSettings && props.onTrueVariant(e, item.id)}
                />
                <span className="list-inputs__custom-checkbox"></span>
            </label>
        </li>
    )
}