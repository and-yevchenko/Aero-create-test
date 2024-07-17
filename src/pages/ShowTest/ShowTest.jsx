import { Link } from 'react-router-dom'
import { Header } from '../../components/layout/Header/Header'
import './ShowTest.scss'
import { useAddForms, useShuffleIsActive } from '../../store/store'
import { ReadyQuestion } from '../../components/ReadyQuestion/ReadyQuestion'
import { useEffect, useState } from 'react'
import { HeadPanel } from '../../components/ui/HeadPanel/HeadPanel'
import { Button } from '../../components/ui/Buttons/Button'
import { RotateCcw, Trash2 } from 'lucide-react'


export const ShowTest = () => {
    const forms = useAddForms(state => state.forms)
    const shuffleCards = useShuffleIsActive()

    
    const [res, setRes] = useState([])
    const [showResult, setShowResult] = useState(false)

    const handleClick = () => {
        setShowResult(true)
    }

    const summArr = () => {
       return res.reduce((a, b) => a + b, 0)
    }

    return (
        <div className='show-test-page'>
            <div className='show-test-page__container'>
                <Header isLink={true} link={<Link to='/create-test' className='show-test-page__button'>edit test</Link>} />
                {forms.length > 0 && 
                    <ol className='show-test-page__list'>
                        {!shuffleCards.shuffle ? 
                            forms.map((el) => (<li key={el.id}><ReadyQuestion question={el.title} el={el} showResult={showResult} res={res} setRes={setRes}/></li>))
                        :    
                            [...forms].sort(() => 0.5 - Math.random()).map((el) => (<li key={el.id}><ReadyQuestion question={el.title} el={el} showResult={showResult} res={res} setRes={setRes}/></li>))
                        }
                    </ol>
                }
                
                <HeadPanel>
                    {showResult && <p>{summArr()}/{forms.length} - {Math.round(summArr() * 100 / forms.length)}%</p>}
                    <Button onClick={handleClick}>result</Button>
                    <Button onClick={() => document.location.reload()}><RotateCcw /></Button>
                </HeadPanel>
            </div>
        </div>
    )
}