import { Link } from 'react-router-dom'
import { Header } from '../../components/layout/Header/Header'
import { BackgroundVideo } from '../../components/ui/BackgroundVideo/BackgroundVideo'
import { TitleHome } from '../../components/ui/Title/TitleHome'
import './Home.scss'

export const Home = () => {
    return (
        <div className="home-page">
            <BackgroundVideo />
            <Header />
            <TitleHome />
            <Link to='/create-test' className='home-page__button'>Get started</Link>
        </div>
    )
}