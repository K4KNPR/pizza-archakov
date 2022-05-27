import React, {FC, useContext, useEffect, useState} from 'react';
import {Categories} from "../components/Categories";
import {Sorting} from "../components/Sorting";
import {PizzaSkeleton} from "../components/PizzaCart/PizzaSkeleton";
import {Pizza, PizzaCart} from "../components/PizzaCart/PizzaCart";
import axios from "axios";
import {apiURL} from '../config/api'
import {Pagination} from "../components/Pagination/Pagination";
import {MyContext} from "../App";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {changeCategory} from "../store/sorting/sortingSlice";

const ascDesc = ['asc', 'desc']

export const Home: FC = () => {
    const searchContext = useContext(MyContext)

    const [pizzas, setPizza] = useState<Pizza[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useAppDispatch()
    const activeCategory = useAppSelector(((state) => state.sorting.category))
    const sortVariant = useAppSelector(((state) => state.sorting.sortVariant))
    const orderType = useAppSelector(((state) => state.sorting.orderType))

    const [currentPage, setCurrentPage] = useState(1)
    useEffect(() => {

        if (searchContext!.search !== '')  dispatch(changeCategory(0))
        setIsLoading(true)
        axios.get(apiURL, {
            params:
                {
                    search: searchContext!.search !== '' ? searchContext!.search : '',
                    order: ascDesc[+orderType],
                    sortBy: sortVariant.sort,
                    page: currentPage, limit: 4,
                    category: activeCategory !== 0 ? activeCategory : ''
                }
        })
            .then((res) => {
                setPizza(res.data)
                setIsLoading(false)
            })
    }, [activeCategory, sortVariant, orderType, searchContext!.search, currentPage])
    return (
        <div className="container">
            <div className="content__top">
                <Categories/>
                <Sorting/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading ? [...new Array(4)].map((_, i) => <PizzaSkeleton key={i}/>)
                        : pizzas.map(pizza => <PizzaCart key={pizza.id} {...pizza}/>)
                }
            </div>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    );
};
