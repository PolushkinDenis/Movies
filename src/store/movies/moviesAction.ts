import axios from "axios";
import { IMovies } from "../../types/IMovies";
import { AppDispatch } from "../store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { movies } from "./moviesSlice";
import { IGenresMovies } from "../../types/IGenresMovies";



const creatingUrl = (activeGenres: IGenresMovies[], activeCountries: IGenresMovies[]): string => {
    let url = ''
    for (let filter of activeGenres) {
        url = "&genreId=" + filter.id
    }
    for (let filter of activeCountries) {
        url = "&countryId =" + filter.id
    }
    console.log(url)
   return url
}

export const fetchMovies = (activeGenres: IGenresMovies[], activeCountries: IGenresMovies[]) => async (dispatch: AppDispatch) => {
    const url = creatingUrl(activeGenres, activeCountries)
    try {
        dispatch(movies.actions.moviesFetching());
        const response = await axios.get<IMovies>(
            `http://localhost:8000/api/movies/filters?page=0&size=35${url}`
        );
        dispatch(movies.actions.moviesFetchingSuccess(response.data.result));
    } catch (e: any) {
        dispatch(movies.actions.moviesFetchingError(e.message));
    }
};

export const getMoreMovies = (activeGenres: IGenresMovies[], activeCountries: IGenresMovies[], page: number) => async (dispatch: AppDispatch) => {
    const url = creatingUrl(activeGenres, activeCountries)
    try {
        dispatch(movies.actions.moviesFetching());
        const response = await axios.get<IMovies>(
            `http://localhost:8000/api/movies/filters?page=${page}&size=35${url}`
        );
        dispatch(movies.actions.moviesGetMoreSuccess(response.data.result));
    } catch (e: any) {
        dispatch(movies.actions.moviesFetchingError(e.message));
    }
};
