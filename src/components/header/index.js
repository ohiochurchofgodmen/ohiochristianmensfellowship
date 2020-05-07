import React, { useReducer } from 'react';
import Nav from '../nav';
import Link from '../link';
import Button from '../button';
import Icon from '../icon';
import styles from "./header.module.css";
import navStyles from "../nav/nav.module.css";
// import grid from "../../layouts/grid.module.css";
import logo from "../../images/logo.png";

const reducer = (prevState, updatedProperty) => ({
  ...prevState,
  ...updatedProperty,
});

const initState = {
  openNav: false,
};

const Header = (props) => {

  const [state, setState] = useReducer(reducer, initState);

  const toggleNav = () => {
    setState({openNav: !state.openNav});
  };

  return (
    <header className={`${styles.header} ${props.className}`}>
      <div className={styles.bar1}></div>
      <div className={styles.bar2}></div>
      <div className={styles.bar3}></div>
      <div className={styles.bar4}></div>
      <div className={navStyles.navBar}>
        <Button clickHandler={toggleNav}>
          <Icon name="menu"/>
        </Button>
      </div>

      <Nav className={`${!!state.openNav ? navStyles.opened : navStyles.closed}`}>
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
        <Link to="https://www.google.com/maps/dir//Camp+Lebanon+Retreat+Center,+4464+Emmons+Rd,+Oregonia,+OH+45054/@39.4442621,-84.186648,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8840f26c0df4b0a7:0x6b20972cafa62441!2m2!1d-84.1166079!2d39.4442831">
          <Icon name="place"/>
          Directions
        </Link>
        <Link to="/contactus">
          <Icon name="contact_support"/>
          Contact Us
        </Link>
      </Nav>
      

      <h1><img className={styles.logo} src={logo} alt="Ohio Christian Men's Fellowship"/></h1>
      <h2 className={styles.eventHeader}>A New Begining</h2>
      <h3 className={styles.eventThemeHeader}>September 11th/12th 2020</h3>
      <Button to="/registration" className={styles.register} variant="contained"><Icon name="event" variant="dense"/>Register</Button>
    </header>
  );
};

export default Header;
