import React, { FC } from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import MyButton from '../UI/Button/MyButton'
import FooterLinks from './footerLinks/FooterLinks'
import { LinkFooter } from '../../types/footerLinks'
import ButtonDevice from './buttonDevice/ButtonDevice'

const aboutUsLinks: LinkFooter[] = [
    { href: "https://corp.ivi.ru/", name: "О компании" },
    { href: "https://corp.ivi.ru/career/#career-vacancy-block", name: "Вакансии" },
    { href: "https://www.ivi.ru/pages/beta", name: "Программа бета-тестирования" },
    { href: "https://www.ivi.ru/info/partners", name: "Информация для партнёров" },
    { href: "https://corp.ivi.ru/advertisers/", name: "Размещение рекламы" },
    { href: "https://www.ivi.ru/info/agreement", name: "Пользовательское соглашение" },
    { href: "https://www.ivi.ru/info/confidential", name: "Политика конфиденциальности" },
    { href: "https://www.ivi.ru/info/goryachaya-liniya-komplaens", name: "Комплаенс" }
]

const sectionsLinks: LinkFooter[] = [
    { href: "https://www.ivi.ru/", name: "Мой Иви" },
    { href: "https://www.ivi.ru/new", name: "Что нового" },
    { href: "https://www.ivi.ru/movies", name: "Фильмы" },
    { href: "https://www.ivi.ru/series", name: "Сериалы" },
    { href: "https://www.ivi.ru/animation", name: "Мультфильмы" },
    { href: "https://www.ivi.ru/tvplus", name: "TV+" },
    { href: "https://www.ivi.ru/goodmovies", name: "Что посмотреть" },
]

const Footer: FC = () => {
    return (
        <footer>
            <div className='iviFooter__container'>
                <div className='iviFooter__container-inner'>
                    <div className='iviFooter__content'>
                        <div className='iviFooter__column'>
                            <FooterLinks title='О нас' links={aboutUsLinks} />
                        </div>
                        <div className='iviFooter__column'>
                            <FooterLinks title='Разделы' links={sectionsLinks} />
                            <div className='iviFooter__certificateLinkWrapper'>
                                <a className='iviFooter__certificateLink' href='https://www.ivi.ru/cert'>Активация сертификата</a>
                            </div>
                        </div>
                        <div className='iviFooter__column'>
                            <span className='iviFooter__title'>Служба поддержки</span>
                            <div className='iviFooter__description'>
                                <span>Мы всегда готовы вам помочь.</span>
                                <span>Наши операторы онлайн 24/7</span>
                            </div>
                            <div className='iviFooter__support'>


                            </div>
                        </div>
                        <div className='iviFooter__column'>
                            <div className='footerWidget'>
                                <div className='footerWidget__iconSection'>
                                    <div className='nbl-icon'>
                                    </div>
                                </div>
                                <div className='footerWidget__text'>
                                    Смотрите фильмы, сериалы и мультфильмы без рекламы
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='iviFooter__content'>
                        <div className='iviFooter__column iviFooter__column_wide'>
                            <div className='iviFooter__stores'>
                                <ButtonDevice imgHref='https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/appleLogo.svg' title='App Store' from='Загрузить в' href='https://go.onelink.me/app/devicesiOS'/>
                                <ButtonDevice imgHref='https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/googlePlayLogo.svg' title='Google Play' from='Доступно в' href='https://go.onelink.me/app/devicesAndroid'/>
                                <ButtonDevice imgHref='https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/appleLogo.svg' title='Smart TV' from='Смотреть' href='https://www.ivi.ru/pages/tvsmart'/>

                            </div>
                            <div className='iviFooter__copyrights'>
                                <div className='class="iviFooter__copyrightsSite"'>
                                    © 2023 ООО «Иви.ру»
                                </div>
                                <div>
                                HBO ® and related service marks are the property of Home Box Office, Inc
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer