import React, {FC, useState} from "react";
import './TabBar.scss'
import my_ivi_img from '../../images/tabBar/my_ivi.png'
import catalog_img from '../../images/tabBar/catalog.png'
import search_img from '../../images/tabBar/search.png'
import tv_img from '../../images/tabBar/tv+.png'
import more_img from '../../images/tabBar/more.png'
import more_close_img from '../../images/tabBar/more_close.png'
import ButtonBar from "./buttonBar/ButtonBar";

const TabBar: FC = () => {
    const [more, setMore] = useState(false)
    return (
        <div className="tabBarPlate">
            <div className="nbl-tabBar">
                <ButtonBar classes="" type="link" href="/" imgHref={my_ivi_img} title="Мой Иви"/>
                <ButtonBar classes="" type="link" href="/" imgHref={catalog_img} title="Каталог"/>
                <ButtonBar classes="" type="link" href="/" imgHref={search_img} title="Поиск"/>
                <ButtonBar classes="" type="link" href="/" imgHref={tv_img} title="TV+"/>
                <ButtonBar classes="" type="div" onClick={e => setMore(!more)} href="/" imgHref={more ? more_close_img : more_img}  title="Еще"/>

                {/* <div onClick={e => setMore(!more)} className="nbl-tabBar__more"><ButtonBar classes="" href="/" imgHref={more ? more_close_img : more_img} title="Ещё"/></div> */}
            </div>
        </div>
    )
}

export default TabBar