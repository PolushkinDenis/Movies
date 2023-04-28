import {createSlice, PayloadAction} from "@reduxjs/toolkit"
// import { IFilm } from "../../types/IFilm"

interface IFilm {
    mivis: []
}

interface MoviesTop10State {
    movies: IFilm[],
    isLoading: boolean,
    error: string,
}

const initialState: MoviesTop10State = {
    movies: [],
    isLoading: false,
    error: ''
}

export const moviesTop10Slice = createSlice({
    name: 'moviesTop10',
    initialState,
    reducers: {
        moviesFetching(state) {
            state.isLoading = true
        },
        moviesFetchingSuccess(state, action: PayloadAction<IFilm[]>) {
            state.isLoading = false;
            state.error = ''
            state.movies = action.payload
        },
        moviesFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        }
    },
})

export default moviesTop10Slice.reducer