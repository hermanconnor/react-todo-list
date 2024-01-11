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

  const editInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editingTodoId !== null && editInputRef.current) {
      editInputRef.current.focus();
    }
  }, [editingTodoId]);

  const { editTodo, deleteTodo, updateStatus } = useTodo();

  const handleEdit = (todoId: string) => {
    setEditingTodId(todoId);
  };

  const handleStatusUpdate = (todoId: string) => {
    updateStatus(todoId);
    toast.success("Todo status updated successfully");
  };

  const handleDelete = (todoId: string) => {
    deleteTodo(todoId);
    toast.success("Todo deleted successfully");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const updatedText = formData.get("updateText");

    if (updatedText) {
      editTodo(todo.id, updatedText.toString().trim());
      setEditingTodId(null);
      toast.success("Todo updated successfully");
      e.currentTarget.reset();
    } else {
      toast.error("Update todo field cannot be empty");
    }
  };

  return (
    <motion.li
      layout
      className={cn(
        "rounded-xl bg-zinc-900 p-5",
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
                ref={editInputRef}
                type="text"
                id="updateInput"
                name="updateText"
                defaultValue={todo.text}
                className="w-full rounded-xl border-2 border-zinc-600 bg-transparent px-5 py-2 text-white outline-none transition-all duration-150 ease-linear placeholder:text-zinc-500 focus:border-amber-900 focus:ring-4 focus:ring-amber-500/50"
              />

              <button className="rounded-xl bg-amber-500 px-5 py-2 uppercase leading-normal text-white transition-all duration-150 ease-in-out hover:bg-amber-600 hover:shadow-md focus:bg-amber-600 focus:shadow-lg focus:outline-none focus:ring focus:ring-amber-300 active:scale-95 active:bg-amber-700">
                Update
              </button>
            </div>
          </form>
        </motion.div>
      ) : (
        <div className="flex flex-col gap-5 text-white">
          <motion.span layout className="border-b border-b-white">
            {todo.text}
          </motion.span>

          <div className="flex justify-between gap-5 text-white">
            <button className="">Update complete button</button>

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

              <button
                className="flex items-center gap-1 text-red-500 hover:text-red-600 focus:text-red-600 active:text-red-700"
                onClick={() => handleDelete(todo.id)}
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
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.li>
  );
};

export default TodoItem;
