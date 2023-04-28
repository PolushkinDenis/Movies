interface ICountriesFilms {
    id: number,
    filmId: number,
    countryId: number,
}

export interface ICountry {
    id: number,
    countryNameRu: string,
    countryNameEng: string,
    CountriesFilms?: ICountriesFilms
}