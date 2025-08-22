import React from 'react'

function EnvironmentVariables() {
    // console.log(process.env);
    console.log(process.env.GOOGLEAPIMAPKEY);
    
    
  return (
    <div>
        <h1>EnvironmentVariables in next js 14</h1>
        {/* {
            process.env.NODE_ENV == "development" ? <h1>Development Mode</h1> : <h1>Production Mode</h1>
        } */}
    </div>
  )
}

export default EnvironmentVariables