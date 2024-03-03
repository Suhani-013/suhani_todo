import { Todoitem } from "..";
import Todo from "../../interfaces/Todo";

interface TodoListProps {
  todos: Todo[];
  onTodoCompleted: (index:number, completed:boolean) => void;
}
export default function TodoList({ todos,onTodoCompleted }: TodoListProps): JSX.Element {
  return (
    <div className="px-32 py-5 space-y-7">
      {todos.map((todo: Todo,index) => {
        return <Todoitem index={index} todo={todo} onCompleted={(index,completed)=>{
          console.log(`I came from TodoItem! ${index} ${completed}`);
            onTodoCompleted(index,completed)
        }}/>;
      })}
    </div>
  );
}
