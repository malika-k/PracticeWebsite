import React from 'react';

import classes from './Header.module.css';
import Logo from '../../elements/Logo/Logo';

const header = (props) => {
    return(
        <header className={classes.Header} >
          <div  className={classes.LogoSize} >
            <Logo clicked={props.onClickHandler} />
          </div>
        </header>
    );
}

export default header;
