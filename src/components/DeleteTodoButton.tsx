import { FC } from "react";
import { localDB } from "../db/localDB";
import { todoType } from "../models/todo";

export const DeleteTodoButton: FC<{ todo: todoType }> = ({ todo }) => {
  const handleClick = () => {
    try {
      if (!todo.id) throw new Error('todoのidが存在しないため削除できません');
      localDB.deleteTodo(todo.id);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };
  return <button onClick={handleClick}>削除</button>;
};
