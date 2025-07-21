import React from 'react';
import ReactDOM from 'react-dom/client';

function Gun() {
  const shoot = () => {
    alert('Bang! Bang!');
  }

  return (
    <button onClick={shoot}>Shoot Gun</button>
  )
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Gun/>);

