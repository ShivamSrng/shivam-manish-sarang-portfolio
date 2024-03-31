import  React, { useState , useEffect } from 'react'
import styles from './ContactPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import ProfileImg from '/assets/images/profile.png';

function ContactPage() {
  var [date,setDate] = useState(new Date());
  useEffect(() => {
      var timer = setInterval(()=>setDate(new Date()), 1000 )
      return function cleanup() {
          clearInterval(timer)
      }
  
  });

  return (
    <div id='contact' className={styles.contactPage}>
      <div className={styles.gooeyContainer}>
        <div className={styles.gooey1}></div>
        <div className={styles.gooey2}></div>
        <div className={styles.gooey3}></div>
      </div>
      <div className={styles.artisticText}>
        <h1> <img className={styles.profileImg} src={ProfileImg} alt="Shivam Manish Sarang" /></h1>
        <h1>Impressed by my Problem Spotlight <span className={styles.purpleText}>•</span></h1>
      </div>
      <div className={styles.socialSection}>
        <div className={styles.info}>
          <p>Let's work together <span className={styles.orangeRedText}>:</span></p>
        </div>
        <div className={styles.socialLinks}>
          <a className={styles.icon} href="https://www.linkedin.com/in/shivamsarang/" target="_blank">
            {<FontAwesomeIcon className={styles.individualIcon} icon={faLinkedin} />} linkedin.com/in/shivamsarang/
          </a>
          <a className={styles.icon} href="mailto:sarangshivam16@gmail.com" target="_blank">
            {<FontAwesomeIcon className={styles.individualIcon} icon={faEnvelope} />} sarangshivam16@gmail.com
          </a>
          <a className={styles.icon} href="tel: +1 201-780-6597" target="_blank">
            {<FontAwesomeIcon className={styles.individualIcon} icon={faPhone} />} +1 201-780-6597
          </a>
          <a className={styles.icon} href="https://github.com/ShivamSrng" target="_blank">
            {<FontAwesomeIcon className={styles.individualIcon} icon={faGithub} />} Github.com/ShivamSrng
          </a>
          <a className={styles.icon} href="https://www.instagram.com/shivam_srng/" target="_blank">
            {<FontAwesomeIcon className={styles.individualIcon} icon={faInstagram} />} Instagram.com/shivam_sarang
          </a>
        </div>
      </div>
      <div className={styles.footer}>
        <p>© 2024 Shivam Manish Sarang</p>
        <p>Eastern Standard Time: <span className={styles.orangeRedText}>{date.toLocaleTimeString()}</span></p>
      </div>
    </div>
  )
}

export default ContactPage