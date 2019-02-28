import React from 'react';
import styles from "./media.module.css";

const Media = (props) => (
    <img className={`${styles.image} ${props.className}`} src={props.src} alt={props.altText}/>
);

export default Media;