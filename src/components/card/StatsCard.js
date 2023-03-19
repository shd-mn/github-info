import React from 'react';
import StatsCardItem from './StatsCartItem';
import { Repos, Followers, Following } from '@/icons/icons'
import styles from './StatsCard.module.scss'

const StatsCard = ({ data }) => {
    console.log(data);
    return (
        <section>
            <div className="container">
                <div className={styles['stats-container']}>
                    <StatsCardItem icon={<Repos />} text='repos' num={data.public_repos} />
                    <StatsCardItem icon={<Followers />} text='followers' num={data.followers} />
                    <StatsCardItem icon={<Following />} text='following' num={data.following} />
                    <StatsCardItem icon={<Repos />} text='gists' num={data.public_gists} />
                </div>

            </div>
        </section>
    );
};

export default StatsCard;
