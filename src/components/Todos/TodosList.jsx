const TodosList = ({ todo }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-header">User id is {todo.id}</h2>
        <p className="text-content2">{todo.title}</p>
        <div className="card-footer">
          {todo.completed ? (
            <h2 className="text-green-600">Completed</h2>
          ) : (
            <h2 className="text-red-600">Not completed</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodosList;
