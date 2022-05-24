import React, {FC} from 'react';
import {HeaderCart} from "./HeaderCart";
import pizzaLogo from '../assets/img/pizza-logo.svg'
import {Link} from "react-router-dom";

export const Header: FC = () => {
    return (
        <>
            <div className="header">
                <div className="container">
                    <Link to={'/'} className="header__logo">
                        <img width="38" src={pizzaLogo} alt="Pizza logo"/>
                        <div>
                            <h1>React Pizza</h1>
                            <p>самая вкусная пицца во вселенной</p>
                        </div>
                    </Link>
                    <HeaderCart/>
                </div>
            </div>
        </>
    );
};
