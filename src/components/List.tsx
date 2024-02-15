import React, { FC } from "react";
import Card from "./Card";
import { useTodos } from "../context/todoContext";
import { ITodo } from '../@types/todo';

const TodoList: FC = () => {
  const { todos, handleClick } = useTodos();

  return (
    <div className="list">
      {todos.map((todo: ITodo) => (
        <Card key={`todo-${todo.id}`} todo={todo} onClick={handleClick} />
      ))}
    </div>
  );
}

export default TodoList;