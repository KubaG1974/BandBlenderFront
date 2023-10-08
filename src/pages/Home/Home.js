import React from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import ImageBox from '../../components/ImageBox/ImageBox';

class Home extends React.Component {
    render() {
        return (
            <div className={styles.content}>
                <h1>Welcome to BandBlender!</h1>
                
                <h2>MUSIC  TASTES  BETTER  TOGETHER</h2>
                
            <Link to="/Login" className={styles.login}>Login</Link>
            <Link to="/ghost" className={styles.ghost}>Gość</Link>

            <p>Bands</p>
            <Link to="/band" className={styles.band}><ImageBox title="To jest panda" imageurl="https://scontent.fktw4-1.fna.fbcdn.net/v/t39.30808-6/346945448_957112282373228_1484159013551453028_n.jpg?stp=dst-jpg_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=49d041&_nc_ohc=UqZm33DKXNsAX_6s6-x&_nc_ht=scontent.fktw4-1.fna&oh=00_AfC3A91y6_9s_cAKla3jPaSvq4ynejNb77WS2QD5ysYrAg&oe=65097F4C" /></Link>
            


            </div>
        );
    }
}

export default Home;
