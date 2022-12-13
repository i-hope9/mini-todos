import React from "react";
import {TbTrashX} from "react-icons/tb";
import styles from "./Todo.module.css"

export default function Todo( {todo, onUpdate, onDelete} ) {
    const {content, status} = todo;
    const handleChange = (e) => {
        const status = e.target.checked ? 'completed' : 'active';
        onUpdate( {...todo, status} );
    }

    const handleDelete = () => {
        onDelete(todo);
    }
    return (
        <li className={styles.todo}>
            <input className={styles.checkbox} type='checkbox' id='checkbox' checked={status === 'completed'} onChange={handleChange}></input>
            <label className={styles.text} htmlFor='checkbox'>{content}</label>
            <span className={styles.icon}><button className={styles.button} onClick={handleDelete}><TbTrashX /></button></span>
        </li>
    )
}