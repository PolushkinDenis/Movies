interface IGenresFilms {
    id: number,
    filmId: number,
    genreId: number,
}

export interface IGenre {
    id: number,
    genreNameRu: string,
    genreNameEng: string | null,
    GenresFilms?: IGenresFilms
}