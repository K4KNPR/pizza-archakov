import React, {FC, useState} from 'react';


const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

export const Categories: FC = () => {
    const [activeCategory, setActiveCategory] = useState(0)
    return (
        <div className="categories">
            <ul>
                {categories.map((cat,i) =>
                    <li className={i === activeCategory ? "active" : ''} onClick={() => setActiveCategory(i)}>{cat}</li>)}
            </ul>
        </div>
    );
};
