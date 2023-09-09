import { NavLink} from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <sidebar>
            <nav>
                <ul className={styles.sidebar}>
                    <li><NavLink to="/" className={({isActive}) => isActive ? styles.active : ''}>Home</NavLink></li>
                    <li><NavLink to="/contact" className={({isActive}) => isActive ? styles.active : ''}>Contact</NavLink></li>
                    <li><NavLink to="/about-me" className={({isActive}) => isActive ? styles.active : ''}>About me</NavLink></li>
                    <li><NavLink to="/Messages" className={({isActive}) => isActive ? styles.active : ''}>Messages</NavLink></li>
                    <li><NavLink to="/Profile" className={({isActive}) => isActive ? styles.active : ''}>Profile</NavLink></li>
                    <li><NavLink to="/Invitations" className={({isActive}) => isActive ? styles.active : ''}>Invitations</NavLink></li>
                    <li><NavLink to="/Create-band" className={({isActive}) => isActive ? styles.active : ''}>BandCreator</NavLink></li>
                    <li><NavLink to="/Settings" className={({isActive}) => isActive ? styles.active : ''}>Settings</NavLink></li>


                </ul>
            </nav>
        </sidebar>
    )
}

export default Navbar;