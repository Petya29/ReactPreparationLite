import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Fragment } from "react";
import Loader from "./Loader";

export default {
    title: 'UI/Loader',
    component: Loader,
    argTypes: {
        size: {
            defaultValue: 'medium'
        },
        color: {
            description: 'Loader color',
            defaultValue: '#000000'
        },
        centered: {
            defaultValue: false,
            description: 'Render a loader in the middle of the page or not'
        }
    }
} as ComponentMeta<typeof Loader>

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />

export const Default = Template.bind({});

export let Sized = Template.bind({});
Sized = () => {
    return (
        <Fragment>
            <Loader size='small' style={{ display: 'inline-block' }} />
            <Loader size='medium' style={{ display: 'inline-block', margin: '0 25px' }} />
            <Loader size='large' style={{ display: 'inline-block' }} />
        </Fragment>
    )
}

export const Colored = Template.bind({});
Colored.args = {
    color: '#ff0000'
}

export const Centered = Template.bind({});
Centered.args = {
    color: '#ff0000',
    centered: true
}

export const CustomStyled = Template.bind({});
CustomStyled.args = {
    style: {
        borderTopColor: '#ff0000',
        margin: '10px auto'
    }
}