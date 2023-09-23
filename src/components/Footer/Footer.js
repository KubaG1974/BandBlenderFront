import styles from './Footer.module.css'

const Footer = () => {

    return (
    <footer className={styles.footer}> 
      <h3>&copy; {new Date().getFullYear()} BandBlender</h3> 
    </footer>
    )
}

export default Footer;