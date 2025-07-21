import React from 'react';
import ReactDOM from 'react-dom/client';

const fruits = ['Apple', 'Banana', 'Cherry'];

const listItems = fruits.map((fruit) => 
  <li>{fruit}</li>
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(listItems);