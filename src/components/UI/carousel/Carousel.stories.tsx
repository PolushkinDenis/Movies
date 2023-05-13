import Carousel from "./Carousel";
import './Carousel.scss'
import '../../../scss/reset.scss'
import '../../../scss/app.scss'
import PersonCard from '../../personCard/PersonCard'
import type { Meta, StoryObj, ComponentStory } from '@storybook/react';
import { SplideSlide } from "@splidejs/react-splide";
import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof Carousel> = {
    title: 'UI/Carousel',
    component: Carousel
};

export default meta;

const persons = [
    {
        "id": 1,
        "personId": 4518313,
        "nameRu": "Егор Чичканов",
        "nameEng": null,
        "sex": "MALE",
        "posterUrl": "https://kinopoiskapiunofficial.tech/images/actor_posters/kp/4518313.jpg",
        "birthday": "1985-06-15",
        "death": null,
        "age": 36,
        "birthPlace": null,
        "deathPlace": null,
        "hasAwards": "0",
        "profession": "Сценарист, Режиссер, Монтажер",
        "createdAt": "2023-04-24T16:57:52.005Z",
        "updatedAt": "2023-04-24T16:57:52.005Z"
    },
    {
        "id": 2,
        "personId": 476576,
        "nameRu": "Андрей Мерзликин",
        "nameEng": null,
        "sex": "MALE",
        "posterUrl": "https://kinopoiskapiunofficial.tech/images/actor_posters/kp/476576.jpg",
        "birthday": "1973-03-24",
        "death": null,
        "age": 49,
        "birthPlace": null,
        "deathPlace": null,
        "hasAwards": "1",
        "profession": "Актер, Озвучка, Режиссер",
        "createdAt": "2023-04-24T16:57:52.386Z",
        "updatedAt": "2023-04-24T16:57:52.386Z"
    },
    {
        "id": 3,
        "personId": 4929046,
        "nameRu": "Денис Власенко",
        "nameEng": null,
        "sex": "MALE",
        "posterUrl": "https://kinopoiskapiunofficial.tech/images/actor_posters/kp/4929046.jpg",
        "birthday": "1997-12-18",
        "death": null,
        "age": 24,
        "birthPlace": null,
        "deathPlace": null,
        "hasAwards": "0",
        "profession": "Актер",
        "createdAt": "2023-04-24T16:57:52.751Z",
        "updatedAt": "2023-04-24T16:57:52.751Z"
    },
    {
        "id": 4,
        "personId": 251184,
        "nameRu": "Алексей Серебряков",
        "nameEng": null,
        "sex": "MALE",
        "posterUrl": "https://kinopoiskapiunofficial.tech/images/actor_posters/kp/251184.jpg",
        "birthday": "1964-07-03",
        "death": null,
        "age": 57,
        "birthPlace": null,
        "deathPlace": null,
        "hasAwards": "1",
        "profession": "Актер, Озвучка",
        "createdAt": "2023-04-24T16:57:53.132Z",
        "updatedAt": "2023-04-24T16:57:53.132Z"
    },
    {
        "id": 5,
        "personId": 2294822,
        "nameRu": "Павел Чинарёв",
        "nameEng": null,
        "sex": "MALE",
        "posterUrl": "https://kinopoiskapiunofficial.tech/images/actor_posters/kp/2294822.jpg",
        "birthday": "1986-05-23",
        "death": null,
        "age": 36,
        "birthPlace": null,
        "deathPlace": null,
        "hasAwards": "1",
        "profession": "Актер",
        "createdAt": "2023-04-24T16:57:53.485Z",
        "updatedAt": "2023-04-24T16:57:53.485Z"
    },
    {
        "id": 6,
        "personId": 3007380,
        "nameRu": "Аглая Тарасова",
        "nameEng": null,
        "sex": "FEMALE",
        "posterUrl": "https://kinopoiskapiunofficial.tech/images/actor_posters/kp/3007380.jpg",
        "birthday": "1994-04-18",
        "death": null,
        "age": 28,
        "birthPlace": null,
        "deathPlace": null,
        "hasAwards": "1",
        "profession": "Актриса",
        "createdAt": "2023-04-24T16:57:53.841Z",
        "updatedAt": "2023-04-24T16:57:53.841Z"
    },
    {
        "id": 7,
        "personId": 231571,
        "nameRu": "Любовь Толкалина",
        "nameEng": null,
        "sex": "FEMALE",
        "posterUrl": "https://kinopoiskapiunofficial.tech/images/actor_posters/kp/231571.jpg",
        "birthday": "1978-02-16",
        "death": null,
        "age": 44,
        "birthPlace": null,
        "deathPlace": null,
        "hasAwards": "0",
        "profession": "Актриса, Озвучка",
        "createdAt": "2023-04-24T16:57:54.197Z",
        "updatedAt": "2023-04-24T16:57:54.197Z"
    }
]

const Template: ComponentStory<typeof Carousel> = (args) => (
    <BrowserRouter>
        <Carousel {...args} >
            {persons?.map((person) => (
                <SplideSlide key={person.id}>
                    <PersonCard
                        id={person.personId}
                        name={person.nameRu}
                        image={person.posterUrl}
                        mainMoviesAmount={Number("23")}
                    />
                </SplideSlide>
            ))}
        </Carousel>
    </BrowserRouter>
)
export const Default = Template.bind({});
Default.args = {
    perPage: 7,
    perMove: 7
}