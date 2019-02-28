import React from 'react';
import styles from "./cardList.module.css";
import grid from "../../layouts/grid.module.css";

const CardList = (props) => (
	<div className={`${grid.gc8} ${styles.cardList} ${props.className}`}>
		{props.children}
	</div>
);

export default CardList;