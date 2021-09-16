import React from "react";
import { ITodo } from "../Todo";
import "./TodoForm.css";

interface Props {
  todo: ITodo;
  setTodo: (prevState: ITodo) => void;
  addTodo: () => void;
}

const TodoForm = ({ todo, setTodo, addTodo }: Props) => {
  return (
    <div className="todo-form">
      <input
        className="todo-input"
        placeholder="add details"
        type="text"
        name="todo"
        value={todo.task}
        onChange={(e: any) => {
          setTodo({ ...todo, task: e.target.value });
        }}
      />
      <button onClick={addTodo} className="add-button">
        Add
      </button>
    </div>
  );
};

export default TodoForm;
