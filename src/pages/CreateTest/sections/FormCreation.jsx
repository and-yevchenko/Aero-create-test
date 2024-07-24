import { Form } from "../../../components/Form/Form"



const FormCreation = ({...props}) => {

    return (
        <Form {...props}>
            <Form.Title />
            <Form.Responses>
                {props.cardItem.variants.length > 0 && props.cardItem.variants.map((item) => (
                    <Form.ResponsesList key={item.id} item={item}/>
                    
                ))}
            </Form.Responses>
            <div className='form__buttons'>
                <Form.Button>save</Form.Button>
            </div>
        </Form>
    )
}

export default FormCreation