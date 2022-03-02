import { act, cleanup, findAllByRole, findByRole, render, screen } from "@testing-library/react";
import axios from "axios";
import Home from "./Home";

afterEach(cleanup);

// jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const hits = [
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
    }
]

describe('Home view', () => {
    it('Home view renders', () => {
        const { container } = render(<Home />);

        expect(container.firstChild).toBeInTheDocument();
    });

    it('Home fetch posts from API', async () => {
        mockedAxios.get.mockResolvedValueOnce({ data: hits });

        await act(async () => {
            render(<Home />);
        });

        expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    });

    it('Home displays fetching data', async () => {
        mockedAxios.get.mockResolvedValueOnce({ data: hits });

        await act(async () => {
            render(<Home />);
        });

        expect(screen.getByRole('list')).toBeInTheDocument();

        const items = await findAllByRole(screen.getByRole('list'), 'listitem');
        expect(items).toHaveLength(hits.length);

        expect(screen.getByText(hits[0].title)).toBeInTheDocument();
    });
});