import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import axios from "axios";
import User from "./User";

afterEach(cleanup);

const mockedAxios = axios as jest.Mocked<typeof axios>;

const hits = {
    id: 3503,
    name: 'John Doe',
    email: 'test@gmail.com',
    gender: 'male',
    status: 'active'
}

describe('User view', () => {
    it('User view renders', async () => {
        await act(async () => {
            const { container } = render(
                <Router>
                    <User />
                </Router>
            );

            expect(container.firstChild).toBeInTheDocument();
        });
    });

    it('User back navigation works', async () => {
        await act(async () => {
            render(
                <Router>
                    <User />
                </Router>
            );

            fireEvent.click(screen.getByText('Back'));
        });
    });

    it('User fetch data from API', async () => {
        mockedAxios.get.mockResolvedValueOnce({ data: hits });

        await act(async () => {
            render(
                <Router>
                    <User />
                </Router>
            );
        });

        expect(screen.getByText(new RegExp(hits.name, 'i'))).toBeInTheDocument();
        expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    });
});