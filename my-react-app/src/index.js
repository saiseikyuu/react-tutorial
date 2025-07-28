import ReactDOM from "react-dom/client";
import React from "react";
import Shanghai from "./Fruit.js";

export default function App() {
  return (
    <Shanghai/>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Shanghai />);