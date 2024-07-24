import './Card.scss'
import { CardContent } from "./CardContent"
import { CardHeader } from "./CardHeader"
import { CardVariants } from "./CardVariants"


const CardComponent = ({children}) => {
    
    return (
        <div className="card">
            {children}
        </div>
    )
}

export const Card = Object.assign(CardComponent, {
    Header: CardHeader,
    Content: CardContent,
    Variants: CardVariants,
})