import React from 'react'
import './TodoItems.css'

function TodoItems(props) {
    const {todoItem, toggleItem} = props
    // console.log(todoItem)
    // console.log(toggleItem)

    return (
        <div onClick={() => toggleItem(todoItem.id)}
        className={todoItem.completed ? 'completed' : ''}> 
            <h4>{todoItem.item}</h4>
        </div>
    )
}

export default TodoItems