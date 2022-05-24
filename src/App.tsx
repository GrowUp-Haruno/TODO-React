import { useState } from 'react';
import './App.css';
import { Input } from './components/Input';
import { TodoList } from './components/TodoList';

function App() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="App">
      <Input inputValue={inputValue} setInputValue={setInputValue} />
      <TodoList />
    </div>
  );
}

export default App;
