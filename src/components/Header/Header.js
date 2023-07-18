import { FaBars, FaTimes } from "react-icons/fa"
import { useMediaQuery } from "react-responsive"
import React, { useState, useEffect } from "react";
import styles from "../../index.module.css"
import { Link } from "react-router-dom";
import "../../App.css"
import headercss from "./header.module.css"

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
            <li> <Link to='/' className="home">Home</Link></li>
            <li> <Link to='/about' className="about">About Us</Link></li>
            <li><Link to='/' className="app">Our App</Link></li>
            <li><Link to='/' className="contact">Contact</Link></li>
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

          <div className={headercss.bitech}>Bitech</div>

          <div id="mySidenav" className="sidenav">
            <a href="javascript:void(0)" className="closebtn" onClick={closeNav}><FaTimes /></a>
            <div className="ul">
              <Link href="/">Home</Link>
              <Link href="/about" >About</Link>
              <Link href="/services">Services</Link>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
          <span className={headercss.span1} style={{ fontSize: '30px', cursor: 'pointer', marginLeft: "350px", color: "#000" }} onClick={openNav}><FaBars /></span>
        </div>

      </Mobile >
    </>
  )
}

export default Header
