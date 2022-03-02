import { render, screen } from "@testing-library/react";
import { IPost } from "../../../models/IPost";
import Card from "./Card";

const mockData: IPost = {
    id: 1,
    user_id: 1,
    title: 'title 1',
    body: 'body 1'
}

describe('Card component', () => {
    it('Card renders', () => {
        render(<Card data={mockData}>children</Card>);

        expect(screen.getByText('children')).toBeInTheDocument();
    });
});