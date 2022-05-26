import React, {FC, useEffect, useState} from 'react';
import {Categories} from "../components/Categories";
import {Sorting} from "../components/Sorting";
import {PizzaSkeleton} from "../components/PizzaCart/PizzaSkeleton";
import {Pizza, PizzaCart} from "../components/PizzaCart/PizzaCart";
import axios from "axios";
import {apiURL} from '../config/api'
import {Pagination} from "../components/Pagination/Pagination";
import {ISearch} from "../components/Search/Search";

const ascDesc = ['asc', 'desc']

export const Home: FC<ISearch> = ({search}) => {
    const [pizzas, setPizza] = useState<Pizza[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [activeCategory, setActiveCategory] = useState(0)
    const [orderType, setOrderType] = useState(1)
    const [sortVariant, setSortVariant] = useState({name: 'популярности', sort: 'rating'},)

    const [currentPage, setCurrentPage] = useState(1)
    useEffect(() => {

        if (search !== '')  setActiveCategory(0)
        setIsLoading(true)
        axios.get(apiURL, {
            params:
                {
                    search: search !== '' ? search : '',
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
    }, [activeCategory, sortVariant, orderType, search, currentPage])
    return (
        <div className="container">
            <div className="content__top">
                <Categories categoryId={activeCategory} setCategoryId={setActiveCategory}/>
                <Sorting orderType={orderType} setOrderType={setOrderType} sortVariant={sortVariant}
                         setSortVariant={setSortVariant}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading ? [...new Array(6)].map((_, i) => <PizzaSkeleton key={i}/>)
                        : pizzas.map(pizza => <PizzaCart key={pizza.id} {...pizza}/>)
                }
            </div>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    );
};
