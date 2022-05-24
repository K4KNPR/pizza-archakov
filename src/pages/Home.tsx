import React, {FC, useEffect, useState} from 'react';
import {Categories} from "../components/Categories";
import {Sorting} from "../components/Sorting";
import {PizzaSkeleton} from "../components/PizzaCart/PizzaSkeleton";
import {Pizza, PizzaCart} from "../components/PizzaCart/PizzaCart";
import axios from "axios";
import {apiURL} from '../config/api'


export const Home: FC = () => {
    const [pizzas, setPizza] = useState<Pizza[]>([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        axios.get(apiURL)
            .then((res) => {
                setPizza(res.data)
                setIsLoading(false)
            })
    }, [])
    return (
        <div className="container">
            <div className="content__top">
                <Categories/>
                <Sorting/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading ? [...new Array(6)].map((_, i) => <PizzaSkeleton key={i}/>)
                        : pizzas.map(pizza => <PizzaCart key={pizza.id} {...pizza}/>)
                }
            </div>
        </div>
    );
};
