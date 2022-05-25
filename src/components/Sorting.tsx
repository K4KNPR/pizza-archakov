import React, {FC, useEffect, useState} from 'react';
import arrow from '../assets/img/arrow.svg'
import ASC from '../assets/img/menu-list-dropdown-svgrepo-com.svg'

const sortVariants = [
    {name: 'популярности', sort: 'rating'},
    {name: 'цене', sort: 'price'},
    {name: 'алфавиту', sort: 'алфавиту'},
]

/*const sortVariants = {
{rating: 'популярности'},
    {price: 'цене'},
    {title: 'алфавиту'},
}*/

interface Sorting {
    orderType: number,
    setOrderType: Function,
    sortVariant: {name: string, sort: string},
    setSortVariant: Function
}

export const Sorting: FC<Sorting> = ({orderType, setOrderType, sortVariant, setSortVariant}) => {
    const [popupVisible, setPopupVisible] = useState(false)
    /* useEffect(() => {
         setPopupVisible(!popupVisible)
     }, [sortVariant])*/

    const onClickSorting = (variant :{name: string, sort: string}) => {
        setSortVariant(variant)
        setPopupVisible(false)
    }
    return (
        <>
            <div className="sort">
                <div className="sort__label">
                    <div onClick={() => setPopupVisible(!popupVisible)}>
                        <img className={`sort__label__icon ${popupVisible && 'rotate'}`} src={arrow}/>
                        <b>Сортировка по:</b>
                        <span >{sortVariant.name}</span>
                    </div>
                    <img onClick={() => setOrderType(!orderType)} className={`asc-desc ${orderType ? '' : 'rotate'}`} src={ASC}/>
                </div>
                {popupVisible && <div className="sort__popup">
                    <ul>
                        {
                            sortVariants.map(
                                (variant, index) =>
                                    <li key={variant.name}
                                        className={sortVariant.sort === variant.sort ? "active" : ''}
                                        onClick={() => onClickSorting(variant)}
                                    >{variant.name}</li>
                            )
                        }
                    </ul>
                </div>}
            </div>
        </>
    );
};
