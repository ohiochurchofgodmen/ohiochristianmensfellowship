import React from 'react';
import styles from "./cardList.module.css";

const CardList = (props) => (
	<div className={`${styles.cardList} ${props.className}`}>
		{props.children}
	</div>
);

export default CardList;