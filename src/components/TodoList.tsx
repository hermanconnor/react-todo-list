import { motion } from "framer-motion";

import TodoItem from "@/components/TodoItem";
import useTodo from "@/hooks/useTodo";

const TodoList = () => {
  const { todos } = useTodo();
  return (
    <motion.ul className="m-auto grid max-w-lg gap-2 px-5">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </motion.ul>
  );
};

export default TodoList;
