import './Logo.scss'

export const Logo = ({link}) => {
    return (
        <div className="logo-aero">
            <a href={link}><img src="/Aero.svg" alt="Logo Aero"/></a>
        </div>
    )
}