import React, { FC } from 'react'
import Carousel from '../UI/carousel/Carousel'
import PersonCard from '../personCard/PersonCard'
import { moviesAPI } from '../../services/MoviesService'
import { SplideSlide } from '@splidejs/react-splide'


const PersonSlider: FC = () => {
    const persons = moviesAPI.useGetAllPersonQuery("").data?.rows

    return (
        <Carousel perPage={7} perMove={7}>
            {persons?.map((person) => (
                <SplideSlide key={person.id}>
                    <PersonCard
                    id={person.personId}
                        name={person.nameRu}
                        image={person.posterUrl}
                        mainMoviesAmount={Number(person.hasAwards)}      
                    />
                </SplideSlide>
            ))}
        </Carousel>
    )
}

export default PersonSlider