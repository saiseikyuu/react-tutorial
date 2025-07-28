import React, { useState } from "react";

function Shanghai() {
  const [bgClass, setBgClass] = useState("bg-red-500");

  return (
    <div className={`${bgClass} h-screen flex flex-col items-center justify-center gap-6`}>
      <h1 className="text-white text-2xl">This is a {bgClass} background</h1>
      <div className="flex gap-4">
        <button onClick={() => setBgClass("Blue")} className="bg-white text-blue-500 px-4 py-2 rounded">Blue</button>
        <button onClick={() => setBgClass("Red")} className="bg-white text-red-500 px-4 py-2 rounded">Red</button>
        <button onClick={() => setBgClass("Green")} className="bg-white text-green-500 px-4 py-2 rounded">Green</button>
        <button onClick={() => setBgClass("Pink")} className="bg-white text-green-500 px-4 py-2 rounded">Pink</button>
      </div>
    </div>
  );
}

export default Shanghai;
