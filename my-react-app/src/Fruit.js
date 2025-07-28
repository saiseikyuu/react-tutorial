import React, { useState } from "react";
function Shanghai() {

    const [color, setColor] = useState("red");
    return (

        <>
            <h1>Current Color is {color}</h1>
            <button onClick={() => setColor("Blue")}>Blue</button>
            <button onClick={() => setColor("Red")}>Red</button>
            <button onClick={() => setColor("Green")}>Green</button>
        </>
    )
}

export default Shanghai;