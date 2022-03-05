import { act, cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import axios from "axios";
import Post from "./Post";

afterEach(cleanup);

const mockedAxios = axios as jest.Mocked<typeof axios>;

const hitsPost = {
    id: 1703,
    user_id: 3503,
    title: 'title 1',
    body: 'body 1'
}

const hitsUser = {
    id: 3503,
    name: 'John Doe',
    email: 'test@gmail.com',
    gender: 'male',
    status: 'active'
}

describe('Post view', () => {
    it('Post view renders', async () => {
        await act(async () => {
            const { container } = render(<Post />);

            expect(container.firstChild).toBeInTheDocument();
        });
    });

    it('Post pass correct props', async () => {
        await act(async () => {
            render(
                <Post />
            );
        });

        expect(screen.getByText('Posted by unknown')).toBeInTheDocument();
    });

    it('Post fetch data from API', async () => {
        mockedAxios.get.mockResolvedValueOnce({ data: hitsPost });
        mockedAxios.get.mockResolvedValueOnce({ data: hitsUser });

        await act(async () => {
            render(
                <Router>
                    <Post />
                </Router>
            );
        });

        expect(screen.getByText(hitsPost.title)).toBeInTheDocument();
        expect(screen.getByText(hitsPost.body)).toBeInTheDocument();

        expect(screen.getByText(`Posted by ${hitsUser.name}`)).toBeInTheDocument();
    });
});