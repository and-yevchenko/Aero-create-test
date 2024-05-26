import './CreateTest.scss'
import { Header } from '../../components/layout/Header/Header'
import { FormQuestion } from '../../components/FormQuestion/FormQuestion'
import { SquarePlus } from 'lucide-react'
import { Button } from '../../components/ui/Buttons/Button'
import { useAddForms } from '../../store/store'
import { Link } from 'react-router-dom'


const addBtnParams = {
    value: <SquarePlus />,
    class: "create-test-page__add",
}

export const CreateTest = () => {
    
    const forms = useAddForms(state => state.forms)
    const addForms = useAddForms(state => state.addForm)

    const handleClick = () => {
        addForms()
        console.log(forms);
    }


    return (
        <div className='create-test-page'>
            <div className='create-test-page__container'>
                <Header isLink={true} link={<Link to='/show-test' className='create-test-page__button'>show test</Link>} />
                {forms.length > 0 && forms.map((el) => (
                    <FormQuestion key={el.id} el={el} num={forms.indexOf(el) + 1}/>
                ))}
                <Button btnParams={addBtnParams} btnClick={handleClick} />
            </div>
        </div>
    )
}