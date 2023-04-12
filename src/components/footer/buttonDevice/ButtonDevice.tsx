import { FC } from "react";
import './ButtonDevice.scss'

interface ButtonDeviceProps {
    href: string,
    imgHref: string,
    from: string,
    title: string
}

const ButtonDevice: FC<ButtonDeviceProps> = ({from, href, imgHref, title}) => {
    return (
        <a className="buttonDevice" href={href}>
            <img src={imgHref}/>
            <div className="buttonDevice__textBlock">
                <div className="buttonDevice__preamble">{from}</div>
                <div className="buttonDevice__caption">{title}</div>
            </div>
        </a>
    )
}

export default ButtonDevice