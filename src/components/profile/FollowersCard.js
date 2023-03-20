import React from 'react';
import Follower from './Follower';
import styles from './Profile.module.scss';

const Followers = ({ followersData }) => {
    return (
        <div className={`${styles.card} ${styles['followers-card']}`}>
            <div className={styles.followers}>
                {
                    followersData?.map((followers, index) => <Follower key={index} followers={followers} />)
                }
            </div>
        </div>
    );
};

export default Followers;
