import React from 'react';
import Link from '../link';
import styles from "./listItem.module.css";
import grid from "../../layouts/grid.module.css";

const ListItem = (props) => {
    if (props.to) {
        return (
            <li className={`${styles.item} ${grid.gc4}`}>
                <Link to={props.to}>
                    {props.children}
                </Link>
            </li>
        );
    } else {
        return (
            <li className={`${styles.item} ${grid.gc4}`}>
                {props.children.map(child => {
                    return (
                        <span>
                            {child}
                        </span>
                    );
                })}
            </li>
        );
    }
};

export default ListItem;