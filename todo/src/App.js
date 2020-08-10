import React, { useState, useReducer } from 'react';
import { initialState, reducer } from './reducers/reducer'
import './App.css';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'


function App() {
  const [inputText, setInputText] = useState('')
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state)



  return (
    <div className="App">
        <h1>Todo App</h1>
        <TodoForm />
        <TodoList todoItems={state}/>
    </div>
  );
}

export default App;
