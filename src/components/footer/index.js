import React from 'react';
import styles from './footer.module.css';

const Footer = (props) => (
	<footer className={` ${styles.footer} ${props.className}`}>
		{props.children}
	</footer>
);

export default Footer;
