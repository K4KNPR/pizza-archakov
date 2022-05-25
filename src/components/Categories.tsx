import React, {FC, useState} from 'react';


const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

interface Category {
    categoryId: number, setCategoryId: Function
}

export const Categories: FC<Category> = (props) => {
    return (
        <div className="categories">
            <ul>
                {categories.map((cat, index) =>
                    <li key={index} className={index === props.categoryId ? "active" : ''}
                        onClick={() => props.setCategoryId(index)}>{cat}</li>)}
            </ul>
        </div>
    );
};
