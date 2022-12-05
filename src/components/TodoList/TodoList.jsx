import React from "react";
import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: "1", status: "active", content: "장보기" },
    { id: "2", status: "active", content: "공부하기" },
  ]);

  return (
    <section>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
    </section>
  );
}
