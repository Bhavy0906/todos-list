import React from 'react'
import {useState} from 'react';

export default function AddTodo(props) {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description can not be blank!")
        } else{
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }

    return (
        <div className='container'>
            <h3 className = "my-3">Add a To-Do</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">To-Do Title</label>
                    <input type="test" className="form-control" value = {title} onChange = {(e) => setTitle(e.target.value)} id="title" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">To-Do Description</label>
                    <input type="text" className="form-control" value = {desc} onChange = {(e) => setDesc(e.target.value)} id="desc"/>
                </div>
                <button type="submit" className="btn btn-success btn-sm">Submit</button>
            </form>
        </div>
    )
}
