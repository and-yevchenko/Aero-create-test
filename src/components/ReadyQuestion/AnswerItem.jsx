import { useEffect, useRef, useState } from 'react';

export const AnswerItem = ({ item, question, setChecking, show }) => {
  const [isAnswer, setIsAnswer] = useState({ color: 'black' });
  const inputCheck = useRef(null);

  const handleInput = () => {
    inputCheck.current.checked === item.check ? setChecking(1) : setChecking(0);
  };

  useEffect(() => {
    if (show) {
      if (inputCheck.current.checked) {
        item.check && setIsAnswer({ color: '#008000' });
        !item.check && setIsAnswer({ color: '#ff0000' });
      }
      inputCheck.current.disabled = true;
    }
  }, [show]);

  return (
    <div className="ready-question__variant-item">
      <label style={isAnswer}>
        <input
          className="ready-question__radio"
          type="radio"
          onClick={handleInput}
          ref={inputCheck}
          name={'test ' + question}
          id={item.id}
        />
        <span className="ready-question__custom-radio"></span>
        {item.answer}
      </label>
    </div>
  );
};
