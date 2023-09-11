import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import {Outlet} from 'react-router-dom';
import styles from './Root.module.css';

const Root = () => {
    return (
        <div>
            
            <div className={styles.contentWrapper}>
                <Navbar />
                <Outlet />
            </div>
            
            <Footer />
       
        </div>
    )
}

export default Root;