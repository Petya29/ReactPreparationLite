import React, { CSSProperties, FC } from 'react';
import classes from './NavBar.module.css';

interface IProps {
    style?: CSSProperties,
    fixed?: boolean,
    children?: JSX.Element | JSX.Element[] | string
}

const NavBar: FC<IProps> = ({
    style,
    fixed = false,
    children,
    ...props
}) => {

    const styled: CSSProperties = {
        position: fixed ? 'fixed' : 'inherit',
        ...style
    }

    return (
        <div className={classes.navBarContainer}>
            <nav
                className={classes.navBar}
                style={styled}
            >
                {children}
            </nav>
        </div>
    )
}

export default NavBar