import React, { useReducer, useRef, useLayoutEffect } from 'react';
import Nav from '../nav';
import Link from '../link';
import Icon from '../icon';
import Button from '../button';
import styles from "./header.module.css";
import navStyles from "../nav/nav.module.css";
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
  const navRef = useRef(null);

  const toggleNav = () => {
    setState({openNav: !state.openNav});
  };

  const handleClickOutside = (event) => {
    if (!navRef.current.contains(event.target) && state.openNav) {
      toggleNav();
    }
  };

  useLayoutEffect(() => {
    document.addEventListener("mousedown", handleClickOutside, false);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside, false);
    };
  });

  return (
    <header className={`${styles.header} ${props.className}`}>
    <div className={navStyles.navBar}>
      <Button id="menu-button" type="button" onClick={toggleNav} aria-haspopup="true"
        aria-controls="main-nav">
        <Icon name="menu"/>
      </Button>

      <Nav ref={navRef} id="main-nav" className={`${!!state.openNav ? navStyles.opened : navStyles.closed}`} label="Main Menu">
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
        <Link to={props.giveUrl}>
          <Icon name="attach_money"/>
          Give
        </Link>
      </Nav>
    </div>
    {/* <p className={styles.warning}>
      Due to COVID-19, we understand any hesitation in purchasing tickets. We assure you that we are planning on having this year's event and will follow all state guidelines to keep everyone safe. If for some reason the event is canceled your money will be refunded back to you.
    </p> */}
    <div className={styles.headingWrapper}>
      <div className={styles.innerHeadingWrapper}>
      <h1><img className={styles.logo} src={logo} alt="Ohio Christian Men's Fellowship"/></h1>
      {props.show ?
          <>
            <h2 className={styles.eventHeader}>A New Begining</h2>
            <h3 className={styles.eventThemeHeader}>September 10th &amp; 11th 2021</h3>
          </>
      :
        ""
      }
      </div>
    </div>
  </header>
  );
};

export default Header;
