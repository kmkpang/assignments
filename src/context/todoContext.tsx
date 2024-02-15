// context/todoContext.tsx
import React, { FC, ReactNode, createContext, useState, useCallback, useContext } from "react";
import { TodoContextType, ITodo } from '../@types/todo';
import { lists } from "../constants/lists";

const TodoContext = createContext<TodoContextType | null>(null);

export const useTodos = () => useContext(TodoContext);

const TodoProvider: FC<{children: ReactNode}> = ({ children }) => {
  const [todos, setTodos] = useState<ITodo[]>(lists);
  const [activeTodos, setActiveTodos] = useState<ITodo[]>([]);

  const handleClick = useCallback((item: ITodo) => {
    // Filter item out from todo list
    setTodos((todos) => todos.filter((t) => t.id !== item.id));
    // Timeout
    const timeout = setTimeout(() => {
      // Filter item out from active todo
      setActiveTodos((activeTodos) =>
        activeTodos.filter((t) => t.id !== item.id),
      );
      // Set item to todo list
      setTodos((todos) => [...todos, item]);
    }, 5000);
    // Set item to active todo
    setActiveTodos((activeTodos) => [...activeTodos, { ...item, timeout }]);
  }, []);

  const handleActiveTodoClick = useCallback((todo: ITodo) => {
    clearTimeout(todo.timeout)
    console.log('handleActiveTodoClick')
    // Filter item out from active todo
    setActiveTodos((activeTodos) =>
      activeTodos.filter((t) => t.id !== todo.id),
    );
    // Set item back to todo list
    setTodos((todos) => [...todos, { ...todo, timeout: null }]);
  }, []);

  const handleColumnActiveTodoClick  = useCallback((title: string, todos: any) => {
    console.log('handleColumnActiveTodoClick')
    if(todos.length > 0) {
      const todo = todos.find((item:any) => item.type === title);
      if(todo) {
        clearTimeout(todo.timeout)
        // Filter item out from active todo
        setActiveTodos((activeTodos) =>
          activeTodos.filter((t) => t.id !== todo.id),
        );
        // Set item back to todo list
        setTodos((todos) => [...todos, { ...todo, timeout: null }]);
      }
    }
  }, []);

  const value = {
    todos,
    activeTodos,
    handleClick,
    handleActiveTodoClick,
    handleColumnActiveTodoClick,
  };
  
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoProvider;