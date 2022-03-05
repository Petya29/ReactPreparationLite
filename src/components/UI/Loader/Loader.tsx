import React, { CSSProperties, FC } from 'react';
import classes from './Loader.module.css';

interface IProps {
    size?: 'small' | 'medium' | 'large',
    color?: string,
    centered?: boolean,
    style?: CSSProperties
}

const Loader: FC<IProps> = ({
    size = 'medium',
    color = '#000000',
    centered = false,
    style,
    ...props
}) => {

    const styled: CSSProperties = {
        borderTopColor: color,
        ...style,
    }

    return (
        <div
            className={`${centered ? classes.loaderCentered : classes.loader} ${classes[`loader--${size}`]}`}
            style={styled}
        >
        </div>
    )
}

export default Loader