const AddTodoForm = () => {
  return (
    <form>
      <div className="m-auto flex w-full max-w-lg items-center gap-2 p-6">
        <input
          type="text"
          placeholder="Enter something to do..."
          className="w-full rounded-xl border-2 border-zinc-600 px-5 py-2"
        />
      </div>
    </form>
  );
};

export default AddTodoForm;
