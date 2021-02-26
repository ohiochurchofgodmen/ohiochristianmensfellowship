import React from 'react';
import Link from '../link';
import styles from "./button.module.css";

const Button = (props) => {
    let variant = `${styles.contained}`;

    if (props.variant === "text") {
        variant = `${styles.text}`;
    } else if (props.variant === "outline") {
        variant = `${styles.outline}`;
    }


    if (props.to && !props.disabled) {
        return (
            <Link to={props.to} activeClassName={`${"button"} ${styles.button} ${variant} ${props.className}`} onClick={props.clickHandler} {...props}>{props.children}</Link>
        );
    } else {
        return (
            <button className={`${styles.button} ${variant} ${props.className}`} type={props.type} value={props.value} onClick={props.clickHandler} disabled={props.disabled} {...props}>{props.children}</button>
        );
    }
};

export default Button;
