import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { IMovie } from "../../types/IMovies";

export interface SlideItem {
    movies: IMovie[],
    title: string
}

export interface NewMoviesState {
    slide: Array<SlideItem>,
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
        moviesFetchingSuccess(state, action: PayloadAction<SlideItem>) {
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