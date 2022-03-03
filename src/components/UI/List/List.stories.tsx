import { ComponentMeta, ComponentStory } from "@storybook/react";
import { IPost } from "../../../models/IPost";
import List from "./List";

export default {
    title: 'UI/CardList',
    component: List
} as ComponentMeta<typeof List>

const Template: ComponentStory<typeof List> = (args) => <List {...args} />

const posts: IPost[] = [
    {
        id: 1,
        user_id: 1,
        title: 'title 1',
        body: 'body 1'
    },
    {
        id: 2,
        user_id: 2,
        title: 'title 2',
        body: 'body 2'
    },
    {
        id: 3,
        user_id: 3,
        title: 'title 3',
        body: 'body 3'
    },
]

export const Default = Template.bind({});
Default.args = {
    items: posts
}