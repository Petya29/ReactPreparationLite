import { ComponentMeta, ComponentStory } from "@storybook/react";
import Alert from "./Alert";

export default {
    title: 'UI/Alert',
    component: Alert,
    argTypes: {
        children: {
            type: 'string',
            description: 'Content inside alert'
        },
        color: {
            description: 'Alert color',
        }
    }
} as ComponentMeta<typeof Alert>

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />

export const Success = Template.bind({});
Success.args = {
    children: 'Success action created',
    color: 'success'
}

export const Error = Template.bind({});
Error.args = {
    children: 'Something went wrong',
    color: 'error'
}

export const Info = Template.bind({});
Info.args = {
    children: 'Info content',
    color: 'info'
}

export const CustomStyled = Template.bind({});
CustomStyled.args = {
    children: 'Custom styled alert',
    color: 'warning',
    style: {
        width: '50%',
        textAlign: 'center',
        fontWeight: 'bold'
    }
}