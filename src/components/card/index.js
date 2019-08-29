import React from 'react';
import styles from "./card.module.css";

const Card = (props) => (
	<div id={props.id} className={`${styles.card} ${props.className}`}>
		{props.children}
	</div>
);

export default Card;