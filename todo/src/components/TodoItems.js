import React from 'react'

function TodoItems(props) {
    const {todoItem, toggleItem} = props
    // console.log(todoItem)
    // console.log(toggleItem)

    return (
        <div onClick={() => toggleItem(todoItem.id)}> 
            <h4>{todoItem.item}</h4>
        </div>
    )
}

export default TodoItems