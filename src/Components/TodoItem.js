import React from 'react'
import './completed.css'

export default function TodoItem({ todo, onDelete, onComplete, onUndo }) {
    return (
        <div>
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button className='btn btn-danger btn-sm' onClick={() => onDelete(todo)}>Delete</button>
            <button className='btn btn-success btn-sm mx-2 complete-btn' onClick={(e) => {
                e.target.parentElement.classList.toggle('complete')
                let value = e.target.innerHTML;
                if (value === 'Completed') {
                    onComplete(todo);
                    e.target.innerHTML = 'Undo';
                } else {
                    onUndo(todo);
                    e.target.innerHTML = 'Completed';
                }
            }}>Completed</button><hr />
        </div>
    )
}
