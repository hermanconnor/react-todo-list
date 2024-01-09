import { createContext, ReactNode } from "react";
import { nanoid } from "nanoid";

import { Todo, TodosContextType } from "@/types";
import useLocalStorage from "@/hooks/useLocalStorage";

interface Props {
  children: ReactNode;
}

export const TodoContext = createContext<TodosContextType | undefined>(
  undefined,
);

const TodoProvider = ({ children }: Props) => {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);

  // ADD NEW TODO
  const addTodo = (text: string): void => {
    const newTodo: Todo = {
      id: nanoid(),
      text,
      status: "undone",
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  // DELETE TODO
  const deleteTodo = (id: string): void => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const value: TodosContextType = {
    todos,
    addTodo,
    deleteTodo,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
