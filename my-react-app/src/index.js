import React from 'react';
import ReactDOM from 'react-dom/client';

function Form(){

  return(
    <form>
      <label>name
      <input type="text" placeholder="Enter your name" />
      </label>
    </form>
  )
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Form/>);

