import { Plus } from 'lucide-react'
import './FormQuestion.scss'
import { Button } from '../ui/Buttons/Button'
import { useAddForms } from '../../store/store'
import { VariantItem } from './VariantItem'
import { nanoid } from 'nanoid'
import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'




export const FormQuestion = ({ children, cardItem, setCardItem, openSettings }) => {

    const { register, unregister, handleSubmit, watch, reset, setValue, formState: { errors, isSubmitted, isValid } } = useForm({
        mode: 'onChange'
    })

    // const [isReset, setIsReset] = useState(false)
    const onSubmit = data => {
        console.log(data)
        reset()
        
    }
    const handleClick = () => {
        console.log('f')
        // unregister()
    }

    const forms = useAddForms(state => state.forms)

    const onAddVariant = (e) => {
        e.preventDefault()
        setCardItem(prev => {
            return {
                ...prev,
                variants: [...prev.variants, { id: nanoid(), answer: "", check: false }]
            }
        })
    }

    const inputTitle = useRef(null)
    openSettings && useEffect(() => {
            setCardItem(forms.find(form => form.id === openSettings))
            // inputTitle.current.value = forms.find(form => form.id === openSettings).title
            setValue("question", forms.find(form => form.id === openSettings).title)
        }, [openSettings])


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form-question card-settings" id="form-question">
            <div className='form-question__question'>
                <label htmlFor="question">Question:</label>
                <input {...register("question", {required: 'This field is required'})} type="text" placeholder="Question" onInput={(e) => {
                    setCardItem(prev => {
                        return {
                            ...prev,
                            title: e.target.value
                        }
                    })
                }} />
                {errors.question && <span style={{color: 'red'}}>This field is required</span>}
            </div>
            <div className='form-question__responses'>
                <div className="form-question__variants">
                    <div className='form-question__label'>
                        <label htmlFor='variants'>Variants</label><label htmlFor='checkbox'>True</label>
                    </div>
                    <ul className='form-question__list-inputs list-inputs'>
                        {cardItem.variants.length > 0 && cardItem.variants.map((item) => (
                            <VariantItem 
                                item={item} 
                                key={item.id} 
                                cardItem={cardItem}
                                setCardItem={setCardItem}
                                openSettings={openSettings}
                                register={register}
                                errors={errors}
                                setValue={setValue}/>
                        ))}
                    </ul>
                </div>
                <Button onClick={onAddVariant}><Plus /></Button>
                
            </div>
            <button type='submit' onClick={handleClick}>click</button>
            <div className="form-question__buttons">
                {children}
            </div>
        </form>
    )
}