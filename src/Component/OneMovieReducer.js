const defaultState = {
    movie: [],
}

export const oneMovieReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET":
            return {...state, movie: action.payload}
        default:
            return state;
    }
}