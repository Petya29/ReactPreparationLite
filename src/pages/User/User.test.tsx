import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import axios from "axios";
import User from "./User";
import { setupStore } from "../../store";

afterEach(cleanup);

const mockedAxios = axios as jest.Mocked<typeof axios>;

const hits = {
    id: 3503,
    name: 'John Doe',
    email: 'test@gmail.com',
    gender: 'male',
    status: 'active'
}

const store = setupStore();

describe('User view', () => {
    it('User view renders', async () => {
        await act(async () => {
            const { container } = render(
                <Provider store={store}>
                    <Router>
                        <User />
                    </Router>
                </Provider>
            );

            expect(container.firstChild).toBeInTheDocument();
        });
    });

    it('User back navigation works', async () => {
        await act(async () => {
            render(
                <Provider store={store}>
                    <Router>
                        <User />
                    </Router>
                </Provider>
            );

            fireEvent.click(screen.getByText('Back'));
        });
    });

    it('User fetch data from API', async () => {
        mockedAxios.get.mockResolvedValueOnce({ data: hits });

        await act(async () => {
            render(
                <Provider store={store}>
                    <Router>
                        <User />
                    </Router>
                </Provider>
            );
        });

        const state = store.getState().user;

        expect(mockedAxios.get).toHaveBeenCalled();
        expect(state.users).toEqual([hits]);
    });
});