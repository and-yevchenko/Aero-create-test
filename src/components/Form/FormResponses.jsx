import { Plus } from "lucide-react"
import { useFormCardContext } from "./FormProvider"


export const FormResponses = ({ children }) => {

    const props = useFormCardContext()
    
    return (
        <div className='form__responses'>
            <div className="form__variants">
                <div className='form__label'>
                    <label htmlFor='variants'>Variants</label><label htmlFor='checkbox'>True</label>
                </div>
                <ul className='form__list-inputs list-inputs'>
                    {children}
                </ul>
            </div>
            <button type="button" onClick={props.onAddVariant}><Plus /></button>
            {props.cardItem.variants.filter((i) => i.check).length !== 1 
                && <span className="form__error">Set only one true variant!</span>}
        </div>
    )
}