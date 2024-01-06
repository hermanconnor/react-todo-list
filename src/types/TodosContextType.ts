import Todo from "./Todo";

export default interface TodosContextType {
  todos: Todo[];
  addTodo: (text: string) => void;
}
