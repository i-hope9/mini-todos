import React from "react";
import { v4 as uuidv4 } from "uuid";

import { useState } from "react";

export default function AddTodo({ onAdd }) {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim().length === 0) return;
    const newTodo = { id: uuidv4(), status: "active", content: content.trim() };
    onAdd(newTodo);
    setContent('');
  };

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Add Todo' value={content} onChange={handleChange}></input>
      <button>Add</button>
    </form>
  );
}
