interface ISimilarFilms {
    id: number,
    kinopoiskId: number,
    similarFilmId: number,
}

export interface ISimilar {
    id: number,
    filmId: number,
    nameRu: string,
    nameEng: string | null,
    nameOriginal: string,
    posterUrl: string,
    posterUrlPreview: string,
    similarFilmId: number | null
    SimilarFilms: ISimilarFilms
}