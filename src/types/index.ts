export interface Todo {
  id: string;
  text: string;
  status: "undone" | "completed";
}

export interface TodosContextType {
  todos: Todo[];
  addTodo: (text: string) => void;
}
