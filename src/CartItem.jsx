import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CreateSlice';
import './CartItem.css';
import { isArrWithContent, isEmptyObj } from './assets/globalFuncs';

const Cart = ({ onContinueShopping }) => {
  const {totalQuantity, setTotalQuantity} = useState(0);
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let totalCost = 0;

    if (isArrWithContent(cart)){
        cart.forEach((item) => {
            totalCost += item.cost * item.quantity;
        });
    }

    return totalCost;
  };

  const handleContinueShopping = (e) => {
    if (typeof(onContinueShopping) == "function"){
        onContinueShopping()
    }
  };

  const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future reference');
  };

  const handleIncrement = (item) => {
    if (!isEmptyObj(item)){
        let currentQuantity = item.quantity;
        let newQuantity = currentQuantity + 1;
        let data = {};
        data.item = item;
        data.newQuantity = newQuantity;

        dispatch(updateQuantity(data));
        setTotalQuantity(totalQuantity + 1)
    }
  };

  const handleDecrement = (item) => {
    if (!isEmptyObj(item)){
        let currentQuantity = item.quantity;
        if (currentQuantity > 0){
            let newQuantity = currentQuantity - 1;
            let data = {};
            data.item = item;
            data.newQuantity = newQuantity;

            dispatch(updateQuantity(data));
            setTotalQuantity(totalQuantity - 1);
        }
    }
  };

  const handleRemove = (item) => {
    if (!isEmptyObj(item)){
        dispatch(removeItem(item));
        setTotalQuantity(totalQuantity - 1);
    }
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    console.log('calculateTotalCost', item)
    let totalCost = 0;

    if (!isEmptyObj(item)){
        totalCost = item.cost * item.quantity;
    }

    return totalCost;
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">${item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={(e) => handleCheckoutShopping(e)}>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;


