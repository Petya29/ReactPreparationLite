import { cleanup, render, screen } from "@testing-library/react";
import axios from "axios";
import Post from "./Post";

afterEach(cleanup);

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Post view', () => {
    it('Post view renders', () => {
        const { container } = render(<Post />);

        expect(container.firstChild).toBeInTheDocument();
    });

    it('Post fetch data from API', () => {
        //
    });
});