import React from 'react';
import ReactDOM from 'react-dom/client';

// const fruits = ['Apple', 'Banana', 'Cherry'];

function FavoriteFruit(props) {
  return (
    <>
    <p>Shanghai is my favorite {props.red}</p>
    </>
  )

}

// const listItems = fruits.map((fruit) => 
//   <li>{fruit}</li>
// )


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteFruit red="apple"/>);

