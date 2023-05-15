import { FC } from "react";
import './ButtonDevice.scss'
import { Link } from "react-router-dom";

interface ButtonDeviceProps {
    href: string,
    imgHref?: string,
    from?: string,
    title?: string,
    classes?: string;
}

const ButtonDevice: FC<ButtonDeviceProps> = ({ from, href, imgHref, title, classes }) => {
    return (
        <Link className={classes ? `buttonDevice ${classes}` : "buttonDevice"} to={href}>
            {imgHref && (
                <img src={imgHref} />
            )}
            {(from || title) && (
                <div className="buttonDevice__textBlock">
                    {from && (
                        <div className="buttonDevice__preamble">{from}</div>
                    )}
                    {title && (
                        <div className="buttonDevice__caption">{title}</div>
                    )}
                </div>
            )}
        </Link>
    )
}

export default ButtonDevice