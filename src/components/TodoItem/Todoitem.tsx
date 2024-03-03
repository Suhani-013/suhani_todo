import Todo from "../../interfaces/Todo";

interface TodoItemProps {
  index: number;
  todo: Todo;
  onCompleted: (index: number, completed: boolean) => void;
}

export default function TodoItem({
  index,
  todo,
  onCompleted,
}: TodoItemProps): JSX.Element {
  return (
    <div className="flex justify-between border rounded-md items-center px-10">
      <div className="px-5 py-5 space-y-5">
        <h1
          className={`font-bold text-xl ${todo.isCompleted ? "line-through" : ""}`}>
          {todo.title}
        </h1>
        <p>{todo.body}</p>
      </div>
      <div>
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={(value) => {
           onCompleted(index,value.target.checked)
          }}
        />
      </div>
    </div>
  );
}
