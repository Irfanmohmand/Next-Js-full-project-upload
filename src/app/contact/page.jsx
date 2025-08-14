"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"

function page() {
  const router = useRouter()
  return (
    <div>
        <h1>Contact Page</h1>
        <Link href='/contact/company'>Company</Link>
        <button onClick={() => router.push('/contact/emplyee')}>Employee</button>
    </div>
  )
}

export default page