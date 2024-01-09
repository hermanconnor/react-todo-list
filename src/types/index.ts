export interface Todo {
  id: string;
  text: string;
  status: "incomplete" | "completed";
}

export interface TodosContextType {
  todos: Todo[];
  addTodo: (text: string) => void;
  editTodo: (id: string, text: string) => void;
  deleteTodo: (id: string) => void;
}
