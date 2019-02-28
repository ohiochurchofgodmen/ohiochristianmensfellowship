import React from 'react';
import styles from './list.module.css';
import grid from "../../layouts/grid.module.css";

const List = (props) => (
    <ul className={`${grid.gc8} ${styles.list}`}>{props.children}</ul>
);

export default List;