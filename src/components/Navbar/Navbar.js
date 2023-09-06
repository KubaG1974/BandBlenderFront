import {Link, NavLink} from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <header>
            <nav>
                <ul className={styles.header}>
                    <li><NavLink to="/" className={({isActive}) => isActive ? styles.active : ''}>Home</NavLink></li>
                    <li><NavLink to="/contact" className={({isActive}) => isActive ? styles.active : ''}>Contact</NavLink></li>
                    <li><NavLink to="/about-me" className={({isActive}) => isActive ? styles.active : ''}>About me</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;