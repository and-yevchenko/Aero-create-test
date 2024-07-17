

export const ListVariants = ({ el }) => {

    return (
        <ul className='card-question__variants'>
            {el.variants.length > 0 && el.variants.map((item) => (
                <li key={item.id} style={item.check ? {color: 'green'} : {color: 'red'}}>{item.answer}</li>
            ))}
        </ul>
    )
}