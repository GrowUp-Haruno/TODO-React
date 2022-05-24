import { ChangeEventHandler, Dispatch, FC, KeyboardEventHandler, memo, SetStateAction } from 'react';
import { localDB } from '../db/localDB';

export const Input: FC<{
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
}> = memo(({ inputValue, setInputValue }) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (ev) => setInputValue(ev.target.value);

  const handleKeyUp: KeyboardEventHandler<HTMLInputElement> = (ev) => {
    if (ev.code !== 'Enter') return;
    if (inputValue === '') return;

    localDB.addTodo(inputValue);
    setInputValue('');
  };

  return (
    <input
      type="text"
      style={{ margin: '16px' }}
      value={inputValue}
      onChange={handleChange}
      onKeyUp={handleKeyUp}
    />
  );
});
