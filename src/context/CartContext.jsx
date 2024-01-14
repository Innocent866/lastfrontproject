import React, { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const cartItemsFromLocalStorage =
  JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({children}) => {
  const token = localStorage.getItem('token')
  const [cart, setCart] = useState(cartItemsFromLocalStorage);
  let handleAddToCart = (product) => {
    const productSelected = cart.find(
      (singleCart) => singleCart._id === product._id
    );
    if (productSelected) {
      setCart(
        cart.map((oneItem) =>
          oneItem._id === product._id
            ? {
                ...productSelected,
                quantity: productSelected.quantity + 1,
              }
            : oneItem
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // function below is for handleIncrease for d cart section
  function handleIncrease(product) {
    const productSelected = cart.find(
      (singleCartItem) => singleCartItem.id === product.id
    )
    if (productSelected) {
      setCart(
        cart.map((oneItem) =>
          oneItem.id === product.id
            ? { ...productSelected, quantity: productSelected.quantity + 1 }
            : oneItem
        )
      )
    }
  }
// function below is for handleDecrease for d cart section
function handleDecrease(product) {
    const productSelected = cart.find(
      (singleCartItem) => singleCartItem.id === product.id
    )
    if (productSelected.quantity === 1) {
      setCart(
        cart.map((dd) =>
          dd.id === product.id
            ? { ...productSelected, quantity: productSelected.quantity = 1 }
            : dd
        )
      )
    } else {
      setCart(
        cart.map((dd) =>
          dd.id === product.id
            ? { ...productSelected, quantity: productSelected.quantity - 1 }
            : dd
        )
      )
    }
  }
  // getLoggedIn ftn
const [loggedIn,setLoggedIn] = useState(undefined)
  async function getLoggedIn() {
    const res = await fetch("https://gazzy.onrender.com/api/user/isloggedin", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    setLoggedIn(data)
    console.log(data);
    console.log(data);
    console.log(loggedIn);
  }
// logout ftn
  const logout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
  };

  // funtion to delete item
  function removeItem (id){
    let remove = cart.filter((cartItx)=> cartItx._id !== id );
    setCart(remove)
  }
   // reduce ftn for d cart section
   const totalPrice = cart.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  )
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem('totalPrice',JSON.stringify(totalPrice))
    getLoggedIn()
  }, [cart]);

  return <CartContext.Provider value={{
    loggedIn,
    setLoggedIn,
    logout,
    handleAddToCart,
    cart,
    setCart,
    handleIncrease,
    handleDecrease,
    totalPrice,
    removeItem
    }}>
        {children}

  </CartContext.Provider>;
};

export default CartContext