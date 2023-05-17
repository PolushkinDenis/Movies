import ButtonDevice from "./ButtonDevice";
import './ButtonDevice.scss'
import "../Footer.scss";
import '../../../scss/reset.scss'
import '../../../scss/app.scss'
import type { Meta, StoryObj, ComponentStory } from '@storybook/react';
import { BrowserRouter } from "react-router-dom";
import mail_img from "../../../images/footer/mail.png";

const meta: Meta<typeof ButtonDevice> = {
    title: 'ButtonDevice',
    component: ButtonDevice
};

export default meta;

const Template: ComponentStory<typeof ButtonDevice> = (args) => {
    return (
        <BrowserRouter>
            <div className="iviFooter__supportButtons">
                <ButtonDevice {...args} />
            </div>
        </BrowserRouter>
    )
}
export const Device = Template.bind({});

Device.args = {
    href: "",
    imgHref: "https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/appleLogo.svg",
    from: "App Store",
    title: "Загрузить в",
}

export const SocialNetwork = Template.bind({});

SocialNetwork.args = {
    href: "https://ok.ru/ivi.ru",
    imgHref: "https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_vkontakte.svg",
    classes: "nbl-knob_style_seshi"
}

export const Contacts = Template.bind({});

Contacts.args = {
    href: "mailto:support@ivi.ru",
    imgHref: mail_img,
    classes: "nbl-button_iconMode_onlyIcon"
}