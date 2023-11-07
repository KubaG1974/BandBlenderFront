import Header from '../components/Shared/Header'
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Shared/Footer';
import {Outlet} from 'react-router-dom';
import styles from './Root.module.css';

const Root = () => {
    return (
        <><Header /><div>
            <div className={styles.contentWrapper}>
                <Navbar />
                <Outlet />
            </div>

        </div><Footer /></>
    )
}

export default Root;