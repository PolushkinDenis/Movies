import React, { FC, useState } from "react";
import "./Footer.scss";
import all_device_img from "../../images/footer/all_device.png";
import mail_img from "../../images/footer/mail.png";
import phone_img from "../../images/footer/phone.png";
import widget_img from "../../images/footer/widget.png";
import { useTranslation } from "react-i18next";
import FooterLinks from "./footerLinks/FooterLinks";
import { LinkFooter } from "../../types/footerLinks";
import ButtonDevice from "./buttonDevice/ButtonDevice";

const Footer: FC = () => {
  //Translation
  const { t } = useTranslation();
  const aboutUsLinks: LinkFooter[] = [
    { href: "https://corp.ivi.ru/", name: t("О компании") },
    {
      href: "https://corp.ivi.ru/career/#career-vacancy-block",
      name: t("Вакансии"),
    },
    {
      href: "https://www.ivi.ru/pages/beta",
      name: t("Программа бета-тестирования"),
    },
    {
      href: "https://www.ivi.ru/info/partners",
      name: t("Информация для партнёров"),
    },
    { href: "https://corp.ivi.ru/advertisers/", name: t("Размещение рекламы") },
    {
      href: "https://www.ivi.ru/info/agreement",
      name: t("Пользовательское соглашение"),
    },
    {
      href: "https://www.ivi.ru/info/confidential",
      name: t("Политика конфиденциальности"),
    },
    {
      href: "https://www.ivi.ru/info/goryachaya-liniya-komplaens",
      name: t("Комплаенс"),
    },
  ];
  const sectionsLinks: LinkFooter[] = [
    { href: "/", name: t("Мой Иви") },
    { href: "https://www.ivi.ru/new", name: t("Что нового") },
    { href: "/movies", name: t("Фильмы") },
    { href: "/movies", name: t("Сериалы") },
    { href: "/movies", name: t("Мультфильмы") },
    { href: "https://www.ivi.ru/tvplus", name: t("TV+") },
    { href: "https://www.ivi.ru/goodmovies", name: t("Что посмотреть") },
  ];
  const [phone, setPhone] = useState(false);
  return (
    <footer>
      <div className="iviFooter__container">
        <div className="iviFooter__container-inner">
          <div className="iviFooter__content">
            <div className="iviFooter__column">
              <FooterLinks title="О нас" links={aboutUsLinks} />
            </div>
            <div className="iviFooter__column">
              <FooterLinks title="Разделы" links={sectionsLinks} />
              <div className="iviFooter__certificateLinkWrapper">
                <a
                  className="iviFooter__certificateLink"
                  href="https://www.ivi.ru/cert"
                >
                  {t("Активация сертификата")}
                </a>
              </div>
            </div>
            <div className="iviFooter__column">
              <span className="iviFooter__title">{t("Служба поддержки")}</span>
              <div className="iviFooter__description">
                <span>{t("Мы всегда готовы вам помочь.")}</span>
                <span>{t("Наши операторы онлайн 24/7")}</span>
              </div>
              <div className="iviFooter__support">
                <ButtonDevice
                  classes="nbl-button-chatButton"
                  href="https://www.ivi.ru/profile"
                  title="Написать в чате"
                />
                <div className="iviFooter__supportButtons">
                  <ButtonDevice
                    classes="nbl-button_iconMode_onlyIcon"
                    href="mailto:support@ivi.ru"
                    imgHref={mail_img}
                  />
                  <button
                    onClick={(e) => setPhone(!phone)}
                    className="supportPhonesButton"
                  >
                    <img src={phone_img} />
                  </button>
                </div>
                <div
                  className={
                    phone
                      ? "iviFooter__supportPhones showed"
                      : "iviFooter__supportPhones"
                  }
                >
                  <a href="tel:+74951285511" className="iviFooter__phoneItem">
                    <div className="iviFooter__phoneNumber">
                      +7 495 128-55-11
                    </div>
                  </a>
                </div>
                <ul className="iviFooter__questions">
                  <li>
                    <a href="https://ask.ivi.ru/" className="nbl-link">
                      ask.ivi.ru
                    </a>
                    <div className="iviFooter__description">
                      {t("Ответы на вопросы")}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="iviFooter__column">
              <div className="footerWidget">
                <div className="footerWidget__iconSection">
                  <div className="footerWidget__icon">
                    <img src={widget_img} />
                  </div>
                </div>
                <div className="footerWidget__text">
                  {t("Смотрите фильмы, сериалы и мультфильмы без рекламы")}
                </div>
              </div>
            </div>
          </div>
          <div className="iviFooter__content">
            <div className="iviFooter__column iviFooter__column_wide">
              <div className="iviFooter__stores">
                <ButtonDevice
                  imgHref="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/appleLogo.svg"
                  title="App Store"
                  from="Загрузить в"
                  href="https://go.onelink.me/app/devicesiOS"
                />
                <ButtonDevice
                  imgHref="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/googlePlayLogo.svg"
                  title="Google Play"
                  from="Доступно в"
                  href="https://go.onelink.me/app/devicesAndroid"
                />
                <ButtonDevice
                  imgHref="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/appleLogo.svg"
                  title="Smart TV"
                  from="Смотреть"
                  href="https://www.ivi.ru/pages/tvsmart"
                />
                <ButtonDevice
                  imgHref={all_device_img}
                  title="Все устройства"
                  href="https://www.ivi.ru/devices"
                />
              </div>
              <div className="iviFooter__copyrights">
                <div className='class="iviFooter__copyrightsSite"'>
                  © 2023 ООО «Иви.ру»
                </div>
                <div>
                  HBO ® and related service marks are the property of Home Box
                  Office, Inc
                </div>
              </div>
            </div>
            <div className="iviFooter__column iviFooter__column_wide">
              <div className="iviFooter__community">
                <ButtonDevice
                  classes="nbl-knob_style_seshi"
                  href="https://vk.com/iviru?crc=fa4448c13e06e69ba9e814e8743c7e2e"
                  imgHref="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_vkontakte.svg"
                />
                <ButtonDevice
                  classes="nbl-knob_style_seshi"
                  href="https://ok.ru/ivi.ru"
                  imgHref="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_odnoklassniki.svg"
                />
                <ButtonDevice
                  classes="nbl-knob_style_seshi"
                  href="https://twitter.com/ivi_ru"
                  imgHref="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_twitter.svg"
                />
                <ButtonDevice
                  classes="nbl-knob_style_seshi"
                  href="https://vb.me/a0544c"
                  imgHref="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_viber.svg"
                />
                <ButtonDevice
                  classes="nbl-knob_style_seshi"
                  href="https://www.linkedin.com/company/2543415/"
                  imgHref="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_linkedin.svg"
                />
                <ButtonDevice
                  classes="nbl-knob_style_seshi"
                  href="https://t.me/official_iviru"
                  imgHref="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_telegram.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
