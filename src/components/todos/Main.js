import React from "react";
import TodoList from "../../features/todos/TodoList";
import Footer from "../../features/footer/Footer";
import Headers from "../../features/header/Headers";

export default function Main() {
  return (
    <main>
      <section>
        <h2>Todos</h2>
      </section>
      <div className="todoapp">
        <Headers />
        <TodoList />
        <Footer />
      </div>
    </main>
  );
}
