import MyButton, { Props } from "./MyButton";
import './MyButton.scss'
import '../../../scss/reset.scss'
import '../../../scss/app.scss'

import type { Meta, StoryObj, ComponentStory } from '@storybook/react';

const meta: Meta<typeof MyButton> = {
    title: 'UI/MyButton',
    component: MyButton
};

export default meta;
type Story = StoryObj<typeof MyButton>;

const Template: ComponentStory<typeof MyButton> = (args) => <div style={{ background: "#100e19" }}><MyButton {...args} /></div>
export const Link = Template.bind({});
Link.args = {
    children: "Ссылка",
    classes: "nbl-button__primaryText nbl-button__linkItem"
}

export const Subscription: Story = {
    args: {
        children: "Смотреть 30 дней за 1 ₽",
        classes: "nbl-button__subscription"
    },
}
