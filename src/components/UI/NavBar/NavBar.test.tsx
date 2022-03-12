import { render, screen } from "@testing-library/react";
import NavBar from './NavBar';

describe('NavBar component', () => {
    it('NavBar renders', () => {
        render(<NavBar>SiteName</NavBar>);

        expect(screen.getByText('SiteName')).toBeInTheDocument();
    });

    it('NavBar have correctly props', () => {
        const { container } = render(
            <NavBar
                fixed
                style={{ backgroundColor: '#000000' }}
            >
                SiteName
            </NavBar>
        );
        
        expect(container.firstChild).toHaveClass('navBarContainer');
        expect(screen.getByText('SiteName')).toHaveStyle('position: fixed; background-color: #000000');
    });
});