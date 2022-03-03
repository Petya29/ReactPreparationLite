import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { IPost } from "../../../models/IPost";
import List from "./List";

const mockData: IPost[] = [
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

describe('List component', () => {
    it('List renders', () => {
        render(
            <Router>
                <List items={mockData} />
            </Router>
        );

        expect(screen.getByRole('list')).toBeInTheDocument();
    });

    it('List renders without items', () => {
        render(<List />);

        expect(screen.queryByRole('list')).toBeNull();
    });
});