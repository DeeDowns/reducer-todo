import React from 'react'
import Todo from './TodoItems'

function TodoList(props) {
    const {todoData} = props
    console.log(todoData.item)

    return (
        <div>
            <h3>click to mark complete</h3>
            {
            todoData.map(item => <Todo item={item} key={item.id} />)   
            }
            <button>click to clear</button>
        </div>
    )
}

export default TodoList