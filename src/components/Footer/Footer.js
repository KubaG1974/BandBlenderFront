import styles from './Footer.module.css'
import { NavLink} from 'react-router-dom';
const Footer = () => {

    return (
        <footer className={styles.footer}> 
        <div>
        <p><NavLink to="/Private-police" className={({isActive}) => isActive ? styles.active : ''}>Home</NavLink></p>
        </div>
            
           <h3>Copyright©BandBlender  </h3>     
        </footer>
    )
}

export default Footer;