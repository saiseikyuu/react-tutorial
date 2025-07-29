import React, { useState } from "react";

function FavoriteColor() {
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1996");
  const [color, setColor] = useState("Red");

  return (
 <>
  <h1>My {brand}</h1>
  <p>It is a {color} {model} from {year}</p>

 </>
  );
}

export default FavoriteColor;
