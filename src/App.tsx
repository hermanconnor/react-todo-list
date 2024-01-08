import { Toaster } from "sonner";

import { AddTodoForm, TodoList } from "./components";

function App() {
  return (
    <main>
      <Toaster richColors position="bottom-center" />
      <div className="container mx-auto px-5 py-7">
        <h1 className="text-center text-5xl">Todo List</h1>
        <AddTodoForm />
        <TodoList />
      </div>
    </main>
  );
}

export default App;
