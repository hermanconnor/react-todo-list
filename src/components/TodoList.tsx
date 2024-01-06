import { motion } from "framer-motion";

import useTodo from "@/hooks/useTodo";

const TodoList = () => {
  const { todos } = useTodo();
  return (
    <motion.ul>
      {todos.map((todo) => (
        <motion.li key={todo.id}>{todo.text}</motion.li>
      ))}
    </motion.ul>
  );
};

export default TodoList;
