import './Form.scss'
import { useForm } from "react-hook-form"
import { FormCardContext } from "./FormProvider"
import { FormTitle } from "./FormTitle"
import { FormResponses } from "./FormResponses"
import { FormResponsesList } from "./FormResponsesList"
import { FormButton } from "./FormButton"


const FormComponent = ({ children, ...rest }) => {

    const { register, unregister, handleSubmit, reset, setValue, getValues, formState: { errors, isValid } } = useForm({
        mode: 'onChange'
    })

    const onSubmit = data => {
        rest.onAddCard()
        reset()
    }

    return (
        <FormCardContext.Provider value={{ register, setValue, getValues, unregister, errors, isValid, ...rest }}>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                {children}
            </form>
        </FormCardContext.Provider>
    )
}

export const Form = Object.assign(FormComponent, {
    Title: FormTitle,
    Responses: FormResponses,
    ResponsesList: FormResponsesList,
    Button: FormButton,
})