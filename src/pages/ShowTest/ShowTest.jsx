import { Link } from 'react-router-dom'
import { Header } from '../../components/layout/Header/Header'
import './ShowTest.scss'
import { useAddForms } from '../../store/store'
import { ReadyQuestion } from '../../components/ReadyQuestion/ReadyQuestion'

export const ShowTest = () => {
    const forms = useAddForms(state => state.forms)

    return (
        <div className='show-test-page'>
            <div className='show-test-page__container'>
                <Header isLink={true} link={<Link to='/create-test' className='show-test-page__button'>edit test</Link>} />
                {forms.length > 0 && 
                <ol className='show-test-page__list'>
                    {forms.map((el) => (<li key={el.id}><ReadyQuestion question={el.title} el={el}/></li>))}
                </ol>
                }
            </div>
        </div>
    )
}