

export const CardVariants = ({...props}) => {

    return (
        <ul className='card__variants'>
            {props.el.variants.length > 0 && props.el.variants.map((item) => (
                <li key={item.id} style={item.check ? {color: 'green'} : {color: 'red'}}>{item.answer}</li>
            ))}
        </ul>
    )
}