import React from "react";
import TodoListItem from "./TodoListItem";

export default function TodoList() {
  const todos = [];
  // const renderedListItems = todos.map((todo) => {
  //   return <TodoListItem key={todo.id} {...todo} />;
  // });
  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
