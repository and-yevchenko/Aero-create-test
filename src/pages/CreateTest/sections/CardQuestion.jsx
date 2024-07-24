import { Card } from "../../../components/Card/Card"
import { Form } from "../../../components/Form/Form"


const CardQuestion = ({el, index, ...props}) => {
    
    const handleClick = (e) => {
        e.preventDefault()
        props.setCount(1)
    }

    return (
        <>
        {props.openSettings === el.id ? 
        <Form {...props}>
            <Form.Title/>
            <Form.Responses>
                {props.cardItem.variants.length > 0 && props.cardItem.variants.map((item) => (
                    <Form.ResponsesList key={item.id} item={item} el={el}/>
                    
                ))}
            </Form.Responses>
            <div className='form__buttons'>
                <button onClick={props.handleCloseSettings}>cancel</button>
                <button onClick={handleClick}>save</button>
            </div>
        </Form>
        :
        <Card {...props}>
            <Card.Header {...props} el={el} index={index} />
            <Card.Content el={el}>
                <Card.Variants el={el}/>
            </Card.Content>
        </Card>
        }
        </>
    )
}

export default CardQuestion