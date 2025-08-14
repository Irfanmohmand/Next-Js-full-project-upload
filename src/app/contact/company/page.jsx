"use client"
import { useRouter } from "next/navigation"

function page() {
    let router = useRouter();
  return (
    <div>
        <h1>Company Contact</h1>
        <button onClick={() => router.push('/contact')}>Go Back</button>
    </div>
  )
}

export default page