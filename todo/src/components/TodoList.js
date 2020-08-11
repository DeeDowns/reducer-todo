import React from 'react'
import TodoItems from './TodoItems'

function TodoList(props) {
    const { todoItems, toggleItem } = props
    // console.log(todoItems)
    // console.log(toggleItem)
   

    return (
        <div>
            <h3>click to mark complete</h3>
           {todoItems.todos.map(todoItem => {
               return (
                   <TodoItems todoItem={todoItem} key={todoItem.id} toggleItem={toggleItem} />
               )
            })}
            <button>click to clear</button>
        </div>
    )
}

export default TodoList