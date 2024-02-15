// @types.todo.ts
export interface ITodo {
  id: number;
  type: string;
  name: string;
  timeout: any;
}
export type TodoContextType = {
  todos: ITodo[];
  activeTodos: ITodo[];
  handleClick: (todo: ITodo) => void;
  handleActiveTodoClick: (todo: ITodo) => void;
  handleColumnActiveTodoClick: (title: string, todo: any) => void;
};