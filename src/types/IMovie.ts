import { IBudget } from "./IBudget";
import { ICountry } from "./ICountry";
import { IFilm } from "./IFilm";
import { IGenre } from "./IGenre";
import { IStaff } from "./IStaff";

export interface IMovie {
    film: IFilm,
    countries: ICountry[],
    genre: IGenre[],
    budget: IBudget[],
    staff: IStaff[],
}