import React from 'react';
import styles from "./supportText.module.css";
import grid from "../../layouts/grid.module.css";

const SupportText = (props) => (
    <div className={`${grid.gc4} ${styles.support} ${props.className}`}>
        {props.children}
    </div>
);

export default SupportText;