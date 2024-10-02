import { Link } from 'react-router-dom';
import { Header } from '../../components/layout/Header/Header';
import './ShowTest.scss';
import { useAddForms, useShuffleIsActive } from '../../store/store';
import { ReadyQuestion } from '../../components/ReadyQuestion/ReadyQuestion';
import { useShowResult } from '../../hooks/useShowResult';
import ShowPanel from './section/ShowPanel';

export const ShowTest = () => {
  const forms = useAddForms((state) => state.forms);
  const shuffleCards = useShuffleIsActive();
  const showResult = useShowResult();

  return (
    <div className="show-test-page">
      <div className="show-test-page__container">
        <Header>
          <Link to="/Aero-create-test/create-test" className="show-test-page__button">
            edit test
          </Link>
        </Header>
        {forms.length > 0 && (
          <ol className="show-test-page__list">
            {!shuffleCards.shuffle
              ? forms.map((el) => (
                  <li key={el.id}>
                    <ReadyQuestion
                      {...showResult}
                      question={el.title}
                      shuffle={shuffleCards.shuffle}
                      el={el}
                    />
                  </li>
                ))
              : [...forms]
                  .sort(() => 0.5 - Math.random())
                  .map((el) => (
                    <li key={el.id}>
                      <ReadyQuestion
                        {...showResult}
                        question={el.title}
                        shuffle={shuffleCards.shuffle}
                        el={el}
                      />
                    </li>
                  ))}
          </ol>
        )}
        <ShowPanel {...showResult} forms={forms} />
      </div>
    </div>
  );
};
