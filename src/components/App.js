import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from 'react';

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [isDarkMode,toggleMode]= useState(true);
  function clickOn(){
    
    toggleMode( !isDarkMode);
  
  }
  const appClass = !isDarkMode ? 'App light':'App dark';

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={clickOn}>{!isDarkMode ? 'App light':'App dark'}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
