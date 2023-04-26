export interface IFilm {
    id: number,
    kinopoiskId: number,
    nameRu: string,
    nameOriginal: string,
    posterUrl: string,
    posterUrlPreview: string,
    coverUrl: string,
    logoUrl: string,
    reviewsCount: string,
    ratingGoodReview: string,
    ratingGoodReviewVoteCount: string,
    ratingKinopoisk: string,
    ratingKinopoiskVoteCount: string,
    ratingFilmCritics: string,
    ratingFilmCriticsVoteCount: string,
    year: number,
    filmLength: string,
    slogan: string,
    description: string,
    shortDescription: string,
    type: string,
    ratimgMpaa: string | null,
    ratingAgeLimits: string,
    serial: boolean,
    shortFilm: boolean
    createdAt: string,
    updatedAt: string
}