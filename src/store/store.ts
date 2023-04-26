import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { moviesAPI } from "../services/MoviesService";
import moviesTop10Slice from "./moviesTop10/moviesTop10Slice";
import newMoviesSlice from "./newMovies/newMoviesSlice"

const rootReducer = combineReducers({
    moviesTop10Slice,
    newMoviesSlice,
    [moviesAPI.reducerPath]: moviesAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(moviesAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']