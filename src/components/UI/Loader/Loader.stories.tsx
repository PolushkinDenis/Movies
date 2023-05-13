import Loader from "./Loader"
import './Loader.scss'
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'UI/Loader',
    component: Loader
}

export const Default = () => {
    return (
        <div style={{ background: "#100e19" }}>
            <Loader></Loader>
        </div>
    )
}
