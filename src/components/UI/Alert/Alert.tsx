import React, { CSSProperties, FC } from 'react';
import classes from './Alert.module.css';

interface IProps {
    color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning',
    style?: CSSProperties,
    children: JSX.Element | string
}

const Alert: FC<IProps> = ({
    color = 'info',
    style,
    children,
    ...props
}) => {
    return (
        <div className={`
            ${classes.alert} 
            ${classes[`alert--${color}`]}
        `}
            style={style}
        >
            {children}
        </div>
    )
}

export default Alert