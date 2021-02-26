import React from 'react';
import styles from "./nav.module.css";

const Nav = (props) => {
    return (
        <nav id={props.id} className={`${styles.nav} ${props.className}`} aria-label={props.label}>
            {props.children}
        </nav>
    );
};

export default Nav;