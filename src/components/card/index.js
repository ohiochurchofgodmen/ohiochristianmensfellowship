import React from 'react';
import styles from "./card.module.css";
import grid from "../../layouts/grid.module.css";

const Card = (props) => (
	<div id={props.id} className={`${grid.gc8} ${styles.card} ${props.className}`}>
		{props.children}
	</div>
);

export default Card;