import React, {FC} from 'react';
import styles from './Search.module.scss'
import search from '../../assets/img/search.svg'
import clear from '../../assets/img/delete.svg'

export const Search: FC = () => {
    return (
        <div className={styles.root}>
            <img className={styles.icon} src={search}/>
            <input className={styles.search} placeholder={'Название пиццы'}/>
            <img className={styles.clear} src={clear}/>
        </div>
    );
};
