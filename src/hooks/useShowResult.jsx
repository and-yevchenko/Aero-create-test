import { useState } from 'react';

export const useShowResult = () => {
  const [result, setResult] = useState([]);
  const [show, setShow] = useState(false);

  const handleShowResult = () => {
    setShow(true);
  };

  const sumResult = () => {
    return result.reduce((a, b) => a + b, 0);
  };

  const onSetResult = (checking) => {
    setResult((prev) => {
      return [...prev, checking];
    });
  };

  return {
    result,
    show,
    handleShowResult,
    sumResult,
    onSetResult,
  };
};
