
import React, { useState } from 'react';
import ProductList from './ProductList';
import CartItem from './CartItem';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  
  const [showProductList, setShowProductList] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  const continueToShopping = () => {
    setShowCart(false)
  }

  const goToHome = () => {
    setShowProductList(false);
  }

  const goToCart = () => {
    setShowCart(true)
  }

  return (
    <div className="app-container">
      <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
        <div className="background-image"></div>
        <div className="content">
         <div className="landing_content">
         <h1>Welcome To Paradise Nursery</h1>
          <div className="divider"></div>
          <p>Where Green Meets Serenity</p>
         
          <button className="get-started-button" onClick={handleGetStartedClick}>
            Get Started
          </button>
         </div>
          <div className="aboutus_container">
          <AboutUs/>
          </div>
          </div>

      </div>
      {
        !showCart
          ? <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
              <ProductList onGoToHome={goToHome} onContinueShopping={continueToShopping} onGoToCart={goToCart}/>
            </div>
          : null
      }
      <div id="cartContent" className={`cart-content-container ${showCart ? 'visible' : ''}`}>
        <CartItem onGoToHome={goToHome} onContinueShopping={continueToShopping} onGoToCart={goToCart}/>
    </div>
    </div>
  );
}

export default App;



