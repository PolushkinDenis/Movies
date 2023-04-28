import { IBudget } from "./IBudget"
import { ICountry } from "./ICountry"
import { IPerson } from "./IPerson"
import { ISimilar } from "./ISimilar"
import { ITrailers } from "./ITrailers"

 interface ICurrentStaff {
    professionText: string,
    professionKey: string
    person: IPerson
}

interface CurrentFilm {
    id: number,
    kinopoiskId: number,
    nameRu: string,
    nameOriginal: string,
    posterUrl: string,
    posterUrlPreview: string,
    coverUrl: string,
    logoUrl: string,
    ratingKinopoisk: string,
    ratingKinopoiskVoteCount: string,
    year: string,
    filmLength: string,
    slogan: string,
    shortDescription: string,
    type: string,
    ratimgMpaa: string,
    ratingAgeLimits: string,
}

export interface IMovieAbout {
    currentFilm: CurrentFilm,
    budget: IBudget[],
    countries: ICountry[],
    similar: ISimilar[],
    trailers: ITrailers[],
    currentStaff: ICurrentStaff[],
}