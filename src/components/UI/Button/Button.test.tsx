import { fireEvent } from "@storybook/testing-library";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

const onClick = jest.fn();

describe('Button component', () => {
    it('Button renders', () => {
        render(<Button />);

        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('Button have correctly props', () => {
        const { container } = render(
            <Button
                color="primary"
                variant="outlined"
                size="large"
                disabled
            >
                children
            </Button>
        );

        expect(screen.getByRole('button')).toBeInTheDocument();
        expect(screen.getByText('children')).toBeInTheDocument();
        expect(container.firstChild).toHaveClass('large primary outlined--primary');
        expect(container.firstChild).toHaveAttribute('disabled');
    });

    it('Button color if works', () => {
        const { container } = render(
            <Button
                variant="outlined"
                size="large"
                disabled
            >
                children
            </Button>
        );
        
        expect(container.firstChild).toHaveClass('inherit');
    });

    it('Button onClick works', () => {
        render(
            <Button
                onClick={onClick}
            >
                children
            </Button>
        );

        fireEvent.click(screen.getByRole('button'));
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});