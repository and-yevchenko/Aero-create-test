import { useEffect, useState } from 'react';
import { useShuffleIsActive } from '../../store/store';
import { AnswerItem } from './AnswerItem';
import './ReadyQuestion.scss'

export const ReadyQuestion = ({ question, el, showResult, res, setRes }) => {

    const shuffleCards = useShuffleIsActive()
    
    const [varAA, setVarAA] = useState(0)
    useEffect(() => {
        if (showResult) {
            setRes(prev => {
                return [
                    ...prev,
                    varAA
                ]
            })  
        // console.log(res)
        }
        
    }, [showResult])

    return (
        <div className='ready-question'>
            <h3 className='ready-question__title'>{question}</h3>
            <div className='ready-question__variants'>
                {!shuffleCards.shuffle ? 
                    el.variants.map((item) => (
                        <AnswerItem key={item.id} item={item} question={question} setVarAA={setVarAA} varAA={varAA} showResult={showResult}/>
                    ))
                :    
                    [...el.variants].sort(() => 0.5 - Math.random()).map((item) => (
                        <AnswerItem key={item.id} item={item} question={question} setVarAA={setVarAA} varAA={varAA} showResult={showResult}/>
                    ))
                }
            </div>
        </div>
    )
}