import React, { FC } from 'react';
import classes from './Button.module.css';

interface IProps {
    color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning',
    disabled?: boolean,
    size?: 'small' | 'medium' | 'large',
    variant?: 'outlined' | 'contained',
    onClick?: () => void,
    children?: JSX.Element | string,
}

const defaultColors: string[] = ['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning'];

const Button: FC<IProps> = ({
    color = 'inherit',
    disabled = false,
    size = 'medium',
    variant = 'contained',
    onClick,
    children,
    ...props
}) => {

    return (
        <button
            type='button'
            className={`
                ${classes.button}
                ${classes[size]}
                ${defaultColors.includes(color) ? classes[color] : classes.inherit}
                ${classes[variant + '--' + color]}
                ${classes[variant]}
            `}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button