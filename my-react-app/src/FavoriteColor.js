import React, { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState("No Favorite Color");

  return (
 <>
  <h1>{color}</h1>
  <button onClick={() => setColor("My Favorite Color is Red")}>Set Color to Red</button>
 </>
  );
}

export default FavoriteColor;
