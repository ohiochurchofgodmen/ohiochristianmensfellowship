import React from 'react';
import styles from "./cardColumn.module.css";

const CardColumn = (props) => (
	<div className={`${styles.cardColumn} ${props.className}`}>
		{props.children}
	</div>
);

export default CardColumn;