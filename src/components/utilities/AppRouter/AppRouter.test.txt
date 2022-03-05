import { render } from "@testing-library/react";
import Home from "../../../pages/Home/Home";

describe('React Router', () => {
    it('Home page renders', () => {
        render(<Home />);
    });
});