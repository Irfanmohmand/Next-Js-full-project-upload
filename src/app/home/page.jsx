"use client"
import { useRouter } from "next/navigation"
function page() {
  const router = useRouter();
  const handleNavigation = (routerName) => {
      router.push(routerName)
    }
  return (
    <>
    <h1>Home Page</h1>
    {/* <Link href='/about'>About</Link> */}
    <button onClick={() => handleNavigation('/about')}>About</button>
    <button onClick={() => handleNavigation('/contact')}>Contact</button>
    </>
  )
}

export default page