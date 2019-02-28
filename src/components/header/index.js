import React from 'react';
import Nav from '../nav';
import Link from '../link';
import Button from '../button';
import Icon from '../icon';
import styles from "./header.module.css";
import grid from "../../layouts/grid.module.css";
import logo from "../../images/logo.png";

const Header = (props) => (
  <header className={`${styles.header} ${props.className}`}>
      <Nav className={grid.gc8}>
        <Link to="/">
          <Icon name="home"/>
          {props.siteTitle}
        </Link>
        <Link to="/activities">
          <Icon name="local_activity"/>
          Activities
        </Link>
        <Link to="/speakers">
          <Icon name="group"/>
          Speakers
        </Link>
        <Link to="https://maps.google.com/maps?daddr=3480+Township+Road+221+Marengo,+OH+43334">
          <Icon name="place"/>
          Directions
        </Link>
        <Link to="/contactus">
          <Icon name="contact_support"/>
          Contact Us
        </Link>
      </Nav>

      <img className={styles.logo} src={logo} alt="Ohio Men's Ox Roast and Retreat"/>
      <div className={`${grid.gc4} ${styles.title}`}>
        <h2 className={styles.eventDate}>September 6th &amp; 7th</h2>
        <h3 className={styles.eventTheme}>God make the impossible possible!</h3>
      </div>
      <Button to="/registration" className={styles.register} variant="contained"><Icon name="event" variant="dense"/>Register</Button>
  </header>
);

export default Header;
