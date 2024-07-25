import { useEffect, useState } from 'react';
import { AnswerItem } from './AnswerItem';
import './ReadyQuestion.scss';

export const ReadyQuestion = ({ question, el, ...props }) => {
  const [checking, setChecking] = useState(0);
  useEffect(() => {
    if (props.show) {
      props.onSetResult(checking);
    }
  }, [props.show]);

  return (
    <div className="ready-question">
      <h3 className="ready-question__title">{question}</h3>
      <div className="ready-question__variants">
        {el.variants.map((item) => (
          <AnswerItem
            key={item.id}
            item={item}
            question={question}
            setChecking={setChecking}
            show={props.show}
          />
        ))}
      </div>
    </div>
  );
};
