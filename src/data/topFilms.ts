import top_1 from '../images/top10/top_1.jpg'
import top_2 from '../images/top10/top_2.jpg'
import top_3 from '../images/top10/top_3.jpg'
import top_4 from '../images/top10/top_4.jpg'
import top_5 from '../images/top10/top_5.jpg'
import top_6 from '../images/top10/top_6.jpg'
import top_7 from '../images/top10/top_7.jpg'
import top_8 from '../images/top10/top_8.jpg'
import top_9 from '../images/top10/top_9.jpg'
import top_10 from '../images/top10/top_10.jpg'
import top_1_title from '../images/top10/top_1_title.png'
import top_2_title from '../images/top10/top_2_title.png'
import top_3_title from '../images/top10/top_3_title.png'
import top_4_title from '../images/top10/top_4_title.png'
import top_5_title from '../images/top10/top_5_title.png'
import top_6_title from '../images/top10/top_6_title.png'
import top_7_title from '../images/top10/top_7_title.png'
import top_8_title from '../images/top10/top_8_title.png'
import top_9_title from '../images/top10/top_9_title.png'
import top_10_title from '../images/top10/top_10_title.png'

export interface TopFilms {
    img: string,
    link: string,
    title: string,
    number: string
}

export const topFilms: TopFilms[] = [
    {img: top_1, link: `/film/${1}`, title: top_1_title, number: "https://solea-parent.dfs.ivi.ru/picture/bypass/number1.svg"},
    {img: top_2, link: `/film/${2}`, title: top_2_title, number: "https://solea-parent.dfs.ivi.ru/picture/bypass/number2.svg"},
    {img: top_3, link: `/film/${3}`, title: top_3_title, number: "https://solea-parent.dfs.ivi.ru/picture/bypass/number3.svg"},
    {img: top_4, link: `/film/${4}`, title: top_4_title, number: "https://solea-parent.dfs.ivi.ru/picture/bypass/number4.svg"},
    {img: top_5, link: `/film/${5}`, title: top_5_title, number: "https://solea-parent.dfs.ivi.ru/picture/bypass/number5.svg"},
    {img: top_6, link: `/film/${6}`, title: top_6_title, number: "https://solea-parent.dfs.ivi.ru/picture/bypass/number6.svg"},
    {img: top_7, link: `/film/${7}`, title: top_7_title, number: "https://solea-parent.dfs.ivi.ru/picture/bypass/number7.svg"},
    {img: top_8, link: `/film/${8}`, title: top_8_title, number: "https://solea-parent.dfs.ivi.ru/picture/bypass/number8.svg"},
    {img: top_9, link: `/film/${9}`, title: top_9_title, number: "https://solea-parent.dfs.ivi.ru/picture/bypass/number9.svg"},
    {img: top_10, link: `/film/${10}`, title: top_10_title, number: "https://solea-parent.dfs.ivi.ru/picture/bypass/number10.svg"},
]