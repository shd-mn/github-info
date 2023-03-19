import React from 'react';
import StatsCardItem from './StatsCartItem';
import { Repos, Followers, Following } from '@/icons/icons'
import styles from './StatsCard.module.scss'

const StatsCard = () => {
    return (
        <section>
            <div className="container">
                <div className={styles['stats-container']}>
                    <StatsCardItem icon={<Repos />} text='repos' num='244' />
                    <StatsCardItem icon={<Followers />} text='followers' num='244' />
                    <StatsCardItem icon={<Following />} text='following' num='244' />
                    <StatsCardItem icon={<Repos />} text='gists' num='244' />
                </div>

            </div>
        </section>
    );
};

export default StatsCard;
