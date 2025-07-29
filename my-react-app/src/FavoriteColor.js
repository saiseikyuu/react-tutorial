import React, { useState } from "react";

function FavoriteColor() {
  const [car, setCar] = useState({
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "blue"
  });
  
  const updateColor = () => {
    setCar(prevCar => {
      return {
        ...prevCar,
        color: prevCar.color === "blue" ? "red" : "blue"
      };
    })
  }

  return (
 <>
  <h1>My {car.brand}</h1>
  <p>It is a {car.color} {car.model} from {car.year}</p>
  <button onClick={updateColor}>Change color</button>
 </>
  );
}

export default FavoriteColor;
