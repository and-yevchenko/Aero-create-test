

export const CardContent = ({children, el}) => {

    return (
        <div className='card__content'>
            <h2>{el.title}</h2>
            {children}
        </div>
    )
}