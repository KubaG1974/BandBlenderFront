import styles from './Footer.module.css'
import React from 'react';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src='./bblogo.png' alt='logo' width='70px' height='70px' />
      <h1 className={styles.h1}>BandBlender</h1>
      {/* Here you could add navigation links, logo, etc. */}
    </header>
  );
}

export default Header;
