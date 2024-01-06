export default interface Todo {
  id: string;
  text: string;
  status: "undone" | "completed";
}
