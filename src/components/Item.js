import React, { useState} from "react";

function Item({ name, category }) {
  const [inCart,setCart] = useState("")

  function HandleAddClick (){
    setCart("")  
  }

  function handleRemoveClick(){
    setCart("in-cart")
  }
  let button;
  if (inCart){
    
    button = <button onClick={HandleAddClick} className="add">Add to Cart</button>
  } else {
      // <li className="in-cart">
      //   <span>{name}</span>
      //   <span className="category">{category}</span>
      // </li> 
    button = <button onClick={handleRemoveClick} className="add">Remove From Cart</button>
  
  }

  return (
    <>
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
       {button}
    </li>
   
    </>
  );
}

export default Item;
