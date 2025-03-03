import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import {useState} from "react";

function App() {
  const[isDark, setIsDark] = useState(false);

function buttonClick(){
  setIsDark((isDark)=> !isDark);
}

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  
  return (
    <div className={isDark? " dark" : "light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick= {buttonClick}> Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;