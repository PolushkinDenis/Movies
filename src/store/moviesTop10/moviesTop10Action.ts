import axios from "axios"
import { IMovies } from "../../types/IMovies"
import { AppDispatch } from "../store"
import { moviesTop10Slice } from "./moviesTop10Slice"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchMoviesTop10 = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(moviesTop10Slice.actions.moviesFetching())
        const response = await axios.get<IMovies>('http://localhost:8000/api/movies?size=10')
        dispatch(moviesTop10Slice.actions.moviesFetchingSuccess(response.data.rows))
    }
    catch (e: any) {
        dispatch(moviesTop10Slice.actions.moviesFetchingError(e.message))
    }
}