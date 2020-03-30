import React from 'react'

import classes from './Logo.module.css';

const logo = (props) => {

    return(
        <img
            src={require('../../assets/images/tv-logo.png')}
            alt="TrackVibe Logo"
            className={classes.Logo}
        />
    );
}

export default logo;
