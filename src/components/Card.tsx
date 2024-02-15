import React, { FC } from "react";
import { ITodo } from '../@types/todo';
type Props = {
  todo: ITodo;
  onClick: (todo: ITodo) => void;
};

const Card: FC<Props> = ({ todo, onClick }) => {
  return (
    <button className="card" onClick={(e) => { e.stopPropagation(); onClick(todo)}}>
      {todo.name}
    </button>
  );
}

export default Card;