import Todo from './Todo'

const TodoList = () => {
  const todos = [
    {description:'Einkaufen',done:true},
    {description:'Sport',done:false},
    {description:'Programmieren',done:false}
  ]
  return (
    <div className="d-flex justify-center mx-auto w-full shadow-md">
      <h1 className="text-center bg-gray-900 text-3xl py-4 font-bold">Unsere todos</h1>
      {todos.map((todo, index) => {
        return <Todo key={index} desc={todo.description} done={todo.done} />;
      })}
    </div>
  );
};

export default TodoList;
