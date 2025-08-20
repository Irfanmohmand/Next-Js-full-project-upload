import { Poppins } from "next/font/google";
import { Cedarville_Cursive } from "next/font/google";

// const poppins = Poppins({
//     weight: "600",
//     subsets: ['latin'],
//     display: 'swap'
// })

const cursive = Cedarville_Cursive({
    weight: "400",
    subsets: ['latin'],
    display: 'swap'
})

function FontOptimization() {
  return (
    <div>
        {/* <h1 className={poppins.className}>Font Optimization in Next Js 14</h1> */}
        <h1 className={cursive.className}>Font Optimization in Next Js 14</h1>

    </div>
  )
}

export default FontOptimization;