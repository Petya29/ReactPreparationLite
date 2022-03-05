import { render, screen } from "@testing-library/react";
import Alert from "./Alert";

describe('Alert component', () => {
    it('Alert renders', () => {
        render(<Alert>Alert children</Alert>);

        expect(screen.getByText('Alert children')).toBeInTheDocument();
    });

    it('Alert have correctly props', () => {
        const { container } = render(
            <Alert
                color='success'
                style={{width: '50%'}}
            >
                Alert children
            </Alert>
        );

        expect(container.firstChild).toHaveClass('alert alert--success');
        expect(container.firstChild).toHaveStyle('width: 50%');
    });
});