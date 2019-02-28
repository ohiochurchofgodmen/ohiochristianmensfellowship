import React from 'react';
import styles from "./icon.module.css";

const Icon = (props) => {
    let variant = ``;

    if (props.variant === "dense") {
        variant = `${styles.dense}`;
    }
    
    return (
        <i className={`${"material-icons"} ${styles.icon} ${variant}`}>{props.name}</i>
    );
    
};

export default Icon;