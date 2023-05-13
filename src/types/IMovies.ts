import { IBudget } from "./IBudget";
import { ICountry } from "./ICountry";
// import { IFilm } from "./IFilm";
import { IGenre } from "./IGenre";
import { IPerson } from "./IPerson";

// export interface IFilm {
//     id: number,
//     nameRu: string,
//     nameOriginal: string | null,
//     posterUrl: string,
//     posterUrlPreview: string,
//     coverUrl: string | null,
//     logoUrl: string | null,
//     ratingKinopoisk: string,
//     year: number,
//     filmLength: string,
// }

export interface IMovie {
    id: number,
    kinopoiskId: number,
    nameRu: string,
    nameOriginal: string | null,
    ratingKinopoiskVoteCount: number,
    posterUrl: string,
    posterUrlPreview: string,
    coverUrl: string | null,
    logoUrl: string | null,
    ratingKinopoisk: string | null,
    year: number,
    filmLength: string | null,
    type: string,
    genres: IGenre[],
    countries: ICountry[]
}

export interface IMovies {
    count: number,
    rows: IMovie[]
}