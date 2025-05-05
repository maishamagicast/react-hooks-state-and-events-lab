import React from "react";
import { useState } from 'react';


function Item({ name, category }) {
  const [inCart, placeInCart]= useState(false);
  function clickOn(){
    placeInCart(!inCart);
  }
  const itemInfo = !inCart ? 'in-cart': '';
  const itemStatus = !inCart ? 'Add to Cart' : 'Remove From Cart';
  return (
    <li className={itemInfo}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={clickOn}>{itemStatus}</button>
    </li>
  );
}

export default Item;
