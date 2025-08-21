// What is difference b/w public assets and static assets.
// 1. in public assets we can access all the code or script in every component
// 2.  but in static assets we can just access the code in the component which we are using

function StaticAssests() {
  return (
    <div>
      <h1>StaticAssests in next js 14</h1>
      <img src="/file.svg" alt="file image" width={200} height={200} />
    </div>
  )
}

export default StaticAssests;