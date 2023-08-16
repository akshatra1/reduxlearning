import React from "react";

function Home() {
  return (
    <>
      <div>
        <div className="add-to-cart">
          <h1>cart </h1>
        </div>
        <h1>home component</h1>
        <div className="cart-warpper">
          <div className="img-wrapper item">
            <img src="/" />
          </div>
          <div className="text-wrapper item">
            <span>I-phone</span>
            <span>price:</span> 
          </div>
          <div className="btn-wrapper item">
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
