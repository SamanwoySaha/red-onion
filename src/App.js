import React, { createContext, useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import FoodDetail from './components/FoodDetail/FoodDetail';
import Cart from './components/Cart/Cart';
import ShippingDetail from './components/ShippingDetail/ShippingDetail';
import Login from './components/Login/Login';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

export const CartContext = createContext();
export const ShippingContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [shippingInfo, setShippingInfo] = useState({});

  return (
    <CartContext.Provider value={[cart, setCart]} className="app">
      <ShippingContext.Provider value={[shippingInfo, setShippingInfo]}>
        <Router>
          <Header></Header>
          <Banner></Banner>
          <Switch>
            <Route path="/shop">
              <Shop></Shop>
              <About></About>
            </Route>
            <Route path="/foodDetail/:foodId">
              <FoodDetail></FoodDetail>
            </Route>
            <Route path="/cart">
              <Cart></Cart>
            </Route>
            <Route path="/shipping">
              <ShippingDetail></ShippingDetail>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/">
              <Shop></Shop>
              <About></About>
            </Route>
            <Route path="*">
              <NoMatch></NoMatch>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </ShippingContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
