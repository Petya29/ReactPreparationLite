import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import AppBar from "./AppBar";

describe('AppBar', () => {
    it('AppBar renders', () => {
        render(
            <Router>
                <AppBar />
            </Router>
        );

        expect(screen.getByText('SiteName')).toBeInTheDocument();
    });
});