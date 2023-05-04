import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { IMovie, IMovies } from "../../types/IMovies";


interface NewMoviesState {
    movies: IMovie[],
    isLoading: boolean,
    error: string,
}

const initialState: NewMoviesState = {
    movies: [],
    isLoading: false,
    error: ''
}

export const movies = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        moviesFetching(state) {
            state.isLoading = true
        },
        moviesFetchingSuccess(state, action: PayloadAction<IMovie[]>) {
            state.isLoading = false;
            state.error = ''
            state.movies = action.payload
        },
        moviesGetMoreSuccess(state, action: PayloadAction<IMovie[]>) {
            state.isLoading = false;
            state.error = ''
            state.movies.push(...action.payload)
        },
        moviesFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        }
    },
})

export default movies.reducer