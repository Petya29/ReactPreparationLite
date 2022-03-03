import { ComponentMeta, ComponentStory } from "@storybook/react";
import Card from "./Card";

export default {
    title: 'UI/Card',
    component: Card,
    argTypes: {
        hoverable: {
            type: 'boolean',
            description: 'Add shadows to a card when user hover it',
            defaultValue: false
        },
        truncateTitle: {
            type: 'boolean',
            description: 'Truncate title if it is too long',
            defaultValue: true
        }
    }
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Default = Template.bind({});
Default.args = {
    children: 'Card actions',
    title: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        etdolore magna aliqua.`,
    body: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.`
}

export const Hoverable = Template.bind({});
Hoverable.args = {
    children: 'Card actions',
    title: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        etdolore magna aliqua.`,
    body: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.`,
    hoverable: true
}