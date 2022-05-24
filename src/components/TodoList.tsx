import { useLiveQuery } from 'dexie-react-hooks';
import { CSSProperties, FC } from 'react';
import { localDB } from '../db/localDB';
import { DeleteTodoButton } from './DeleteTodoButton';

const style: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const TodoList: FC = () => {
  const todoList = useLiveQuery(localDB.getTodoList, []);
  
  // IndexDBが読み込めていない場合は、何も表示しない
  if (!todoList) return null;

  return (
    <>
      {todoList.map((todo) => (
        <div style={style} key={todo.id}>
          <p>{todo.text}</p>
          <DeleteTodoButton todo={todo} />
        </div>
      ))}
    </>
  );
};
