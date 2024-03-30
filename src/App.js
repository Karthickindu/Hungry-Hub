import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";
import { useState } from "react";
import { Fragment } from "react";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} onClose={hideCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
