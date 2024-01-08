import { createContext, ReactNode } from "react";
import { nanoid } from "nanoid";

import TodosContextType from "@/types/TodosContextType";
import Todo from "@/types/Todo";
import useLocalStorage from "@/hooks/useLocalStorage";

interface Props {
  children: ReactNode;
}

export const TodoContext = createContext<TodosContextType | undefined>(
  undefined,
);

const TodoProvider = ({ children }: Props) => {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);

  // ::: ADD NEW TODO :::
  const addTodo = (text: string): void => {
    const newTodo: Todo = {
      id: nanoid(),
      text,
      status: "undone",
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const value: TodosContextType = {
    todos,
    addTodo,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
