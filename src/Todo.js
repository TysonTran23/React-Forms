import React from "react";

const Todo = ({ task, id, removeTodo }) => {
  const remove = () => removeTodo(id);

  return (
    <>
      <li>
        {task}
        <button onClick={remove}>X</button>
      </li>
    </>
  );
};

export default Todo;
