import { act, cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import axios from "axios";
import Post from "./Post";
import { setupStore } from "../../store";

afterEach(cleanup);

const mockedAxios = axios as jest.Mocked<typeof axios>;

const hitsPost = [{
    id: 1703,
    user_id: 3503,
    title: 'title 1',
    body: 'body 1'
}]

const hitsUser = {
    id: 3503,
    name: 'John Doe',
    email: 'test@gmail.com',
    gender: 'male',
    status: 'active'
}

const store = setupStore();

describe('Post view', () => {
    it('Post view renders', async () => {
        await act(async () => {
            const { container } = render(
                <Provider store={store}>
                    <Post />
                </Provider>
            );

            expect(container.firstChild).toBeInTheDocument();
        });
    });

    it('Post pass correct props', async () => {
        await act(async () => {
            render(
                <Provider store={store}>
                    <Post />
                </Provider>
            );
        });

        expect(screen.getByText('Posted by unknown')).toBeInTheDocument();
    });

    it('Post fetch data from API', async () => {
        mockedAxios.get.mockResolvedValueOnce({ data: hitsPost }).mockResolvedValueOnce({ data: hitsUser });
        //mockedAxios.get.mockResolvedValueOnce({ data: hitsUser });

        await act(async () => {
            render(
                <Provider store={store}>
                    <Router>
                        <Post />
                    </Router>
                </Provider>
            );
        });

        const postState = store.getState().post;
        const userState = store.getState().user;

        expect(postState.posts).toEqual(hitsPost);
    });
});