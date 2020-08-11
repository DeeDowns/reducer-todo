

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
            return {todos: state.todos.map(item => {
                if(item.id === action.payload) {
                    return { ...item, completed: !item.completed }
                } else {
                    return item
                }
            })
        }
        default: 
        return state
    }
   
}