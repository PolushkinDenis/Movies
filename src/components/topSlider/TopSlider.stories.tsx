import TopSlider from "./TopSlider";
import './TopSlider.scss'
import '../../scss/reset.scss'
import '../../scss/app.scss'
import { setupStore } from "../../store/store";
import type { Meta, StoryObj, ComponentStory } from '@storybook/react';
import { Provider } from "react-redux";

const meta: Meta<typeof TopSlider> = {
    title: 'TopSlider',
    component: TopSlider
};

export default meta;
type Story = StoryObj<typeof TopSlider>;

const Template: ComponentStory<typeof TopSlider> = (args) => {
    return (
        <div>
            <Provider store={setupStore()}>
                <TopSlider />
            </Provider>
        </div>
    )
}
export const Default = Template.bind({});

Default.args = {

}

{/* <div style={{ background: "#100e19" }}><MyButton {...args} /></div>
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
} */}
