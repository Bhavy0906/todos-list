import './App.css';
import Header from "./Components/Header";
import AddTodo from "./Components/AddTodo";
import Todos from './Components/Todos'
import About from './Components/About'
import Footer from './Components/Footer'
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  let initTodos;
  let initCompletedTodos;
  let initCurrentTodos;
  if (localStorage.getItem("currentTodos") === null) {
    initCurrentTodos = [];
  } else {
    initCurrentTodos = JSON.parse(localStorage.getItem("currentTodos"));
  }
  if (localStorage.getItem("completedTodos") === null) {
    initCompletedTodos = [];
  } else {
    initCompletedTodos = JSON.parse(localStorage.getItem("completedTodos"));
  }
  const onDelete = (todo) => {
    setCompletedTodos(completedTodos.filter(e => e !== todo));
    setCurrentTodos(currentTodos.filter(e => e !== todo));
  }

  const onComplete = (todo) => {
    currentTodos.splice(currentTodos.indexOf(todo),1);
    setCurrentTodos([...currentTodos]);
    setCompletedTodos([...completedTodos, todo]);
  }
  
  const onUndo = (todo) => {
    completedTodos.splice(completedTodos.indexOf(todo),1);
    setCurrentTodos([...currentTodos, todo]);
    setCompletedTodos([...completedTodos]);
  }

  const addTodo = (title, desc) => {
    const newTodo = {
      sno: currentTodos.length + 1,
      title: title,
      desc: desc
    }
    setCurrentTodos([...currentTodos, newTodo]);
  }

  const [currentTodos, setCurrentTodos] = useState(initCurrentTodos);
  const [completedTodos, setCompletedTodos] = useState(initCompletedTodos);
  useEffect(() => {
    localStorage.setItem("currentTodos", JSON.stringify(currentTodos))
  }, [currentTodos])
  useEffect(() => {
    localStorage.setItem("completedTodos", JSON.stringify(completedTodos))
  }, [completedTodos])
  return (
    <>
      <Router>
        <Header title='Todos List' searchBar={false} />
        <Routes>
          <Route path='/' element = {
                  <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={[...currentTodos, ...completedTodos]} onDelete={onDelete} onComplete = {onComplete} onUndo = {onUndo} />
                  </>
          } />
          <Route path='about' element = {<About />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
