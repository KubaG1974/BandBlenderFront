import React from 'react';
import styles from './Home.module.css';


class Home extends React.Component {
    render() {
        return (
            <div className={styles.header}>
                <h1>Welcome to BandBlender!</h1>
                <br/> <br/>
                <h2>MUSIC  TASTES  BETTER  TOGETHER</h2>
                <br/> <br/>
                <p>Your one-stop platform to find the perfect band members.
                BandBlend is an online application that makes it easier for artists to find music partners. Thanks to it, you will find the perfect match and start creating music together with other passionate people.</p>
            </div>
        );
    }
}

export default Home;
