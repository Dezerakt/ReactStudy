const defaultState = {
    searchmovie: [],
}

export const searchMovieReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET":
            return {...state, searchmovie: action.payload}
        default:
            return state;
    }
}