import React, { useState } from "react";

function FavoriteColor() {
  const [car, setCar] = useState({
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "blue"
  });
  

  return (
 <>
  <h1>My {car.brand}</h1>
  <p>It is a {car.color} {car.model} from {car.year}</p>
  <button onClick={() => setCar({color:"red"})}>Change color</button>
 </>
  );
}

export default FavoriteColor;
