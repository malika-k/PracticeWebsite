import React from 'react'

import classes from './InputField.module.css';

const inputField = (props) => {
    return (
        <div className={classes.InputFieldWrapper}>
            <input
                type={props.type}
                id={props.name}
                name={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.handleChange}
                required />
        </div>
    );
}

export default inputField;
