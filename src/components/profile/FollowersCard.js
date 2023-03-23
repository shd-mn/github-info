import React from 'react';
import Follower from './Follower';
import styles from './Profile.module.scss';

const Followers = ({ followersData }) => {
    return (
        <div className={`${styles.card} ${styles['followers-card']}`}>
            <div className={styles.followers}>
                {
                    followersData?.map(followers => <Follower key={followers.id} followers={followers} />)
                }
            </div>
        </div>
    );
};

export default Followers;
