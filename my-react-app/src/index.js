import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function Form(){
  const [name, setName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`A name submitter: ${name}`)
  }


  return(
    <form>
      <label>name
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
      </label>
      <input type="submit" value="Submit" onClick={handleSubmit} />
    </form>
  )
} 




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Form/>);

