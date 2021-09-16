import React from "react";
import Footer from "../Footer";
import Todo from "../todo/Todo";
import "./TodoPage.css";

interface Props {}

const TodoPage = (props: Props) => {
  return (
    <div className="container">
      <div style= {{display: 'flex', flexDirection: 'column'}}>
        <span className="heading">#todo</span>
        <Todo />
      </div>
      <Footer />
    </div>
  );
};

export default TodoPage;
