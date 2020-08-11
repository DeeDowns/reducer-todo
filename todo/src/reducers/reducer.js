

export const initialState = {
    todos:[
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        },
        {
            item: "One",
            completed: false,
            id: 12224345
        }
    ]

}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            // return [
            //     ...state, 
            //     { item: action.payload, id: new Date(), completed:false }
            //     ]
            return {todos: [...state.todos,  { item: action.payload, id: new Date(), completed:false }]}
        default: 
        return state
    }
   
}