import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import {Outlet} from 'react-router-dom';

const Root = () => {
    return (
        <div>
            
            <Outlet />
            <Navbar />
            <Footer />
       
        </div>
    )
}

export default Root;