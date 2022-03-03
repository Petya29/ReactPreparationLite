import { ComponentMeta, ComponentStory } from "@storybook/react";
import 'materialize-css/dist/css/materialize.min.css';
import AppBar from "./AppBar";

export default {
    title: 'partials/AppBar',
    component: AppBar
} as ComponentMeta<typeof AppBar>

const Template: ComponentStory<typeof AppBar> = (args) => <AppBar {...args} />

export const Default = Template.bind({});
Default.args = {
    style: {
        backgroundColor: '#ee6e73'
    }
}