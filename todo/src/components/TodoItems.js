import React from 'react'

function TodoItems(props) {
    const {todoItem} = props
    // console.log(todoItem)

    return (
        <div>
            <h4>{todoItem.item}</h4>
        </div>
    )
}

export default TodoItems