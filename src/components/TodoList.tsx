import { motion } from "framer-motion";

import { TodoItem, NothingToDo } from "@/components";

import useTodo from "@/hooks/useTodo";

const TodoList = () => {
  const { todos } = useTodo();

  if (!todos.length) {
    return (
      <div className="m-auto max-w-lg px-5">
        <div className="flex flex-col items-center gap-5 rounded-xl px-5 py-10 text-center text-xl font-bold">
          <h2>You have nothing to do!</h2>

          <NothingToDo />
        </div>
      </div>
    );
  }

  return (
    <motion.ul className="m-auto grid max-w-lg gap-2 px-5">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </motion.ul>
  );
};

export default TodoList;
