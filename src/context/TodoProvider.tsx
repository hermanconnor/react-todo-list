import { createContext, ReactNode, useState } from "react";

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

  const value: TodosContextType = {
    todos,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
