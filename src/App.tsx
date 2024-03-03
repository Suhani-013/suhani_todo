import { useState } from "react";
import { TodoList, Todoitem } from "./components";
import Todo from "./interfaces/Todo";

export default function App(): JSX.Element {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [todos, setTodo] = useState<Todo[]>([]);

  return (
    <div>
      <div>
        <input
          className={"border rounded-md px-3 py-2"}
          placeholder="Title.."
          type="text"
          value={title}
          onChange={(value) => {
            setTitle(value.target.value);
          }}
        />
        <input
          className={"border rounded-md px-3 py-2"}
          placeholder="Desc..."
          type="text"
          value={body}
          onChange={(value) => {
            setBody(value.target.value);
          }}
        />
        <button
          disabled={title.length === 0}
          onClick={() => {
            setTodo((prevState) => {
              return [
                ...prevState,
                {
                  title: title,
                  body: body,
                  isCompleted: false,
                },
              ];
            });
            setTitle("");
            setBody("");
          }}>
          Add
        </button>
      </div>
      <TodoList
        todos={todos}
        onTodoCompleted={(index, completed) => {
          todos[index].isCompleted=completed;
          setTodo([...todos])
          
        }}
      />
    </div>
  );
}
