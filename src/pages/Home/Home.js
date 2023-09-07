import React from 'react';
import styles from './Home.module.css';


class Home extends React.Component {
    render() {
        return (
            <div className={styles.header}>
                <h1>Welcome to BandBlender!</h1>
                <h2>M U S I C  T A S T E S  B E T T E R  T O G E T H E R</h2>
                <p>Your one-stop platform to find the perfect band members.</p>
                <p>BandBlend is an online application that makes it easier for artists to find music partners. Thanks to it, you will find the perfect match and start creating music together with other passionate people.</p>
            </div>
        );
    }
}

export default Home;
