import React, { FC, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from '../../UI/NavBar/NavBar';
import classes from './AppBar.module.css';

const AppBar: FC = () => {

    useEffect(() => {
        M.AutoInit();
    }, [])


    return (
        <NavBar
            fixed
            style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center'
            }}
        >
            <h4 className={classes.logo}>SiteName</h4>
            <ul className={classes.menu}>
                <li className='waves-effect'><NavLink to='/'>Posts</NavLink></li>
                <li className='waves-effect'><NavLink to='/'>graphQL</NavLink></li>
            </ul>
            <i
                className={`
                    large
                    material-icons
                    waves-effect
                    dropdown-trigger
                    ${classes.mobileMenu}
                `}
                data-target='mobileMenu'
            >
                menu
            </i>
            <ul id='mobileMenu' className='dropdown-content'>
                <li className='waves-effect'><NavLink to='/'>Posts</NavLink></li>
                <li className='waves-effect'><NavLink to='/'>graphQL</NavLink></li>
            </ul>
        </NavBar>
    )
}

export default AppBar