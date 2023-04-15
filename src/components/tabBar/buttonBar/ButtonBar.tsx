import React, { FC } from "react";
import './ButtonBar.scss'
import { Link } from "react-router-dom";



interface ButtonBarProps {
    type: "link" | "div",
    href: string,
    imgHref: string,
    title: string,
    classes: string,
    onClick?: React.MouseEventHandler
}

const ButtonBar: FC<ButtonBarProps> = ({ type, href, imgHref, title, classes, onClick }) => {

    return (
        <>
            {type === "link" ? (
                <Link className="nbl-tabBar__item" to={href}>
                    <div className="nbl-tabBar__itemGlowImage"></div>
                    <div className="nbl-tabBar__itemIcon"><img src={imgHref} /></div>
                    <div className="nbl-tabBar__itemCaption">{title}</div>
                </Link>
            ) : (
                <div onClick={onClick} className="nbl-tabBar__item">
                    <div className="nbl-tabBar__itemGlowImage"></div>
                    <div className="nbl-tabBar__itemIcon"><img src={imgHref} /></div>
                    <div className="nbl-tabBar__itemCaption">{title}</div>
                </div>
            )}

        </>

    )
}

export default ButtonBar