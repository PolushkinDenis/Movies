import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IMovies } from '../types/IMovies'
import { IMovie } from '../types/IMovie'
import { IQuery } from '../types/IQuery'


export const moviesAPI = createApi({
    reducerPath: 'moviesAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8000/api'}),
    endpoints: (build) => ({
        fetchMoviesTop10: build.query<IMovies, number>({
            query: (size: number = 10) => ({
                url: `/movies?size=${size}`        
            })
        }),
        getMovieById: build.query<IMovie[], number>({
            query: (id: number) => ({
                url: `/movies/${id}`        
            })
        }),
        getNewMovies: build.query<IMovies, string>({
            query: (year: string) => ({
                url: `/movies?size=5&field=nameRu&value=гол`        
            })
        })
    })

})