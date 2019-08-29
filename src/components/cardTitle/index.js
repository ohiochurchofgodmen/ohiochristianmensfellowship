import React from 'react';
import styles from "./cardTitle.module.css";
import grid from "../../layouts/grid.module.css";

const CardTitle = (props) => (
    <h5 className={`${grid.gc4} ${styles.cardTitle} ${props.className}`}>
        {props.children}
    </h5>
);

export default CardTitle;