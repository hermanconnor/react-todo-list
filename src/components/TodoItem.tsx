import { useState, useEffect, useRef, FormEvent } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import cn from "classnames";

import { Todo } from "@/types";
import useTodo from "@/hooks/useTodo";

interface Props {
  todo: Todo;
}

const TodoItem = ({ todo }: Props) => {
  const [editingTodoId, setEditingTodId] = useState<string | null>(null);

  const { editTodo, deleteTodo, updateStatus } = useTodo();

  const handleEdit = (todoId: string) => {
    setEditingTodId(todoId);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const updatedText = formData.get("updateText");

    if (updatedText) {
      editTodo(todo.id, updatedText.toString().trim());
      setEditingTodId(null);
      e.currentTarget.reset();
    } else {
      toast.error("Update todo field cannot be empty");
    }
  };

  return (
    <motion.li
      layout
      className={cn(
        "rounded-xl  p-5",
        todo.status === "completed" && "bg-opacity-50 text-zinc-500",
      )}
    >
      {editingTodoId === todo.id ? (
        <motion.div layout className="">
          <form onSubmit={handleSubmit}>
            <div className="flex gap-2">
              <label htmlFor="updateInput" className="sr-only">
                Edit Todo
              </label>
              <input
                type="text"
                id="updateInput"
                name="updateText"
                defaultValue={todo.text}
                className="w-full rounded-xl border-2 border-zinc-600 bg-transparent px-5 py-2 outline-none transition-all duration-150 ease-linear placeholder:text-zinc-500 focus:border-amber-900 focus:ring-4 focus:ring-amber-500/50"
              />

              <button className="rounded-xl border-2 border-amber-900 bg-amber-900 px-5 py-2 text-sm font-normal uppercase text-amber-300 active:scale-95">
                Update
              </button>
            </div>
          </form>
        </motion.div>
      ) : (
        <div>
          <div className="flex gap-3">
            <button
              className="flex items-center gap-1"
              onClick={() => handleEdit(todo.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
              Edit
            </button>
          </div>
        </div>
      )}
    </motion.li>
  );
};

export default TodoItem;
