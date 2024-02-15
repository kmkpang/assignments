import React, { FC } from "react";
import Card from "./Card";
import { ITodo } from '../@types/todo';
import { useTodos } from "../context/todoContext";

type Props = {
  title: string;
};

const Column: FC<Props> = ({ title }) => {
  const { activeTodos, handleActiveTodoClick, handleColumnActiveTodoClick } = useTodos();

  const items = activeTodos.filter((todo: ITodo) => todo.type === title);

  return (
    <div className={`column ${title.toLowerCase()}`} onClick={() => handleColumnActiveTodoClick(title, activeTodos)}>
      <h2>{title}</h2>
      <div className="column-body">
        {
          items.map((item) => 
            <Card key={item.id} todo={item} onClick={handleActiveTodoClick} />
        )
        }
      </div>
    </div>
  );
}

export default Column;
