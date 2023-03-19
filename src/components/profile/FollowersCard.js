import React from 'react';
import Follower from './Follower';
import styles from './Profile.module.scss';

const Followers = () => {
    return (
        <div className={`${styles.card} ${styles['followers-card']}`}>
            <div className={styles.followers}>
                <Follower />
                <Follower />
                <Follower />
                <Follower />
                <Follower />
            </div>
        </div>
    );
};

export default Followers;
