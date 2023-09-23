import { NavLink} from 'react-router-dom';
import {AiOutlineHome, AiOutlineContacts} from "react-icons/ai"
import {TiMessages} from "react-icons/ti"
import {CgProfile} from "react-icons/cg"
import {RiCalendarTodoFill} from "react-icons/ri"
import {TbPencilExclamation} from "react-icons/tb"
import {FiSettings} from "react-icons/fi"
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className={styles.sidebar}>
            <ul className={styles.navlist}>
                <li className={styles.navItem}><NavLink to="/" className={({isActive}) => isActive ? styles.active : styles.link}><AiOutlineHome/>Home</NavLink></li>
                <li className={styles.navItem}><NavLink to="/contact" className={({isActive}) =>  isActive ? styles.active : styles.link}><AiOutlineContacts/>Contact</NavLink></li>
                <li className={styles.navItem}><NavLink to="/about-me" className={({isActive}) =>  isActive ? styles.active : styles.link}><AiOutlineContacts/>About me</NavLink></li>
                <li className={styles.navItem}><NavLink to="/Messages" className={({isActive}) =>  isActive ? styles.active : styles.link}><TiMessages/>Messages</NavLink></li>
                <li className={styles.navItem}><NavLink to="/Profile" className={({isActive}) =>  isActive ? styles.active : styles.link}><CgProfile/>Profile</NavLink></li>
                <li className={styles.navItem}><NavLink to="/Invitations" className={({isActive}) =>  isActive ? styles.active : styles.link}><RiCalendarTodoFill/>Invitations</NavLink></li>
                <li className={styles.navItem}><NavLink to="/Create-band" className={({isActive}) =>  isActive ? styles.active : styles.link}><TbPencilExclamation/>BandCreator</NavLink></li>
                <li className={styles.navItem}><NavLink to="/Settings" className={({isActive}) =>  isActive ? styles.active : styles.link}><FiSettings/>Settings</NavLink></li>
            </ul>
            <div className={styles.log_back}><Link to="/Login" className={styles.login}>Login</Link><br />
            <Link to="/register" className={styles.register}>Register</Link></div>
        </nav>
    )
}

export default Navbar;