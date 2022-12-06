import React from "react";
import {TbTrashX} from "react-icons/tb";

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
        <li>
            <input type='checkbox' id='checkbox' checked={status === 'completed'} onChange={handleChange}></input>
            <label htmlFor='checkbox'>{content}</label>
            <button onClick={handleDelete}><TbTrashX /></button>
        </li>
    )
}