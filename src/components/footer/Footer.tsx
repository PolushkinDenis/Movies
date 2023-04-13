import React, { FC, useState } from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import MyButton from '../UI/Button/MyButton'
import all_device_img from '../../images/all_device.png'
import mail_img from '../../images/mail.png'
import phone_img from '../../images/phone.png'
import widget_img from '../../images/widget.png'
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
    const [phone, setPhone] = useState(false)
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
                                <ButtonDevice classes="nbl-button-chatButton" href='https://www.ivi.ru/profile' title='Написать в чате' />
                                <div className='iviFooter__supportButtons'>
                                    <ButtonDevice classes="nbl-button_iconMode_onlyIcon" href='mailto:support@ivi.ru' imgHref={mail_img} />
                                    <button onClick={e => setPhone(!phone)} className='supportPhonesButton'><img src={phone_img}/></button>
                                </div>
                                <div className={phone ? "iviFooter__supportPhones showed" : "iviFooter__supportPhones" }>
                                    <a href='tel:+74951285511' className='iviFooter__phoneItem'>
                                        <div className='iviFooter__phoneNumber'>+7 495 128-55-11</div>
                                    </a>
                                </div>
                                <ul className='iviFooter__questions'>
                                    <li>
                                        <a href='https://ask.ivi.ru/' className='nbl-link'>ask.ivi.ru</a>
                                        <div className='iviFooter__description'>Ответы на вопросы</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='iviFooter__column'>
                            <div className='footerWidget'>
                                <div className='footerWidget__iconSection'>
                                    <div className='footerWidget__icon'>
                                        <img src={widget_img}/>
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
                                <ButtonDevice imgHref='https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/appleLogo.svg' title='App Store' from='Загрузить в' href='https://go.onelink.me/app/devicesiOS' />
                                <ButtonDevice imgHref='https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/googlePlayLogo.svg' title='Google Play' from='Доступно в' href='https://go.onelink.me/app/devicesAndroid' />
                                <ButtonDevice imgHref='https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/appleLogo.svg' title='Smart TV' from='Смотреть' href='https://www.ivi.ru/pages/tvsmart' />
                                <ButtonDevice imgHref={all_device_img} title='Все устройства' href='https://www.ivi.ru/devices' />
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
                        <div className='iviFooter__column iviFooter__column_wide'>
                            <div className='iviFooter__community'>
                                <ButtonDevice classes='nbl-knob_style_seshi' href='https://vk.com/iviru?crc=fa4448c13e06e69ba9e814e8743c7e2e' imgHref='https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_vkontakte.svg' />
                                <ButtonDevice classes='nbl-knob_style_seshi' href='https://ok.ru/ivi.ru' imgHref='https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_odnoklassniki.svg' />
                                <ButtonDevice classes='nbl-knob_style_seshi' href='https://twitter.com/ivi_ru' imgHref='https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_twitter.svg' />
                                <ButtonDevice classes='nbl-knob_style_seshi' href='https://vb.me/a0544c' imgHref='https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_viber.svg' />
                                <ButtonDevice classes='nbl-knob_style_seshi' href='https://www.linkedin.com/company/2543415/' imgHref='https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_linkedin.svg' />
                                <ButtonDevice classes='nbl-knob_style_seshi' href='https://t.me/official_iviru' imgHref='https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_telegram.svg' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer