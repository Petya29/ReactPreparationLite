import { ComponentMeta, ComponentStory } from "@storybook/react";
import NavBar from "./NavBar";
import 'materialize-css/dist/css/materialize.min.css';

export default {
    title: 'UI/NavBar',
    component: NavBar,
    argTypes: {
        fixed: {
            defaultValue: false
        }
    }
} as ComponentMeta<typeof NavBar>


const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />

export const Default = Template.bind({});
Default.args = {
    children: 'SiteName'
}

export const Fixed = Template.bind({});
Fixed.args = {
    children: 'SiteName',
    fixed: true
}

export const Styled = Template.bind({});
Styled.args = {
    children: 'SiteName',
    style: {
        textAlign: 'center',
        backgroundColor: '#ff0000',
        fontSize: '2.2rem'
    }
}