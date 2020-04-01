import React from 'react'

import classes from './SearchBar.module.css';

const searchBar = (props) => {
    return(
        <form className={classes.SearchBarWrapper}>
            <input
                type={props.type}
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
