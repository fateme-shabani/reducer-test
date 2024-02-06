import React from "react";
import Card from "./Card";

const CardList = ({ products, dispatch }) => {
  return (
    <div>
      {products.map((item) => {
        return <Card key={item.id} data={item} dsp={dispatch} />;
      })}
    </div>
  );
};

export default CardList;
