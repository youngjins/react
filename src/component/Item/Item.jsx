import React, {useState} from 'react';
import {BsFillTrash3Fill} from 'react-icons/bs';


export default function Item({item, onUpdate, onDelete}) {
    const {text, status} = item;

    const handleChange = (e) => {
        const status = e.target.checked ? 'completed' : 'active';
        onUpdate({...item, status:status})
    }
    const handleDelete = ()=> onDelete(item);

    return (
        <li>
            <input
                type='checkbox'
                id='checkbox'
                checked={status === 'completed'}
                onChange={handleChange}
            />
            <label htmlFor='checkbox'>{text}</label>
            <button onClick={handleDelete}><BsFillTrash3Fill /></button>
        </li>
    )
}