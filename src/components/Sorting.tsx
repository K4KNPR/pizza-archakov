import React, {FC, useEffect, useState} from 'react';
import arrow from '../assets/img/arrow.svg'
import ASC from '../assets/img/menu-list-dropdown-svgrepo-com.svg'
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {changeOrder, changeSortVariant} from "../store/sorting/sortingSlice";

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


export const Sorting: FC = () => {
    const [popupVisible, setPopupVisible] = useState(false)
    /* useEffect(() => {
         setPopupVisible(!popupVisible)
     }, [sortVariant])*/
    const dispatch = useAppDispatch()
    const sortVariant = useAppSelector(((state) => state.sorting.sortVariant))
    const orderType = useAppSelector(((state) => state.sorting.orderType))

    const onClickSorting = (variant :{name: string, sort: string}) => {
        dispatch(changeSortVariant(variant))
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
                    <img onClick={() => dispatch(changeOrder())} className={`asc-desc ${orderType ? '' : 'rotate'}`} src={ASC}/>
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
