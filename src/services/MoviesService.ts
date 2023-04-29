import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IMovies } from '../types/IMovies'
// import { IMovie } from '../types/IMovie'
import { IQuery } from '../types/IQuery'
import { IPerson, IPersonAll, IPersonFindByName } from '../types/IPerson'
import { IPersonsAbout } from '../types/IPersonsAbout'


export const moviesAPI = createApi({
    reducerPath: 'moviesAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api' }),
    endpoints: (build) => ({
        fetchMoviesTop10: build.query<IMovies, number>({
            query: (size: number = 10) => ({
                url: `/movies?size=${size}`
            })
        }),
        getMoviesForSlider1: build.query<IMovies, string>({
            query: (url: string) => ({
                url: url
            })
        }),
        getNewMovies: build.query<IMovies, string>({
            query: (year: string) => ({
                url: `/movies/filters?&size=5&year=2022`
            })
        }),
        getAllPerson: build.query<IPersonAll, string>({
            query: (url: string) => ({
                url: `/persons?size=20`
            })
        }),
        getPersonIdByName: build.query<IPersonFindByName, string | undefined>({
            query: (name: string | undefined) => ({
                url: `/persons/search?name=${name}&profession`
            })
        }),
        getPersonById: build.query<IPersonsAbout, number>({
            query: (id: number) => ({
                url: `/persons/about/${id}`
            })
        }),
    })

})