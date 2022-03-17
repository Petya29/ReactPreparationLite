import { act, cleanup, findAllByRole, render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import axios from "axios";
import Home from "./Home";
import { setupStore } from "../../store";

afterEach(cleanup);

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

const store = setupStore();

describe('Home view', () => {
    it('Home view renders', () => {
        const { container } = render(
            <Provider store={store}>
                <Home />
            </Provider>
        );

        expect(container.firstChild).toHaveClass('home-view');
    });

    it('Home fetch posts from API', async () => {
        mockedAxios.get.mockResolvedValueOnce({ data: hits });

        await act(async () => {
            render(
                <Provider store={store}>
                    <Router>
                        <Home />
                    </Router>
                </Provider>
            );
        });

        const state = store.getState().post;

        expect(mockedAxios.get).toHaveBeenCalledTimes(1);
        expect(state.posts).toEqual(hits);
    });

    it('Home displays fetching data', async () => {
        mockedAxios.get.mockResolvedValueOnce({ data: hits });

        await act(async () => {
            render(
                <Provider store={store}>
                    <Router>
                        <Home />
                    </Router>
                </Provider>
            );
        });

        expect(screen.getByRole('list')).toBeInTheDocument();

        const items = await findAllByRole(screen.getByRole('list'), 'listitem');
        expect(items).toHaveLength(hits.length);

        expect(screen.getByText(hits[0].title)).toBeInTheDocument();
    });
});