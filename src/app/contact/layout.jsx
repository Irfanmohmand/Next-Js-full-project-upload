"use client"
import { usePathname } from "next/navigation"

export default function contactLayout({children}){
    const currentPathName = usePathname();
    return (
        <>
        {
            currentPathName !== "/contact/company" ? <h1>Common layout for contact</h1> : null
        }
        {children}

        </>
    )
}