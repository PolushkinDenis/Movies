import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { IFilm } from "../../types/IFilm"

interface IMovie {
    movies: IFilm[],
}

interface NewMoviesState {
    slide: Array<IFilm[]>,
    isLoading: boolean,
    error: string,
}

const initialState: NewMoviesState = {
    slide: [],
    isLoading: false,
    error: ''
}

export const newMovies = createSlice({
    name: 'newMovies',
    initialState,
    reducers: {
        moviesFetching(state) {
            state.isLoading = true
        },
        moviesFetchingSuccess(state, action: PayloadAction<IFilm[]>) {
            state.isLoading = false;
            state.error = ''
            state.slide.push(action.payload)
        },
        moviesFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        }
    },
})

export default newMovies.reducer