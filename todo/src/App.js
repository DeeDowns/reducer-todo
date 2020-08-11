import React, { useState, useReducer } from 'react';
import { initialState, reducer } from './reducers/reducer'
import './App.css';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'


function App() {
  const [inputText, setInputText] = useState('')
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log('state.todos',state.todos)
  // console.log(inputText)
  // console.log(dispatch)

  const handleChanges = event => {
    setInputText(event.target.value)
  }
 
  const handleSubmit = event => {
    event.preventDefault()
    dispatch ({ type: 'ADD_TODO', payload: inputText})
    setInputText('')
  }

  const toggleItem = id => {
    // console.log('test',id)
    return dispatch({ type: 'TOGGLE_COMPLETED', payload: id})
    
    // state.todos.map(task => {
    //   if(task.id === id){
    //     console.log(true)
    //     return dispatch({ type: 'TOGGLE_COMPLETED', payload: task.completed})
        
    //   } else { 
    //     console.log(false)
    //     return task
    //   }
    // })
    
  }

  // toggleItem(38929873589)

  return (
    <div className="App">
        <h1>Todo App</h1>
        <TodoForm inputText={inputText} handleChanges={handleChanges} handleSubmit={handleSubmit}/>
        <TodoList todoItems={state} toggleItem={toggleItem}/>
    </div>
  );
}

export default App;
