import styles from './Footer.module.css'
import React from 'react';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} BandBlender</p>
      {/* You can add more information here, like the author, links, etc. */}
    </footer>
  );
}

export default Footer;
