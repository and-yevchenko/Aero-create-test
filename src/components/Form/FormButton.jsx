import { useFormCardContext } from "./FormProvider"


export const FormButton = ({ children }) => {

    const props = useFormCardContext()
    
    return (
        // <button onClick={props.onAddCard}>{children}</button>
        <button>{children}</button>
    )
}