import { API } from "../../utils/todos-api";
import Spinner from "../Spinner/Spinner";
import Alert from "../Alert/Alert";
import useFetch from "../../hooks/useFetch";
import TodosList from "./TodosList";

const Todos = () => {
  const { data: todos, isLoader, error } = useFetch(API);

  return (
    <>
      <h1 className="text-center text-4xl my-8 uppercase">User Todos</h1>
      <div className="container flex flex-wrap justify-center  gap-6">
        {isLoader && <Spinner />}
        {error && <Alert />}
        {todos.map((todo) => (
          <TodosList key={todo.id} todo={todo} />
        ))}
      </div>
    </>
  );
};

export default Todos;
