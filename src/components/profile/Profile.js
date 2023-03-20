import React from 'react';
import Followers from './FollowersCard';
import UserCard from './UserCard';
import styles from './Profile.module.scss'


const Profile = ({ data, followersData }) => {
    return (
        <section>
            <div className="container">
                <div className={styles.profile}>
                    <UserCard data={data} />
                    <Followers followersData={followersData} />
                </div>
            </div>
        </section>
    );
};

export default Profile;
