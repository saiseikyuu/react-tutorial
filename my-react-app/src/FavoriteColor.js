import React, { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState("");

  return (
 <>
  <h1>My Favorite color is {color}</h1>
 </>
  );
}

export default FavoriteColor;
