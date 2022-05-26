import React, {FC, useState} from 'react';
import styles from './Search.module.scss'
import searchIcon from '../../assets/img/search.svg'
import clearIcon from '../../assets/img/delete.svg'

export interface ISearch {
    search: string,
    setSearch: Function
}

export const Search: FC<ISearch> = ({search, setSearch}) => {



    return (
        <div className={styles.root}>
            <img className={styles.icon} src={searchIcon}/>
            <input onChange={event => setSearch(event.target.value)} value={search} className={styles.search}
                   placeholder={'Название пиццы'}/>
            {
                search &&
                <img onClick={event => setSearch('')} className={styles.clear} src={clearIcon}/>
            }
        </div>
    );
};
