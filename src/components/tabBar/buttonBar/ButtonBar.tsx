import React, {FC} from "react";
import './ButtonBar.scss'
import { Link } from "react-router-dom";

interface ButtonBarProps {
    href: string,
    imgHref: string,
    title: string,
    classes: string
}

const ButtonBar: FC<ButtonBarProps> = ({href, imgHref, title, classes}) => {

    return (
        <Link className="nbl-tabBar__item" to={href}>
            <div className="nbl-tabBar__itemGlowImage"></div>
            <div className="nbl-tabBar__itemIcon"><img src={imgHref}/></div>
            <div className="nbl-tabBar__itemCaption">{title}</div>
        </Link>
    )
}

export default ButtonBar