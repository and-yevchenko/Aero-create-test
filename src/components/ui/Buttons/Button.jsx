import './Buttons.scss'

export const Button = ({btnParams, btnClick}) => {

    return (
        <button className={("button" + " " + btnParams.class)} onClick={btnClick}>{btnParams.value}</button>
    )
}