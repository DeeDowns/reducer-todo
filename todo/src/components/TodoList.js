import React from 'react'
import TodoItems from './TodoItems'

function TodoList(props) {
    const todoItems = props.todoItems
    console.log(todoItems)
   

    return (
        <div>
            <h3>click to mark complete</h3>
           {todoItems.map(todoItem => {
               return (
                   <TodoItems todoItem={todoItem} key={todoItem.id} />
               )
            })}
            <button>click to clear</button>
        </div>
    )
}

export default TodoList