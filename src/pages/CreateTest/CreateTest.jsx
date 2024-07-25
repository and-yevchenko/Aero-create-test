import './CreateTest.scss';
import { Header } from '../../components/layout/Header/Header';
import { Link } from 'react-router-dom';
import { useAddForms, useShuffleIsActive } from '../../store/store';
import { useModal } from '../../hooks/useModal';
import { useCardItem } from '../../hooks/useCardItem';
import FormCreation from './sections/FormCreation';
import CardQuestion from './sections/CardQuestion';
import CreatePanel from './sections/CreatePanel';
import WindowReset from './sections/WindowReset';

export const CreateTest = () => {
  const forms = useAddForms((state) => state.forms);

  const shuffleCards = useShuffleIsActive();
  const modalWindow = useModal();
  const formItem = useCardItem();

  return (
    <div className="create-test-page">
      <div className="create-test-page__container">
        <Header>
          {forms.length > 0 && (
            <Link to={'/show-test'} className="create-test-page__button">
              show test
            </Link>
          )}
        </Header>

        {forms.length > 0 &&
          forms.map((el, index) => (
            <CardQuestion {...formItem} el={el} index={index} key={el.id} />
          ))}

        {!formItem.openSettings && <FormCreation {...formItem} />}

        <CreatePanel
          {...shuffleCards}
          open={modalWindow.onOpen}
          forms={forms}
        />
        <WindowReset {...modalWindow} />
      </div>
    </div>
  );
};
