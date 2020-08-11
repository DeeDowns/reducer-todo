import React from 'react'

function TodoForm(props) {
    const { inputText, handleChanges, handleSubmit } = props
    console.log(props)



    return (
        <form>
            <label> Add To-Do Items
                <input
                    type='text'
                    name='inputText'
                    value={inputText}
                    onChange={handleChanges}
                >
                </input>
            </label>
            <button onClick={handleSubmit}> Add task</button>
        </form>
    )
}

export default TodoForm