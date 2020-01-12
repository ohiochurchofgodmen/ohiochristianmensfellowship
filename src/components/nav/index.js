import React from 'react';
import styles from "./nav.module.css";

const Nav = (props) => {
    return (
        <nav className={`${styles.nav} ${props.className}`}>
            {props.children}
        </nav>
    );
};

export default Nav;