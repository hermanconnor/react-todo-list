import useTodo from "@/hooks/useTodo";

const TodoSummary = () => {
  const { todos, deleteAllCompleted } = useTodo();

  const completedTodos = todos.filter((todo) => todo.status === "completed");

  return (
    <div className="m-auto mb-4 max-w-lg px-5">
      <div className="flex items-center justify-between">
        {todos.length > 0 && (
          <p className="text-sm font-medium">
            {completedTodos.length}/{todos.length} todos completed
          </p>
        )}

        {completedTodos.length > 0 && (
          <button
            type="button"
            className="text-sm font-medium text-red-500 hover:underline"
            onClick={deleteAllCompleted}
          >
            Delete all completed
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoSummary;
