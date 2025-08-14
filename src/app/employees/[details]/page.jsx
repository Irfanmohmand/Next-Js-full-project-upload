'use client'

const Employees = ({params}) =>{
    return (
        <>
        <h1>Employee Details..</h1>
        <h3>Employee Name: {params.details} </h3>
        </>
    )
};


export default Employees;