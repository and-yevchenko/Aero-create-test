import { useFormCardContext } from './FormProvider';

export const FormTitle = () => {
  const props = useFormCardContext();

  return (
    <div className="form__question">
      <label htmlFor="question">Question:</label>
      <input
        {...props.register('question', { required: 'This field is required' })}
        type="text"
        placeholder="Question"
        onInput={props.onUpdateTitle}
        style={props.errors.question && { borderBottom: '2px solid red' }}
        autoComplete="off"
      />
      {props.errors.question && (
        <span style={{ color: 'red' }}>This field is required</span>
      )}
    </div>
  );
};
