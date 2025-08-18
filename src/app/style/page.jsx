"use client"

import { useState } from "react"

function Style() {
    const [style, setStyle] = useState({backgroundColor: 'aqua'})
  return (
    <div>
        <h1>Style Page</h1>
        <h2 style={style}>Hello</h2>
        <button onClick={() => setStyle({backgroundColor: 'red'})}>Change Bg Color</button>
    </div>
  )
}

export default Style