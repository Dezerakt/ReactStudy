const defaultState = {
    movies: [],
}

export const movieReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET":
            return {...state, movies: action.payload}
        default:
            return state;
    }
}