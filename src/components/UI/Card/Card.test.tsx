import { render, screen } from "@testing-library/react";
import { IPost } from "../../../models/IPost";
import Card from "./Card";

const mockData: IPost = {
    id: 3573,
    user_id: 1703,
    title: 'title 1',
    body: 'body 1'
}

describe('Card component', () => {
    it('Card renders', () => {
        render(<Card title={mockData.title}>children</Card>);

        expect(screen.getByText('children')).toBeInTheDocument();
    });

    it('Card renders with correct props', () => {
        render(<Card
            title={mockData.title}
            body={mockData.body}
        >
            children
        </Card>);

        expect(screen.getByText(mockData.title)).toBeInTheDocument();
        expect(screen.getByText(mockData.body)).toBeInTheDocument();
    });

    it('Card renders with array props', () => {
        render(<Card
            title={[mockData.title, String(mockData.user_id)]}
            body={[mockData.body, String(mockData.id)]}
        >
            children
        </Card>);

        expect(screen.getByText(mockData.title)).toBeInTheDocument();
        expect(screen.getByText(String(mockData.user_id))).toBeInTheDocument();
        expect(screen.getByText(mockData.body)).toBeInTheDocument();
        expect(screen.getByText(String(mockData.id))).toBeInTheDocument();
    });
});