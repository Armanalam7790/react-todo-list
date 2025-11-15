import React from "react";
import { toast } from "react-toastify";

const Read = ({ todos, settodos }) => {
  const DeleteHandler = (id) => {
    const filltertodo = todos.filter((todo) => todo.id != id);
    settodos(filltertodo);
    toast.error("todo is delete")
  };

  const randertodos = todos.map((todo) => {
    return (
      <li key={todo.id} className="mb-2 flex justify-between items-center  p-3 bg-gray-900 rounded">
       <span className="text-xl font=thin">{todo.title}</span>  
        <button className="text-thin text-red-400 text-sm" onClick={() => DeleteHandler(todo.id)}>delete</button>

      </li>
    );
  });

  return (
    <div className="w-[40%] p-10">
      <h1 className="text-5xl font-thin mb-10">
        <span className="text-pink-400">Pending</span> Todos
      </h1>
      <ol>{randertodos}</ol>
    </div>
  );
};

export default Read;
