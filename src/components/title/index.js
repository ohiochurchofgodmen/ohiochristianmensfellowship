import React from 'react';
import styles from "./title.module.css";
import grid from "../../layouts/grid.module.css";

const Title = (props) => (
    <h5 className={`${grid.gc4} ${styles.title} ${props.className}`}>
        {props.children}
    </h5>
);

export default Title;