import React from "react";
import CartItem from "./CartItem";
import cartItems from "./data";
import { useGlobalContext } from "./context";



const CartContainer = () => {
  const {cart, clearCart, totalPrice} = useGlobalContext();

  const cartArray = Array.from(cart.entries());

  if (cartArray.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
        {cartArray.map((cartItem)=> {
            const [id, item] = cartItem;
            return <CartItem key={id}  {...item}/>
        })}
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className="cart-total">
            total
            <span>{totalPrice.toFixed(2)}</span>
          </h5>
        </div>
        <button
          className="btn btn-hipster"
          onClick={clearCart}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
