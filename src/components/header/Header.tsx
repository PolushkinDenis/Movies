import React, {FC} from 'react'
import { NavLink } from 'react-router-dom'


const Header: FC = () => {
    return (
        <div>
            <NavLink to='/'>Главная</NavLink>
            <NavLink to='/films'>Фильмы</NavLink>
        </div>
    )
}

export default Header