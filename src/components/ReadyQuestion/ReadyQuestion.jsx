import { AnswerItem } from './AnswerItem';
import './ReadyQuestion.scss'

export const ReadyQuestion = ({question, el}) => {

    

    return (
        <div className='ready-question'>
            <h3 className='ready-question__title'>{question}</h3>
            <div className='ready-question__variants'>
                {el.variants.map((item) => (
                    <AnswerItem key={item.id} item={item}/>
                ))}
            </div>
        </div>
    )
}