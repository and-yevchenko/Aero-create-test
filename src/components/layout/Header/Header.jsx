import { Button } from '../../ui/Buttons/Button'
import { Logo } from '../../ui/Logo/Logo'
import './Header.scss'

export const Header = ({isLink, link}) => {
    return (
        <header className='header'>
            <Logo link={"/"}/>
            {isLink && link}
        </header>

    )
}