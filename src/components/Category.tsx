import React, {FC} from 'react';

export const Category: FC = () => {
    return (
        <>
            <div className="categories">
                <ul>
                    <li className="active">Все</li>
                    <li>Мясные</li>
                    <li>Вегетарианская</li>
                    <li>Гриль</li>
                    <li>Острые</li>
                    <li>Закрытые</li>
                </ul>
            </div>
        </>
    );
};