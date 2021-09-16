import React from "react";
import { ITodo } from "../Todo";
import "./TodoList.css";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

interface Props {
  todoList: ITodo[];
  handleCompletingTodo: (e: any, todo: ITodo) => void;
  deleteTodo: (todo: ITodo) => void;
  deleteAllTodo: () => void;
  showDeleteIcon: () => boolean;
  showDeleteAllButton: () => boolean;
}

const TodoList = ({
  todoList,
  handleCompletingTodo,
  deleteTodo,
  deleteAllTodo,
  showDeleteIcon,
  showDeleteAllButton,
}: Props) => {
  return (
    <>
      <div className="todo-list">
        {todoList.length ? (
          todoList.map((todo: ITodo, index: number) => {
            return (
              <div key={index} className="task">
                <input
                  type="checkbox"
                  name="complete"
                  onChange={(e: any) => handleCompletingTodo(e, todo)}
                  checked={todo.completed}
                />
                <span>{todo.task}</span>
                {showDeleteIcon() && <DeleteOutlineIcon
                  className="delete-icon"
                  onClick={() => deleteTodo(todo)}
                />}
              </div>
            );
          })
        ) : (
          <p>Nothing here...</p>
        )}
      </div>
      {showDeleteAllButton() && <div className="delete" onClick={() => deleteAllTodo()}>
        <button>
          <DeleteOutlineIcon />
          delete all
        </button>
      </div>}
    </>
  );
};

export default TodoList;
