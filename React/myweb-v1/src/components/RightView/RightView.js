import React from 'react';
import classes from './RightView.module.css';

const RightView = (props) => {


return(
  <div className={classes.RightView}>
    {props.children}
  </div>
);

}

export default RightView;
