import Link from "next/link";


function Employees() {
  return (
    <div>
        <h1>Employees</h1>
        <Link href='/employees/irfan'>Irfan</Link>
        <Link href='/employees/waheed'>Waheed</Link>
        <Link href='/employees/tahir'>Tahir</Link>
    </div>
  )
}

export default Employees;