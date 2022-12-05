export const addMovie = (movieObject) => {
    return {
        type: "ADD_MOVIE",
        payload: movieObject
    }
}