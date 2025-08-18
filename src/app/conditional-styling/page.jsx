"use client"

import { useState } from "react"
import style from "../conditional-styling.module.css";

function ConditionalStyling() {
    const [color, setColor] = useState('blue');
    const {green} = style;
    const {pink} = style;
    const {blue} = style;
  return (
    <div>
        {/* Conditional Styling */}
        {/* <h1 className={color == 'blue' ? style.green : style.pink}>Conditional Styling</h1> */}
        {/* Use Style Attribute */}
        {/* <h1 style={{backgroundColor: color == 'blue' ? 'yellow' : 'purple'}}>Style Attribute</h1> */}
        {/* Use Id Attribute */}
        {/* <h2 id={style.my}>Id Attribute</h2> */}
        {/* Mutiple tags */}
        <h1 className={green}>Green Text</h1>
        <h1 className={pink}>Pink Text</h1>
        <h1 className={blue}>Blue Text</h1>


    </div>
  )
}

export default ConditionalStyling