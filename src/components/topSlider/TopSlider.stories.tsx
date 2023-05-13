import TopSlider from "./TopSlider";
import '../../scss/reset.scss'
import '../../scss/app.scss'
import "../../scss/swiper.navigation.css"
import "../../scss/swiper.css"
import './TopSlider.scss'
import type { Meta, StoryObj, ComponentStory } from '@storybook/react';
import { IMovie } from "../../types/IMovies";
import { BrowserRouter } from "react-router-dom";

const movies: IMovie[] = [
    {
        "id": 1,
        "kinopoiskId": 4518018,
        "nameRu": "И снова здравствуйте!",
        "nameOriginal": null,
        "ratingKinopoiskVoteCount": 23348,
        "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/4518018.jpg",
        "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/4518018.jpg",
        "coverUrl": null,
        "logoUrl": null,
        "ratingKinopoisk": "7.3",
        "year": 2022,
        "filmLength": "30",
        "type": "TV_SERIES",
        "genres": [
            {
                "id": 1,
                "genreNameRu": "криминал",
                "genreNameEng": "crime",
                "GenresFilms": {
                    "id": 1,
                    "filmId": 1,
                    "genreId": 1,
                }
            },
            {
                "id": 2,
                "genreNameRu": "комедия",
                "genreNameEng": "comedy",
                "GenresFilms": {
                    "id": 2,
                    "filmId": 1,
                    "genreId": 2,
                }
            }
        ],
        "countries": [
            {
                "id": 1,
                "countryNameRu": "Россия",
                "countryNameEng": "Russia",
                "CountriesFilms": {
                    "id": 1,
                    "filmId": 1,
                    "countryId": 1,
                }
            }
        ]
    },
    {
        "id": 2,
        "kinopoiskId": 4476421,
        "nameRu": "Шпион",
        "nameOriginal": null,
        "ratingKinopoiskVoteCount": 3215,
        "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/4476421.jpg",
        "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/4476421.jpg",
        "coverUrl": "https://avatars.mds.yandex.net/get-ott/1534341/2a0000018713765bc2f07424089dbabf59d4/orig",
        "logoUrl": null,
        "ratingKinopoisk": "7.4",
        "year": 2022,
        "filmLength": "49",
        "type": "TV_SERIES",
        "genres": [
            {
                "id": 3,
                "genreNameRu": "детектив",
                "genreNameEng": "detective",
                "GenresFilms": {
                    "id": 3,
                    "filmId": 2,
                    "genreId": 3,
                }
            }
        ],
        "countries": [
            {
                "id": 1,
                "countryNameRu": "Россия",
                "countryNameEng": "Russia",
                "CountriesFilms": {
                    "id": 2,
                    "filmId": 2,
                    "countryId": 1,
                }
            }
        ]
    },
    {
        "id": 3,
        "kinopoiskId": 4484927,
        "nameRu": "Праведник",
        "nameOriginal": null,
        "ratingKinopoiskVoteCount": 52128,
        "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/4484927.jpg",
        "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/4484927.jpg",
        "coverUrl": null,
        "logoUrl": null,
        "ratingKinopoisk": "7.6",
        "year": 2022,
        "filmLength": "163",
        "type": "FILM",
        "genres": [
            {
                "id": 4,
                "genreNameRu": "драма",
                "genreNameEng": "drama",
                "GenresFilms": {
                    "id": 4,
                    "filmId": 3,
                    "genreId": 4,
                }
            },
            {
                "id": 5,
                "genreNameRu": "военный",
                "genreNameEng": "military",
                "GenresFilms": {
                    "id": 5,
                    "filmId": 3,
                    "genreId": 5,
                }
            },
            {
                "id": 6,
                "genreNameRu": "история",
                "genreNameEng": "story",
                "GenresFilms": {
                    "id": 6,
                    "filmId": 3,
                    "genreId": 6,
                }
            }
        ],
        "countries": [
            {
                "id": 1,
                "countryNameRu": "Россия",
                "countryNameEng": "Russia",
                "CountriesFilms": {
                    "id": 3,
                    "filmId": 3,
                    "countryId": 1,
                }
            }
        ]
    },
    {
        "id": 4,
        "kinopoiskId": 2000122,
        "nameRu": "Здоровый человек",
        "nameOriginal": null,
        "ratingKinopoiskVoteCount": 1750,
        "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/2000122.jpg",
        "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/2000122.jpg",
        "coverUrl": null,
        "logoUrl": null,
        "ratingKinopoisk": "7.4",
        "year": 2022,
        "filmLength": "101",
        "type": "FILM",
        "genres": [
            {
                "id": 4,
                "genreNameRu": "драма",
                "genreNameEng": "drama",
                "GenresFilms": {
                    "id": 7,
                    "filmId": 4,
                    "genreId": 4,
                }
            }
        ],
        "countries": [
            {
                "id": 1,
                "countryNameRu": "Россия",
                "countryNameEng": "Russia",
                "CountriesFilms": {
                    "id": 4,
                    "filmId": 4,
                    "countryId": 1,
                }
            }
        ]
    },
    {
        "id": 5,
        "kinopoiskId": 5003723,
        "nameRu": "Против всех",
        "nameOriginal": null,
        "ratingKinopoiskVoteCount": 26780,
        "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5003723.jpg",
        "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5003723.jpg",
        "coverUrl": null,
        "logoUrl": null,
        "ratingKinopoisk": "6.7",
        "year": 2022,
        "filmLength": "24",
        "type": "TV_SERIES",
        "genres": [
            {
                "id": 2,
                "genreNameRu": "комедия",
                "genreNameEng": "comedy",
                "GenresFilms": {
                    "id": 8,
                    "filmId": 5,
                    "genreId": 2,
                }
            }
        ],
        "countries": [
            {
                "id": 1,
                "countryNameRu": "Россия",
                "countryNameEng": "Russia",
                "CountriesFilms": {
                    "id": 5,
                    "filmId": 5,
                    "countryId": 1,
                }
            }
        ]
    },
    {
        "id": 6,
        "kinopoiskId": 5139807,
        "nameRu": "Семья",
        "nameOriginal": "Aile",
        "ratingKinopoiskVoteCount": 1504,
        "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5139807.jpg",
        "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5139807.jpg",
        "coverUrl": null,
        "logoUrl": null,
        "ratingKinopoisk": null,
        "year": 2023,
        "filmLength": null,
        "type": "TV_SERIES",
        "genres": [
            {
                "id": 1,
                "genreNameRu": "криминал",
                "genreNameEng": "crime",
                "GenresFilms": {
                    "id": 10,
                    "filmId": 6,
                    "genreId": 1,
                }
            },
            {
                "id": 4,
                "genreNameRu": "драма",
                "genreNameEng": "drama",
                "GenresFilms": {
                    "id": 9,
                    "filmId": 6,
                    "genreId": 4,
                }
            },
            {
                "id": 7,
                "genreNameRu": "мелодрама",
                "genreNameEng": "melodrama",
                "GenresFilms": {
                    "id": 11,
                    "filmId": 6,
                    "genreId": 7,
                }
            }
        ],
        "countries": [
            {
                "id": 2,
                "countryNameRu": "Турция",
                "countryNameEng": "Turkey",
                "CountriesFilms": {
                    "id": 6,
                    "filmId": 6,
                    "countryId": 2,
                }
            }
        ]
    },
    {
        "id": 7,
        "kinopoiskId": 1063008,
        "nameRu": "Марлоу",
        "nameOriginal": "Marlowe",
        "ratingKinopoiskVoteCount": 28963,
        "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/1063008.jpg",
        "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/1063008.jpg",
        "coverUrl": "https://avatars.mds.yandex.net/get-ott/2419418/2a00000186d998d3f27f614f9b5fb5ce053a/orig",
        "logoUrl": null,
        "ratingKinopoisk": "6.4",
        "year": 2022,
        "filmLength": "109",
        "type": "FILM",
        "genres": [
            {
                "id": 1,
                "genreNameRu": "криминал",
                "genreNameEng": "crime",
                "GenresFilms": {
                    "id": 12,
                    "filmId": 7,
                    "genreId": 1,
                }
            },
            {
                "id": 3,
                "genreNameRu": "детектив",
                "genreNameEng": "detective",
                "GenresFilms": {
                    "id": 13,
                    "filmId": 7,
                    "genreId": 3,
                }
            }
        ],
        "countries": [
            {
                "id": 3,
                "countryNameRu": "Франция",
                "countryNameEng": "France",
                "CountriesFilms": {
                    "id": 7,
                    "filmId": 7,
                    "countryId": 3,
                }
            },
            {
                "id": 4,
                "countryNameRu": "Испания",
                "countryNameEng": "Spain",
                "CountriesFilms": {
                    "id": 8,
                    "filmId": 7,
                    "countryId": 4,
                }
            },
            {
                "id": 5,
                "countryNameRu": "Ирландия",
                "countryNameEng": "Ireland",
                "CountriesFilms": {
                    "id": 9,
                    "filmId": 7,
                    "countryId": 5,
                }
            }
        ]
    },
    {
        "id": 8,
        "kinopoiskId": 1405508,
        "nameRu": "Операция «Фортуна»: Искусство побеждать",
        "nameOriginal": "Operation Fortune: Ruse de Guerre",
        "ratingKinopoiskVoteCount": 406868,
        "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/1405508.jpg",
        "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/1405508.jpg",
        "coverUrl": "https://avatars.mds.yandex.net/get-ott/2419418/2a00000186cad17177592c5d48cf7ceb2387/orig",
        "logoUrl": null,
        "ratingKinopoisk": "7.1",
        "year": 2022,
        "filmLength": "114",
        "type": "FILM",
        "genres": [
            {
                "id": 2,
                "genreNameRu": "комедия",
                "genreNameEng": "comedy",
                "GenresFilms": {
                    "id": 15,
                    "filmId": 8,
                    "genreId": 2,
                }
            },
            {
                "id": 8,
                "genreNameRu": "боевик",
                "genreNameEng": "action",
                "GenresFilms": {
                    "id": 14,
                    "filmId": 8,
                    "genreId": 8,
                }
            }
        ],
        "countries": [
            {
                "id": 6,
                "countryNameRu": "США",
                "countryNameEng": "USA",
                "CountriesFilms": {
                    "id": 10,
                    "filmId": 8,
                    "countryId": 6,
                }
            },
            {
                "id": 7,
                "countryNameRu": "Великобритания",
                "countryNameEng": "Great Britain",
                "CountriesFilms": {
                    "id": 11,
                    "filmId": 8,
                    "countryId": 7,
                }
            }
        ]
    },
    {
        "id": 9,
        "kinopoiskId": 5189350,
        "nameRu": "Непослушная",
        "nameOriginal": null,
        "ratingKinopoiskVoteCount": 37348,
        "posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/5189350.jpg",
        "posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/5189350.jpg",
        "coverUrl": null,
        "logoUrl": null,
        "ratingKinopoisk": "4.5",
        "year": 2023,
        "filmLength": "107",
        "type": "FILM",
        "genres": [
            {
                "id": 7,
                "genreNameRu": "мелодрама",
                "genreNameEng": "melodrama",
                "GenresFilms": {
                    "id": 16,
                    "filmId": 9,
                    "genreId": 7,
                }
            }
        ],
        "countries": [
            {
                "id": 1,
                "countryNameRu": "Россия",
                "countryNameEng": "Russia",
                "CountriesFilms": {
                    "id": 12,
                    "filmId": 9,
                    "countryId": 1,
                }
            }
        ]
    },
    {
        "id": 10,
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
                }
            }
        ]
    }
]

const meta: Meta<typeof TopSlider> = {
    title: 'TopSlider',
    component: TopSlider
};

export default meta;
type Story = StoryObj<typeof TopSlider>;

const Template: ComponentStory<typeof TopSlider> = (args) => {
    return (
        <BrowserRouter>
            <div className="top_slider">
                <TopSlider {...args} />
            </div>
        </BrowserRouter>
    )
}
export const Default = Template.bind({});

Default.args = {
    movies: movies
}

{/* <div style={{ background: "#100e19" }}><MyButton {...args} /></div>
export const Link = Template.bind({});
Link.args = {
    children: "Ссылка",
    classes: "nbl-button__primaryText nbl-button__linkItem"
}

export const Subscription: Story = {
    args: {
        children: "Смотреть 30 дней за 1 ₽",
        classes: "nbl-button__subscription"
    },
} */}
