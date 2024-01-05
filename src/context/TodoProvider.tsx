import { createContext } from "react";

interface Props {
  children: React.ReactNode;
}

export const TodoContext = createContext(undefined);

const TodoProvider = ({ children }: Props) => {
  return <TodoContext.Provider>{children}</TodoContext.Provider>;
};

export default TodoProvider;
