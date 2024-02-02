import React, { useEffect, useReducer, useState } from "react";
import { reducer } from "../myReducers/reducer1";
import CardList from "./CardList";

const Product = () => {
  const [product, setproduct] = useState("");
  const [price, setprice] = useState(0);
  const [newProduct, dispatch] = useReducer(reducer, []);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "add", payload: { name: product, p: price } });
  };
  const productChangeHandler = (e) => {
    setproduct(e.target.value);
  };
  const priceChangeHandler = (e) => {
    setprice(e.target.value < 0 ? 0 : e.target.value);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" value={product} onChange={productChangeHandler} />
        <input type="number" value={price} onChange={priceChangeHandler} />
        <button>Add</button>
      </form>
      <CardList products={newProduct}/>
    </div>
  );
};

export default Product;
