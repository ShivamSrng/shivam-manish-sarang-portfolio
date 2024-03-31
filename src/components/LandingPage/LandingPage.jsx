import React from 'react'
import styles from './LandingPage.module.css'

import Logo from '/assets/images/logo.png';


function LandingPage() {
  return (
    <>
      <div id="fullScr" className={styles.fullScr}>
        <div id="menu" className={styles.slidingMenu}>
          <a onClick={() => {
            var navLogo = document.getElementById('logo');
            var dropDownMenu = document.getElementById('fullScr');

            if (dropDownMenu.style.top === '-100%') {
              dropDownMenu.style.top = '0';
              navLogo.style.opacity = '0';
            } else {
              dropDownMenu.style.top = '-100%';
              navLogo.style.opacity = '1';
            }
          }} href="#home"><h4>Home</h4></a>
          <a onClick={() => {
            var navLogo = document.getElementById('logo');
            var dropDownMenu = document.getElementById('fullScr');

            if (dropDownMenu.style.top === '-100%') {
              dropDownMenu.style.top = '0';
              navLogo.style.opacity = '0';
            } else {
              dropDownMenu.style.top = '-100%';
              navLogo.style.opacity = '1';
            }
          }} href="#about"><h4>About</h4></a>
          <a onClick={() => {
            var navLogo = document.getElementById('logo');
            var dropDownMenu = document.getElementById('fullScr');

            if (dropDownMenu.style.top === '-100%') {
              dropDownMenu.style.top = '0';
              navLogo.style.opacity = '0';
            } else {
              dropDownMenu.style.top = '-100%';
              navLogo.style.opacity = '1';
            }
          }} href="#problemsSpotlight"><h4>Problems Spotlight</h4></a>
          <a onClick={() => {
            var navLogo = document.getElementById('logo');
            var dropDownMenu = document.getElementById('fullScr');

            if (dropDownMenu.style.top === '-100%') {
              dropDownMenu.style.top = '0';
              navLogo.style.opacity = '0';
            } else {
              dropDownMenu.style.top = '-100%';
              navLogo.style.opacity = '1';
            }
          }} href="#contact"><h4>Contact</h4></a>
        </div>
      </div>
      <div id='home' className={styles.landingPage}>
        <div className={styles.nav}>
          <img id="logo" className={styles.logo} src={Logo} alt="Shivam Manish Sarang" />
          <div className={styles.tabs}>
            <a href="#home"><h4>Home</h4></a>
            <a href="#about"><h4>About</h4></a>
            <a href="#problemsSpotlight"><h4>Problems Spotlight</h4></a>
            <a href="#contact"><h4>Contact</h4></a>
          </div>

          <h3 className={styles.menu} onClick={() => {
            var navLogo = document.getElementById('logo');
            var dropDownMenu = document.getElementById('fullScr');
            var menu = document.getElementById('menu');

            if (dropDownMenu.style.top === '-100%') {
              dropDownMenu.style.top = '0';
              menu.style.display = 'block';
              menu.style.top = '0';
              navLogo.style.opacity = '0';
            } else {
              dropDownMenu.style.top = '-100%';
              menu.style.display = 'none';
              menu.style.top = '-100%';
              navLogo.style.opacity = '1';
            }
          }}>Menu</h3>
        </div>

        <div className={styles.center}>
          <div className={styles.left}>
            <h3>
              I am Shivam Manish Sarang, <br />
              Currently, looking for a <span className={styles.orangetext}>Full-Time</span> or <span className={styles.orangetext}>Internship</span> opportunity in the field of <span className={styles.orangetext}>Data Science</span> or <span className={styles.orangetext}>Backend Development</span>.
            </h3>
          </div>

          <div className={styles.right}>
            <h1>
              Data Scientist and Backend Developer
            </h1>
          </div>
        </div>

        <div className={styles.heroContainer}>
          <div className={styles.hero1}></div>
          <div className={styles.hero2}></div>
          <div className={styles.hero3}></div>
        </div>

        <div className={styles.imageContainer}>
          <img className={styles.artisticImage} src="https://news.artnet.com/app/news-upload/2014/08/gif-history-dvdp.gif" alt="artisticImage" />
        </div>
      </div>
    </>
  )
}

export default LandingPage