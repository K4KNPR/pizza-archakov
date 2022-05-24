import React, {FC} from 'react';
import {HeaderCart} from "./HeaderCart";
import pizzaLogo from '../assets/img/pizza-logo.svg'

export const Header: FC = () => {
    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="header__logo">
                        <img width="38" src={pizzaLogo} alt="Pizza logo"/>
                        <div>
                            <h1>React Pizza</h1>
                            <p>самая вкусная пицца во вселенной</p>
                        </div>
                    </div>
                    <HeaderCart/>
                </div>
            </div>
        </>
    );
};
