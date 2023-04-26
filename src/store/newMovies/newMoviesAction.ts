import axios from "axios"
import { IMovies } from "../../types/IMovies"
import { AppDispatch } from "../store"
import { newMovies } from "./newMoviesSlice"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchNewMovies = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(newMovies.actions.moviesFetching())
        const response = await axios.get<IMovies>('http://localhost:5000/api/movies?size=5&field=nameRu&value=гол')
        dispatch(newMovies.actions.moviesFetchingSuccess(response.data.rows))
    }
    catch (e: any) {
        dispatch(newMovies.actions.moviesFetchingError(e.message))
    }
}