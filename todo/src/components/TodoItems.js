import React from 'react'

function TodoItems(props) {
    const {item} = props
    console.log(item)

    return (
        <div>
            <h4>{item.item}</h4>
        </div>
    )
}

export default TodoItems