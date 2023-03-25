import React, { useRef, useState } from 'react';
import Follower from './Follower';
import styles from './Profile.module.scss';
import { useSelector } from 'react-redux';
import { useGetGithubUserByFollowersQuery } from '@/services/githubUser';

const FollowersCard = () => {
    const divRef = useRef();
    const [page, setPage] = useState(1);
    const { searchUser } = useSelector(state => state.users)
    const { data, isLoading } = useGetGithubUserByFollowersQuery({ name: searchUser, page });

    const handleScroll = () => {
        const { offsetHeight, scrollHeight, scrollTop } = divRef.current;

        if (offsetHeight + scrollTop === scrollHeight)
            setPage(prev => prev + 1);
    }

    if (isLoading && !data) {
        return <div>Loading...</div>;
    }

    return (
        <div className={`${styles.card} ${styles['followers-card']}`}>
            <div className={styles.followers} ref={divRef} onScroll={handleScroll}>
                {data?.map(followers => <Follower key={followers.id} followers={followers} />)}
            </div>
        </div>
    );
};

export default FollowersCard;
