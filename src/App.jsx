import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodo } from "./components/IncompleteTodo";
import { CompleteTodo } from "./components/CompleteTodo";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  // イベント定義
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (todo, index) => {
    // 未完了のTODOから削除
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);

    // 完了のTODOへ登録
    const newCompleteTodos = [...completeTodos, todo];
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (todo, index) => {
    // 完了のTODOから削除
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);

    // 未完了のTODOへ登録
    const newInCompleteTodos = [...incompleteTodos, todo];
    setIncompleteTodos(newInCompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && <p>登録できるTODOは５個まで</p>}

      <IncompleteTodo
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <CompleteTodo completeTodos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
