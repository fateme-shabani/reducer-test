import React from "react";
import Card from "./Card";


const CardList = ({ products }) => {
  return (
    <div>
      {products.map((item) => {
        return <Card data={item}/>;
      })}
    </div>
  );
};

export default CardList;
