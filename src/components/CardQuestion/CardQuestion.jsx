import { Settings, X } from 'lucide-react'
import './CardQuestion.scss'
import { Button } from '../ui/Buttons/Button'
import { useAddForms } from '../../store/store'
import { ListVariants } from './ListVariants'
import { FormQuestion } from '../FormQuestion/FormQuestion'
import { nanoid } from 'nanoid'

export const CardQuestion = ({ el, index, 
    cardItem, setCardItem, 
    openSettings, setOpenSetings }) => {

    const forms = useAddForms(state => state.forms)
    const updateForm = useAddForms(state => state.updateForm)


    const deleteForms = useAddForms(state => state.deleteForm)
    const onDeleteForm = (e) => {
        e.preventDefault()
        deleteForms(el.id)
    }

    const onOpenSettings = (e) => {
        e.preventDefault()
        setOpenSetings(el.id)
    }

    const onCloseSettings = (e) => {
        e.preventDefault()
        setCardItem({id: nanoid(), title: "", variants: [{ id: nanoid(), answer: "", check: false }]})
        setOpenSetings(false)
    }
    const onSaveSettings = (e) => {
        e.preventDefault()
        updateForm(el, cardItem)
        setCardItem({id: nanoid(), title: "", variants: [{ id: nanoid(), answer: "", check: false }]})
        setOpenSetings(false)
    }
    
    // useEffect(() => {
    //     updateForm(el, cardItem)

    // }, [onSaveSettings])

    return (
        <div className='card-container'>
            {openSettings === el.id ? 
            <FormQuestion cardItem={cardItem} setCardItem={setCardItem} openSettings={openSettings}>
                <Button onClick={onCloseSettings}>cancel</Button>
                <Button onClick={onSaveSettings}>save</Button>
            </FormQuestion>
            :
            <div className="card-question">
                <div className="card-question__header">
                    <div className="card-question__title">Question {index + 1}</div>
                    <div className="card-question__buttons">
                        <Button onClick={onOpenSettings}><Settings /></Button>
                        <Button><X /></Button>
                    </div>
                </div>
                <div className='card-question__content'>
                    <h2>{el.title}</h2>
                    <ListVariants el={el} />
                </div>
                <div className="form-question__buttons">
                    <Button onClick={onDeleteForm}>delete</Button>
                </div>
            </div>
            }
        </div>
    )
}