import React, { FC } from 'react';
import TodoListProvider from './context/todoContext'
import List from "./components/List";
import Column from "./components/Column";

export const App: FC = () => {
  return (
    <TodoListProvider>
      <div className="main">
        <List />
        <Column title="Fruit" />
        <Column title="Vegetable" />
      </div>
    </TodoListProvider>
  )
}