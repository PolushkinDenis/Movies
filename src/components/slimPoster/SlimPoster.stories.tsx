import SlimPoster from "./SlimPoster";
import './SlimPoster.scss'
import '../../scss/reset.scss'
import '../../scss/app.scss'
import type { Meta, StoryObj, ComponentStory } from '@storybook/react';
import { BrowserRouter } from "react-router-dom";

const movie = {
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
                "createdAt": "2023-04-24T16:57:50.710Z",
                "updatedAt": "2023-04-24T16:57:50.710Z"
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
                "createdAt": "2023-04-24T16:57:50.732Z",
                "updatedAt": "2023-04-24T16:57:50.732Z"
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
                "createdAt": "2023-04-24T16:57:50.681Z",
                "updatedAt": "2023-04-24T16:57:50.681Z"
            }
        }
    ]
}

const meta: Meta<typeof SlimPoster> = {
    title: 'SlimPoster',
    component: SlimPoster
};

export default meta;
type Story = StoryObj<typeof SlimPoster>;

const Template: ComponentStory<typeof SlimPoster> = (args) => {
    return (
        <BrowserRouter>
            <SlimPoster {...args} />
        </BrowserRouter>
    )
}
export const Default = Template.bind({});

Default.args = {
    movie: movie
}