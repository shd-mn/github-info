import React from 'react';
import { SearchIcon } from '@/icons/icons.js';
import styles from './Search.module.scss';

const Search = () => {
    return (
        <section>
            <div className="container">
                <div className={styles.search}>
                    <form>
                        <div className={styles['search-area']}>
                            <SearchIcon />
                            <input
                                type="text"
                                placeholder="enter github user"
                                // value=""
                            />
                            <button type="submit">search</button>
                        </div>
                    </form>
                    <h3 className={styles.h3}>requests : 56 / 60</h3>
                </div>
            </div>
        </section>
    );
};

export default Search;
