import React, { useState } from 'react';
import { useIngredientList } from '../IngredientsContext';







export const MyInventory = () => {
    return (
        <h1>My Bar</h1>
       
        
    )
}

export function DeleteFromInventory() {
    const [ingredientList, setIngredientList] = React.useState(ingredientList);
  
    const deleteItem = (index) => () =>
      setIngredientList((ingredientList) => ingredientList.filter((_, i) => i !== index));
  
    return (
      <>
        {ingredientList.map((it, index) => {
          return (
            <div key={it.name}>
              {it.name} <button onClick={deleteItem(index)}>delete</button>
            </div>
          );
        })}
      </>
    );
  }