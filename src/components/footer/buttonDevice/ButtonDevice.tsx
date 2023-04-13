import { FC } from "react";
import './ButtonDevice.scss'

interface ButtonDeviceProps {
    href: string,
    imgHref?: string,
    from?: string,
    title?: string,
    classes?: string;
}

const ButtonDevice: FC<ButtonDeviceProps> = ({ from, href, imgHref, title, classes }) => {
    return (
        <a className={classes ? `buttonDevice ${classes}` : "buttonDevice"} href={href}>
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
        </a>
    )
}

export default ButtonDevice