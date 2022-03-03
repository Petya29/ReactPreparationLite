import React, { CSSProperties, FC } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './AppBar.module.css';

interface IProps {
    style?: CSSProperties
}

const AppBar: FC<IProps> = ({ style, ...props }) => {
    return (
        <div className="navbar-fixed">
            <nav className={classes.navWrapper} style={style}>
                <div>
                    <NavLink to="/" className="brand-logo">SiteName</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default AppBar