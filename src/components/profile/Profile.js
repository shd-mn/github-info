import React from 'react';
import Followers from './FollowersCard';
import ProfileCard from './UserCard';
import styles from './Profile.module.scss'


const Profile = () => {
    return (
        <section>
            <div className="container">
                <div className={styles.profile}>
                    <ProfileCard />
                    <Followers />
                </div>
            </div>
        </section>
    );
};

export default Profile;
