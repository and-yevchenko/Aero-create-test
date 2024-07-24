import { createContext, useContext } from "react";

export const FormCardContext = createContext(null)

export const useFormCardContext = () => {
    
    const props = useContext(FormCardContext)
    if (!props) {
        throw new Error('No form-question context provider')
    }

    return props
}