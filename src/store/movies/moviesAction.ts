import axios from "axios";
import { IMovies } from "../../types/IMovies";
import { AppDispatch } from "../store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { movies } from "./moviesSlice";
import { IGenresMovies } from "../../types/IGenresMovies";
import { ICountry } from "../../types/ICountry";
import { IPersonFinded } from "../../types/IPerson";



const creatingUrl = (activeGenres: IGenresMovies[], activeCountries: ICountry[], rangeValue: number, evaluationsValue: number, searchDirectorСhoice: IPersonFinded, searchActorСhoice: IPersonFinded): string => {
    let url = ''
    console.log(activeGenres)
    for (let filter of activeGenres) {
        url = url + "&genreId=" + filter.id
    }
    for (let filter of activeCountries) {
        url = url + "&countryId=" + filter.id
    }
    url += `&ratingKinopoisk=${rangeValue}`
    url += `&ratingKinopoiskVoteCount=${evaluationsValue}`
    if(searchDirectorСhoice.personId !== -1) {
        url += `&DIRECTOR=${searchDirectorСhoice.personId}`
    }
    if(searchActorСhoice.personId !== -1) {
        url += `&ACTOR=${searchActorСhoice.personId}`
    }
    console.log(url)
   return url
}

export const fetchMovies = (activeGenres: IGenresMovies[], activeCountries: ICountry[], rangeValue: number, evaluationsValue: number, searchDirectorСhoice: IPersonFinded, searchActorСhoice: IPersonFinded ) => async (dispatch: AppDispatch) => {
    const url = creatingUrl(activeGenres, activeCountries, rangeValue, evaluationsValue, searchDirectorСhoice, searchActorСhoice)
    try {
        dispatch(movies.actions.moviesFetching());
        const response = await axios.get<IMovies>(
            `http://localhost:8000/api/movies/filters?page=0&size=35${url}`
        );
        dispatch(movies.actions.moviesFetchingSuccess(response.data.rows));
    } catch (e: any) {
        dispatch(movies.actions.moviesFetchingError(e.message));
    }
};

export const getMoreMovies = (activeGenres: IGenresMovies[], activeCountries: ICountry[], rangeValue:number, evaluationsValue: number, searchDirectorСhoice: IPersonFinded, searchActorСhoice: IPersonFinded, page: number) => async (dispatch: AppDispatch) => {
    const url = creatingUrl(activeGenres, activeCountries, rangeValue, evaluationsValue, searchDirectorСhoice, searchActorСhoice)
    try {
        dispatch(movies.actions.moviesFetching());
        const response = await axios.get<IMovies>(
            `http://localhost:8000/api/movies/filters?page=${page}&size=35${url}`
        );
        dispatch(movies.actions.moviesGetMoreSuccess(response.data.rows));
    } catch (e: any) {
        dispatch(movies.actions.moviesFetchingError(e.message));
    }
};
