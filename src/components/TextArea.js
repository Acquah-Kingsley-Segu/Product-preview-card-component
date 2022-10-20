import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "../TextArea.css";

function TextArea() {
  return (
    <div className="textArea">
      <p className="para1">perfume</p>
      <h1 className="headerText">Gabrielle Essence Eau De Parfum</h1>
      <p className="para2">
        A floral, solar and voluptous interpretation composed by Oliver Polge,
        Perfurmer-Creator for the House of CHANEL.
      </p>
      <div className="priceTags">
        <span className="span1">$149.99</span>
        <span className="span2">$169.99</span>
      </div>
      <button>
        <FaShoppingCart />
        <span className="buttonText">Add to Cart</span>
      </button>
    </div>
  );
}

export default TextArea;
