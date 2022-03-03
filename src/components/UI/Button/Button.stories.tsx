import {ComponentMeta, ComponentStory} from '@storybook/react';
import Button from "./Button";

export default {
    title: 'UI/Button',
    component: Button,
    argTypes: {
        children: {
            description: 'Content inside button',
            defaultValue: 'Button'
        },
        color: {
            description: 'Button color',
        },
        size: {
            description: 'Button size',
            control: {
                type: 'inline-radio'
            }
        },
        variant: {
            description: 'Button variant',
            control: {
                type: 'inline-radio'
            }
        },
        disabled: {
            defaultValue: false
        }
    }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({});
Default.args = {
    children: 'Button',
    variant: 'contained',
    size: 'medium'
}

export const Primary = Template.bind({});
Primary.args = {
    children: 'Button',
    variant: 'contained',
    size: 'medium',
    color: 'primary'
}

export const Outlined = Template.bind({});
Outlined.args = {
    children: 'Button',
    variant: 'outlined',
    size: 'medium',
    color: 'primary'
}