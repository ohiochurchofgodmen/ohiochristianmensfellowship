import React from 'react';
import styles from "./cardBody.module.css";
import grid from "../../layouts/grid.module.css";

const CardBody = (props) => (
    <div className={`${grid.gc4} ${styles.cardBody} ${props.className}`}>
        {props.children}
    </div>
);

export default CardBody;