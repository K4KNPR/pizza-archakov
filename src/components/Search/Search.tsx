import React, {FC, useContext, useState} from 'react';
import styles from './Search.module.scss'
import searchIcon from '../../assets/img/search.svg'
import clearIcon from '../../assets/img/delete.svg'
import {MyContext} from "../../App";


export const Search: FC = () => {
    const searchContext = useContext(MyContext)

    return (
        <div className={styles.root}>
            <img className={styles.icon} src={searchIcon}/>
            <input onChange={event => searchContext!.setSearch(event.target.value)} value={searchContext!.search} className={styles.search}
                   placeholder={'Название пиццы'}/>
            {
                searchContext!.search &&
                <img onClick={event => searchContext!.setSearch('')} className={styles.clear} src={clearIcon}/>
            }
        </div>
    );
};
