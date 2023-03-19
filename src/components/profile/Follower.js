import React from 'react';
import styles from './Profile.module.scss';
const Follower = () => {
    return (
        <article>
            <img
                src="https://avatars.githubusercontent.com/u/42133389?v=4"
                alt="John Smilga"
            />
            <div className={styles['followers-info']}>
                <h4>John Smilga</h4>
                <a
                    className={styles['follow-link']}
                    href="https://github.com/john-smilga"
                >
                    https://github.com/john-smilga
                </a>
            </div>
        </article>
    );
};

export default Follower;
