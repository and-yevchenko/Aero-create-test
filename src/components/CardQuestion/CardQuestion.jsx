import { Settings, X } from 'lucide-react'
import './CardQuestion.scss'

export const CardQuestion = () => {

    return (
        <div className="card-question">
            <div className="card-question__header">
                <div className="card-question__title">Question</div>
                <div className="card-question__buttons">
                    <button><Settings /></button>
                    <button><X /></button>
                </div>
            </div>
            <div className='card-question__content'>
                <h2>Lorem ipsum dolor sit amet?</h2>
                <ul className='card-question__variants'>
                    <li>true</li>
                    <li>false</li>
                    <li>false</li>
                    <li>false</li>   
                </ul>
            </div>
        </div>
    )
}