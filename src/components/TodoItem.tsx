import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import cn from "classnames";

import { Todo } from "@/types";
import useTodo from "@/hooks/useTodo";

interface Props {
  todo: Todo;
}

const TodoItem = ({ todo }: Props) => {
  const { deleteTodo } = useTodo();

  return (
    <motion.li
      layout
      className={cn(
        "rounded-xl bg-zinc-900 p-5",
        todo.status === "completed" && "bg-opacity-50 text-zinc-500",
      )}
    >
      {todo.text}
    </motion.li>
  );
};

export default TodoItem;
