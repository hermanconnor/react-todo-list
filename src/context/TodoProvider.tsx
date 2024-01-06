import { createContext, ReactNode, useState } from "react";
import { nanoid } from "nanoid";

import TodosContextType from "@/types/TodosContextType";
import Todo from "@/types/Todo";
import { getFromStorage } from "@/utils";

interface Props {
  children: ReactNode;
}

const initial = () => getFromStorage("todos");

export const TodoContext = createContext<TodosContextType | undefined>(
  undefined,
);

const TodoProvider = ({ children }: Props) => {
  const [todos, setTodos] = useState<Todo[]>(initial);

  // ::: ADD NEW TODO :::
  const addTodo = (text: string): void => {
    const newTodo: Todo = {
      id: nanoid(),
      text,
      status: "undone",
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);

    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const value: TodosContextType = {
    todos,
    addTodo,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
