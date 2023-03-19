import React from 'react';
import Followers from './FollowersCard';
import UserCard from './UserCard';
import styles from './Profile.module.scss'


const Profile = ({ data }) => {
    return (
        <section>
            <div className="container">
                <div className={styles.profile}>
                    <UserCard data={data} />
                    <Followers />
                </div>
            </div>
        </section>
    );
};

export default Profile;
