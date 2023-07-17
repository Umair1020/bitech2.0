import { FaBars, FaTimes } from "react-icons/fa"
import { useMediaQuery } from "react-responsive"
import React, { useState, useEffect } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Slide } from '@mui/material';
import style from "./header.module.css"
// import { Link } from "react-router-dom";
import styles from "../../index.module.css"
import { Link } from "react-router-dom";
import "../../App.css"

const Header = () => {


  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  }

  const openNav = () => {
    document.getElementById("mySidenav").style.width = "100%";
  };

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }

  return (
    <>
      <Desktop>
      <div className={styles.bitech}>Bitech</div>
      <div className={styles.homeAboutUsContainer}>
        <ul className="ul" style={{ display: "flex", listStyle: "none" }}>
          <li> <Link href='/' className="home">Home</Link></li>
          <li> <Link href='/' className="about">About Us</Link></li>
          <li><Link href='/' className="app">Our App</Link></li>
          <li><Link href='/' className="contact">Contact</Link></li>
        </ul>
        <span className={styles.home}></span>
        <span>   </span>
      </div>
      <div className={styles.login}>Login</div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupChild} />
        <div className={styles.signUp}> Sign Up</div>
      </div>
      </Desktop>
      <Mobile>
        <div>
          {/* <div className={style.frameChild7} /> */}

          <div className={styles.bitech}>Bitech</div>
          <div className=''>
            <span>{`Synaps `}</span>
            <span className=''>Solutions</span>
          </div>
          <div id="mySidenav" className="sidenav">
            <a href="javascript:void(0)" className="closebtn" onClick={closeNav}><FaTimes /></a>
            <Link href="/">Home</Link>
            <Link href="/about" >About</Link>
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <span className='' style={{ fontSize: '30px', cursor: 'pointer', marginLeft: "350px", color: "#fff" }} onClick={openNav}><FaBars /></span>
        </div>

      </Mobile >
    </>
  )
}

export default Header
