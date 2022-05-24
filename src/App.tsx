import React from 'react';
import './scss/app.scss';
import {Header} from "./components/Header";
import {Category} from "./components/Category";
import {Sorting} from "./components/Sorting";
import {PizzaCart} from "./components/PizzaCart";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header/>
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Category/>
              <Sorting/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              <PizzaCart/>
              <PizzaCart/>
              <PizzaCart/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
