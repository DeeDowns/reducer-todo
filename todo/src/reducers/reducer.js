

export const initialState = {
    todos:[
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        }
    ]

}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {todos: [...state.todos,  { item: action.payload, id: new Date(), completed:false }]}
        case 'TOGGLE_COMPLETED':
            // return { todos: [...state.todos, {completed: !action.completed}]}
            state.todos.map(item => {
                if(item.id === action.payload){
                    console.log(true)
                    console.log(item.id)
                    console.log(action.payload)
                    return {
                        todos: [...state.todos,
                        {completed: !item.completed}]
                    }
                } else {
                    console.log(false)
                    console.log(item.id)
                    console.log(action.payload)
                    return item
                }
            })
        default: 
        return state
    }
   
}