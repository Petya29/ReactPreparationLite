import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './AppBar.module.css';

const AppBar: FC = () => {
    return (
        <div className="navbar-fixed">
            <nav className={classes.navWrapper}>
                <div>
                    <NavLink to="/" className="brand-logo">SiteName</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default AppBar