import './CreateTest.scss'
import { Header } from '../../components/layout/Header/Header'
import { FormQuestion } from '../../components/FormQuestion/FormQuestion'
import { Link } from 'react-router-dom'
import { CardQuestion } from '../../components/CardQuestion/CardQuestion'
import { useAddForms, useShuffleIsActive } from '../../store/store'
import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import { Button } from '../../components/ui/Buttons/Button'
import { HeadPanel } from '../../components/ui/HeadPanel/HeadPanel'
import { Play, Shuffle, Trash2 } from 'lucide-react'
import { WindowReset } from '../../components/ui/WindowReset/WindowReset'
import { useWindowReset } from '../../hooks/useWindowReset'


export const CreateTest = () => {
    
    const forms = useAddForms(state => state.forms)
    const shuffleCards = useShuffleIsActive()

    const windowReset = useWindowReset()

    const [cardItem, setCardItem] = useState({id: nanoid(), title: "", variants: [{ id: nanoid(), answer: "", check: false }]})

    const addForms = useAddForms(state => state.addForm)

    
    // const validate = (item) => {
    //     if (item.variants.filter((i) => i.check).length !== 1) return null 
    //     if (item.title === "") return null
    //     if (item.variants.filter((i) => i.answer === "").length > 0) return null
    //     return setPav('good')
    // }
    // useEffect(() => {
    //     // cardItem.variants.filter((i) => i.check).length === 1 && setPav(!false) 
    //     cardItem.title !== "" && setPav(true) 
    //     cardItem.variants.filter((i) => i.answer === "").length === 0 && setPav(true) 
    // }, [pav])

    const onAddCard = (e) => {
        // console.log(cardItem.variants.filter((i) => i.check).length === 1 ? "good" : "bad")
        // console.log(cardItem.title === "" ? "bad" : "good")
        // console.log(cardItem.variants.filter((i) => i.answer === "").length > 0 ? 'bad' : 'good')
        e.preventDefault()
        // setPav(false)
        // validate(cardItem)
        addForms(cardItem)
        setCardItem({id: nanoid(), title: "", variants: [{ id: nanoid(), answer: "", check: false }]})
    
    }

    const [openSettings, setOpenSetings] = useState(false)



    

    return (
        <div className='create-test-page'>
            <div className='create-test-page__container'>
                <Header isLink={true} link={<Link to={'/show-test'} className='create-test-page__button'>show test</Link>} />
                
                {forms.length > 0 && forms.map((el, index) => (
                    <CardQuestion el={el} key={el.id} index={index} 
                    cardItem={cardItem} setCardItem={setCardItem} 
                    openSettings={openSettings} setOpenSetings={setOpenSetings}/>
                ))}

                {!openSettings &&
                    <FormQuestion cardItem={cardItem} setCardItem={setCardItem}>
                        <Button onClick={onAddCard}>save</Button>
                    </FormQuestion>
                }
                
                <HeadPanel>
                    <Button onClick={windowReset.onOpen}><Trash2 /></Button>
                    <Button onClick={shuffleCards.setShuffle} className={shuffleCards.shuffle && "__active"}><Shuffle /></Button>
                    <Link to={'/show-test'}><Play /></Link>
                </HeadPanel>
                <WindowReset {...windowReset} />
            </div>
        </div>
    )
}