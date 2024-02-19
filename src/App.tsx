import { Toaster } from "sonner";

import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";

function App() {
  return (
    <main className="h-screen overflow-y-auto py-10">
      <Toaster richColors position="bottom-center" />
      <div className="container mx-auto px-5">
        <h1 className="text-center text-5xl">Todo List</h1>
        <AddTodoForm />
        <TodoSummary />
        <TodoList />
      </div>
    </main>
  );
}

export default App;
