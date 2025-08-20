import React from 'react'

function DynamicMetaData() {
  return (
    <div>
        <h1>Dynamic MetaData in next js 14</h1>
    </div>
  )
}

export default DynamicMetaData;

export function generateMetadata(){
    return {
        title: "My First Project",
        description: "This is my first project in next js"
    }
}