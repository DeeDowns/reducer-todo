import React from 'react'

function TodoForm() {


    return (
        <form>
            <label> Add To-Do Items
                <input
                    type='text'
                    name='inputText'
                >
                </input>
            </label>
            <button>Add task</button>
        </form>
    )
}

export default TodoForm