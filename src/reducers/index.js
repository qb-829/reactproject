const addMovieReducer = (state = [], action) => {
    switch(action.type) {
        case "ADD_MOVIE": {
            return [...state, 
                {
                title: action.payload.title,
                favorite: action.payload.favorite
                }
            ]
        }
        default:
            return state;    
    
    }
}
export default addMovieReducer;