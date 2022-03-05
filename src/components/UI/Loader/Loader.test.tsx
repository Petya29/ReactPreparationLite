import { render, screen } from "@testing-library/react";
import Loader from "./Loader";

describe('Loader component', () => {
    it('Loader renders', () => {
        const { container } = render(<Loader />);

        expect(container.firstChild).toHaveClass('loader');
    });

    it('Loader have correctly props', () => {
        const { container } = render(
            <Loader
                size="small"
                color="#ff0000"
                centered
                style={{ margin: '10px' }}
            />
        );

        expect(container.firstChild).toHaveClass('loaderCentered loader--small');
        expect(container.firstChild).toHaveStyle('border-top-color: #ff0000; margin: 10px');
    });
});