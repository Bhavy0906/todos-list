import React from 'react'
import TodoItem from './TodoItem'

export default function Todos(props) {
    let myStyle = {
        paddingBottom : "5%",
    }

    return (
        <div className='container' style = {myStyle}>
            <h3 className='my-3'>Todos List</h3>
            {props.todos.length === 0 ? <p>No Todos</p> : props.todos.map((todo) => <TodoItem todo={todo} key = {todo.sno} onDelete = {props.onDelete} onComplete = {props.onComplete} onUndo = {props.onUndo}/>)}
        </div>
    )
}
