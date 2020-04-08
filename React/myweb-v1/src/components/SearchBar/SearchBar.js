import React from 'react'

import classes from './SearchBar.module.css';

const searchBar = (props) => {

    function enterPressed(e) {
      e.preventDefault();
      props.onClickHandler();
    }


    return(
        <form className={classes.SearchBarWrapper} onSubmit={enterPressed}>
            <input
                id= {props.name}
                name={props.name}
                placeholder="Enter an artist"
                value={props.value}
                onChange={props.onChangeHandler}
                required />
            <button
                name="searchSubmit"
                type="button"
                position="onForm"
                onClick={props.onClickHandler}>Submit</button>
        </form>
    );
}

export default searchBar;
