import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css"

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState(readTodos);

  const handleAdd = (todo) => {
    setTodos(prev => [...prev, todo]);
  }

  const handleDelete = (deleted) => {
    setTodos(prev => prev.filter(todo => todo.id !== deleted.id));
  }

  const handleUpdate = (updated) => {
    setTodos(prev => prev.map(todo => todo.id === updated.id ? updated : todo));
  }


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);


  const filteredTodos = getFilteredItem(todos, filter);

  return (
    <>
    <section className={styles.container}>
      <ul className={styles.list}>
        {filteredTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} onUpdate={handleUpdate} onDelete={handleDelete}/>
          // <li key={todo.id}><Checkbox onChecked={handleChecked} todo={todo}/>{todo.content}<button onClick={handleDelete} value={todo.id}>삭제</button></li>
        ))}
      </ul>
      <AddTodo onAdd={handleAdd}></AddTodo> {/* 이벤트가 발생했을 때 나에게 알려줄 콜백 함수를 지정 */}
    </section>
    {/* <AddTodo todos={todos} setTodos={setTodos}></AddTodo> */}
    </>
  );
}

const readTodos = () => {
  const localTodos = localStorage.getItem('todos');
  return localTodos ? JSON.parse(localTodos) : [];
}

const getFilteredItem = (todos, filter) => {
  if (filter === 'all') {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}