import React, {FC} from 'react';
import style from './NotFound.module.scss'

console.log(style);
export const NotFound: FC = () => {
    return (
        <div className={style.root}>
            <h1>404</h1>
            <p>
                Страница не найдена :(
            </p>
        </div>
    );
};
