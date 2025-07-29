import ReactDOM from "react-dom/client";
import React from "react";
import FavoriteColor from "./FavoriteColor.js";

export default function App() {
  return (
    <FavoriteColor/>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);