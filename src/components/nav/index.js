import React, {forwardRef} from 'react';
import styles from "./nav.module.css";

const Nav = forwardRef((props, ref) => (
    <nav ref={ref} id={props.id} className={`${styles.nav} ${props.className}`} aria-label={props.label}>
        {props.children}
    </nav>
));

export default Nav;