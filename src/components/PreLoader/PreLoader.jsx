import React, { useEffect } from 'react'
import styles from './PreLoader.module.css';


function PreLoader() {
  useEffect(() => {
    const handlePreloader = () => {
      const preLoader = document.getElementById('preLoader');
      preLoader.style.top = '-100%';
    }

    setTimeout(() => {
      handlePreloader();
    }, 4000);
  }, [])
  return (
    <div id="preLoader" className={styles.preLoader}>
      <h1>ENTHUSIASTIC</h1>
      <h1>CREATIVE</h1>
      <h1>INNOVATIVE</h1>
    </div>
  )
}

export default PreLoader