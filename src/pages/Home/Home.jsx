import './Home.scss';
import { Link } from 'react-router-dom';
import { Header } from '../../components/layout/Header/Header';
import { BackgroundVideo } from '../../components/ui/BackgroundVideo/BackgroundVideo';
import { TitleHome } from '../../components/ui/Title/TitleHome';

export const Home = () => {
  return (
    <div className="home-page">
      <BackgroundVideo />
      {/* <Header /> */}
      <img src="/Aero-create-test/Aero.svg" alt="Logo" className='home-logo'/>
      <TitleHome>Create your own test</TitleHome>
      <Link to="/Aero-create-test/create-test" className="home-page__button">
        Get started
      </Link>
    </div>
  );
};
