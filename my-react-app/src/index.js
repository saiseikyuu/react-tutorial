import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function Form(){
  const [name, setName] = useState('');

  return(
    <form>
      <label>name
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
      </label>
    </form>
  )
} 




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Form/>);

