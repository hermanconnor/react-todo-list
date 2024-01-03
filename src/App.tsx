import AddTodoForm from "./components/AddTodoForm";

function App() {
  return (
    <main>
      <div className="container mx-auto px-5">
        <h1 className="text-center">Todo List</h1>
        <AddTodoForm />
      </div>
    </main>
  );
}

export default App;
