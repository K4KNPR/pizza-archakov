import React, {FC, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {changeCategory} from "../store/sorting/sortingSlice";


const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']


export const Categories: FC = () => {

    const dispatch = useAppDispatch()
    const activeCategory = useAppSelector(((state) => state.sorting.category))

    return (
        <div className="categories">
            <ul>
                {categories.map((cat, index) =>
                    <li key={index} className={index === activeCategory ? "active" : ''}
                        onClick={() => dispatch(changeCategory(index))}>{cat}</li>)}
            </ul>
        </div>
    );
};
