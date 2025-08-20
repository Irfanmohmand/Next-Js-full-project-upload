"use client"

import Script from "next/script";

function ScriptComponent() {
  return (
    <div>
        <h1>ScriptComponent</h1>
        <Script src="/feature.jsx" onLoad={() => alert("Script executed")} />
    </div>
  )
}

export default ScriptComponent;