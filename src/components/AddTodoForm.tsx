import { useEffect, useRef, FormEvent } from "react";
import { toast } from "sonner";

import useTodo from "@/hooks/useTodo";

const AddTodoForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { addTodo } = useTodo();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const todo = formData.get("todo");

    if (!todo) {
      toast.error("Please enter a todo");
      return;
    }

    addTodo(todo.toString().trim());
    toast.success("Todo added successfully!");

    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="m-auto flex w-full max-w-lg items-center gap-2 p-6">
        <label htmlFor="todoInput" className="sr-only">
          Add a Todo
        </label>
        <input
          ref={inputRef}
          type="text"
          id="todoInput"
          name="todo"
          placeholder="Enter something to do..."
          className="w-full rounded-xl border-2 border-zinc-600 bg-transparent px-5 py-2 outline-none transition-all duration-150 ease-linear placeholder:text-zinc-500 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/50"
        />

        <button
          type="submit"
          className="rounded-full bg-indigo-500 px-5 py-2 uppercase leading-normal text-white transition-all duration-150 ease-in-out hover:bg-indigo-600 hover:shadow-md focus:bg-indigo-600 focus:shadow-lg focus:outline-none focus:ring focus:ring-indigo-300 active:scale-95 active:bg-indigo-700"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddTodoForm;
