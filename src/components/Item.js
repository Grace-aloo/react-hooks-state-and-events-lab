import React, { useState} from "react";

function Item({ name, category }) {
  const [inCart,setCart] = useState(false)

  function HandleAddClick (){
    setCart(false)  
  }

  function handleRemoveClick(){
    setCart(true)
  }
  let button;
  if (inCart){
    
    button = <button onClick={HandleAddClick} className="add">Add to Cart</button>
  } else {
    button = <button onClick={handleRemoveClick} className="add">Remove From Cart</button>

  }

  return (
    <>
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
       {button}
    </li>
    {/* <li className="in-cart">
      <span>{name}</span>
      <span className="category">{category}</span>
      {button}
    </li> */}
    </>
  );
}

export default Item;
