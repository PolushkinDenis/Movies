import { IPerson } from "./IPerson";

interface IPersonsFilms {
    id: number,
    year: number,
    nameRu: string,
    nameOriginal: string,
    posterUrl: string,
    posterUrlPreview: string,
    coverUrl: string | null,
    logoUrl: string | null,
    ratingKinopoisk: string,
}

export interface IPersonsAbout {
    person: IPerson,
    films: IPersonsFilms[]
}