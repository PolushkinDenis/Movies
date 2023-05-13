import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import SlimPoster from './SlimPoster';
import { formatFilmLength } from '../../helpers/formatFilmLength';
const testData = {
    "id": 1,
    "kinopoiskId": 1112447,
    "nameRu": "Профиль",
    "nameOriginal": "Profile",
    "ratingKinopoiskVoteCount": 75375,
    "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/1112447.jpg",
    "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/1112447.jpg",
    "coverUrl": "https://avatars.mds.yandex.net/get-ott/224348/2a00000183f2a48f60cd1c8b0cb7d12d0803/orig",
    "logoUrl": null,
    "ratingKinopoisk": "7.4",
    "year": 2018,
    "filmLength": "106",
    "type": "FILM",
    "genres": [
        {
            "id": 3,
            "genreNameRu": "детектив",
            "genreNameEng": "detective",
            "GenresFilms": {
                "id": 18,
                "filmId": 10,
                "genreId": 3,
                "createdAt": "2023-04-24T17:02:34.972Z",
                "updatedAt": "2023-04-24T17:02:34.972Z"
            }
        },
        {
            "id": 9,
            "genreNameRu": "триллер",
            "genreNameEng": "thriller",
            "GenresFilms": {
                "id": 17,
                "filmId": 10,
                "genreId": 9,
                "createdAt": "2023-04-24T17:02:34.949Z",
                "updatedAt": "2023-04-24T17:02:34.949Z"
            }
        }
    ],
    "countries": [
        {
            "id": 1,
            "countryNameRu": "Россия",
            "countryNameEng": "Russia",
            "CountriesFilms": {
                "id": 15,
                "filmId": 10,
                "countryId": 1,
                "createdAt": "2023-04-24T17:02:34.879Z",
                "updatedAt": "2023-04-24T17:02:34.879Z"
            }
        },
        {
            "id": 6,
            "countryNameRu": "США",
            "countryNameEng": "USA",
            "CountriesFilms": {
                "id": 13,
                "filmId": 10,
                "countryId": 6,
                "createdAt": "2023-04-24T17:02:34.834Z",
                "updatedAt": "2023-04-24T17:02:34.834Z"
            }
        },
        {
            "id": 7,
            "countryNameRu": "Великобритания",
            "countryNameEng": "Great Britain",
            "CountriesFilms": {
                "id": 14,
                "filmId": 10,
                "countryId": 7,
                "createdAt": "2023-04-24T17:02:34.860Z",
                "updatedAt": "2023-04-24T17:02:34.860Z"
            }
        },
        {
            "id": 8,
            "countryNameRu": "Кипр",
            "countryNameEng": "Cyprus",
            "CountriesFilms": {
                "id": 16,
                "filmId": 10,
                "countryId": 8,
                "createdAt": "2023-04-24T17:02:34.922Z",
                "updatedAt": "2023-04-24T17:02:34.922Z"
            }
        }
    ]
}

describe("SlimPoster component test", () => {
    test('If filmLength === 1 expected "минута"', () => {
        const result = formatFilmLength("1")
        expect(result).toEqual("минута")
    });
    test('If filmLength === 2 expected "минуты"', () => {
        const result = formatFilmLength("2")
        expect(result).toEqual("минуты")
    });
    test('If filmLength === 3 expected "минуты"', () => {
        const result = formatFilmLength("3")
        expect(result).toEqual("минуты")
    });
    test('If filmLength === 4 expected "минуты"', () => {
        const result = formatFilmLength("4")
        expect(result).toEqual("минуты")
    });
    test('If filmLength === 5 expected "минут"', () => {
        const result = formatFilmLength("5")
        expect(result).toEqual("минут")
    });
    test('If filmLength === 6 expected "минут"', () => {
        const result = formatFilmLength("6")
        expect(result).toEqual("минут")
    });
    test('If filmLength === 7 expected "минут"', () => {
        const result = formatFilmLength("7")
        expect(result).toEqual("минут")
    });
    test('If filmLength === 8 expected "минут"', () => {
        const result = formatFilmLength("8")
        expect(result).toEqual("минут")
    });
    test('If filmLength === 9 expected "минут"', () => {
        const result = formatFilmLength("9")
        expect(result).toEqual("минут")
    });
    test('If filmLength === 0 expected "минут"', () => {
        const result = formatFilmLength("10")
        expect(result).toEqual("минут")
    });
    test('If filmLength === 22 expected "минут"', () => {
        const result = formatFilmLength("22")
        expect(result).toEqual("минуты")
    });
    test('If filmLength === 116 expected "минут"', () => {
        const result = formatFilmLength("116")
        expect(result).toEqual("минут")
    });
})
    