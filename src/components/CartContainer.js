import React from "react";
import CartItem from "./CartItem";
import { connect } from 'react-redux'
import {clearCart} from '../redux'

const CartContainer = ({ cartItems = [],total, clearCart }) => {
  if (cartItems.length === 0) {
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
      <article>        
        {cartItems.map(item => {
          return <CartItem key={item.id} {...item} />;
          
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
          total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={clearCart}>clear cart</button>
      </footer>
    </section>
  );
};

const mapStateToProps = state =>{
  console.log(state)
  return{
    cartItems: state.cart.cartItems,
    total: state.cart.total
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    clearCart: () => dispatch(clearCart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
