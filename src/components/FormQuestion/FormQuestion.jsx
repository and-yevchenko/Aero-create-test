import { Plus } from 'lucide-react'
import './FormQuestion.scss'
import { Button } from '../ui/Buttons/Button'
import { useAddForms, useReUpdate } from '../../store/store'
import { useEffect, useState } from 'react'
import { VariantItem } from './VariantItem'


const formBtnParams = {
    value: "delete",
}

export const FormQuestion = ({ num, el }) => {

    const forms = useAddForms(state => state.forms)
    const deleteForms = useAddForms(state => state.deleteForm)
    const onDeleteForm = (e) => {
        e.preventDefault()
        deleteForms(el.id)
    }
    
    const [titleQuestion, setTitleQuestion] = useState("")
    const updateTitle = useAddForms(state => state.updateFormTitle)
    useEffect(() => {
        updateTitle(el.id, titleQuestion)
    }, [titleQuestion])
    // const onUpdateTitle = () => { el.title = titleQuestion }

    const addVariants = useAddForms(state => state.addVariant)
    const arrUpdate = useReUpdate(state => state.arrUpdate)
    const reUpdate = useReUpdate(state => state.updates)
    const onAddVariant = (e) => { 
        addVariants(el.id)
        reUpdate()
        // el.variants = [...el.variants, {id: nanoid()}] 
    }

    return (
        <form className="form-question" id="form-question" >
            <div className='form-question__question'>
                <label htmlFor="question">Question {num}</label>
                <input type="text" placeholder="Question" name='question' onInput={(e) => {
                    setTitleQuestion(e.target.value)
                }}/>
            </div>
            <div className='form-question__responses'>
                <div className="form-question__variants">
                    <div className='form-question__label'>
                        <label htmlFor='variants'>Variants</label><label htmlFor='checkbox'>True</label>
                    </div>
                    <ul className='form-question__list-inputs list-inputs'>
                        {el.variants.length > 0 && el.variants.map((item) => (
                            <VariantItem item={item} key={item.id} el={el}/>
                        ))}
            
                    </ul>
                </div>
                <button type='button' className='form-question__add' onClick={onAddVariant}><Plus /></button>
            </div>
            <div className="form-question__buttons">
                {forms.length > 1 && 
                    <Button btnParams={formBtnParams} btnClick={onDeleteForm}/>
                }
            </div>
        </form>
    )
}