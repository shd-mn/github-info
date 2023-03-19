import React from 'react';

import styles from './Profile.module.scss';

import { Company, LinkIcon, Location } from '@/icons/icons';

const UserCard = () => {
    return (
        <div className={`${styles.card}`}>
            <div className={styles.user}>
                <article>
                    <header>
                        <img
                            src="https://avatars.githubusercontent.com/u/42133389?v=4"
                            alt="John Smilga"
                        />
                        <div>
                            <h4>John Smilga</h4>
                            <p>@john_smilga</p>
                        </div>
                        <a
                            className={styles['follow-link']}
                            href="https://github.com/john-smilga"
                        >
                            follow
                        </a>
                    </header>
                    <p className={styles.bio}>Creator of Coding Addict</p>
                    <div className={styles['user-info']}>
                        <p>
                            <Company />
                            Coding Addict
                        </p>
                        <p>
                            <Location />
                            Sarasota, FL
                        </p>
                        <a href="https://www.johnsmilga.com">
                            <LinkIcon />
                            www.johnsmilga.com
                        </a>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default UserCard;
