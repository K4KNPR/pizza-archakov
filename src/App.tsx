import React from 'react';
import './scss/app.scss';
import {Header} from "./components/Header";
import {Categories} from "./components/Categories";
import {Sorting} from "./components/Sorting";
import {PizzaCart} from "./components/PizzaCart";

import pizzas from "./assets/pizza.json"
function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header/>
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories/>
              <Sorting/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {
                pizzas.map(pizza => <PizzaCart {...pizza}/>)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
