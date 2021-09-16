import React, { useState } from "react";
import Tabs from "./Tabs/Tabs";
import TodoList from "./TodoList/TodoList";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./TodoForm/TodoForm";

interface Props {}

export interface ITodo {
  id: any;
  task: string;
  completed: boolean;
}

const Todo = (props: Props) => {
  const [selectedTab, setSelectedTab] = useState("all");

  const getTodoList = () => {
    const todoListLocalStorage: ITodo[] = JSON.parse(
      localStorage.getItem("todoList") || "[]"
    );
    return todoListLocalStorage;
  };

  const [todoList, setTodoList] = useState<ITodo[]>(getTodoList());

  const initialTodo: ITodo = {
    id: "",
    task: "",
    completed: false,
  };

  const [todo, setTodo] = useState<ITodo>(initialTodo);

  const handleTabChange = (e: any) => {
    setSelectedTab(e.target.ariaLabel);
  };

  const addTodo = () => {
    if (todo.task.trim() !== "") {
      const newTodo: ITodo = { ...todo, id: uuidv4() };
      // updates todoList state to render added task immediately
      setTodoList([...todoList, newTodo]);
      // updates localStorage for reload
      localStorage.setItem("todoList", JSON.stringify([...todoList, newTodo]));
      setTodo(initialTodo);
    }
  };

  const filteredTodoList = () => {
    switch (selectedTab) {
      case "active":
        return [...todoList.filter((todo: ITodo) => !todo.completed)];
      case "completed":
        return [...todoList.filter((todo: ITodo) => todo.completed)];

      default:
        return [...todoList];
    }
  };

  const handleCompletingTodo = (e: any, newTodo: ITodo) => {
    const updateList: ITodo[] = todoList.map((todo: ITodo) => {
      if (todo.id === newTodo.id) {
        return { ...todo, completed: e.target.checked };
      }
      return todo;
    });

    // updates todoList state to render added task immediately
    setTodoList([...updateList]);
    // updates localStorage for reload
    localStorage.setItem("todoList", JSON.stringify([...updateList]));
  };

  const deleteTodo = (newTodo: ITodo) => {
    const updateList: ITodo[] = todoList.filter((todo: ITodo) => 
      todo.id !== newTodo.id
    );
    // updates todoList state to render added task immediately
    setTodoList([...updateList]);
    // updates localStorage for reload
    localStorage.setItem("todoList", JSON.stringify([...updateList]));
  }

  const deleteAllTodo = () => {
    // updates todoList state to render added task immediately
    setTodoList([...todoList.filter((todo: ITodo) => !todo.completed)]);
    // updates localStorage for reload
    localStorage.setItem(
      "todoList",
      JSON.stringify([...todoList.filter((todo: ITodo) => !todo.completed)])
    );
  }

  const showDeleteIcon = () => {
    return selectedTab === 'completed'
  }
  const showDeleteAllButton = () => {
    return selectedTab === 'completed' && !!todoList.filter((todo: ITodo) => todo.completed).length
  }

  return (
    <div>
      <Tabs selectedTab={selectedTab} handleTabChange={handleTabChange} />
      {selectedTab !== "completed" && (
        <TodoForm todo={todo} setTodo={setTodo} addTodo={addTodo} />
      )}
      <TodoList
        todoList={filteredTodoList()}
        handleCompletingTodo={handleCompletingTodo}
        deleteTodo={deleteTodo}
        deleteAllTodo={deleteAllTodo}
        showDeleteIcon={showDeleteIcon}
        showDeleteAllButton={showDeleteAllButton}
      />
    </div>
  );
};

export default Todo;
