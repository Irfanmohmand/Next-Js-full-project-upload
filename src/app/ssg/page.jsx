import Link from "next/link";
import getData from "../../../service/getData";

const StaticSiteGeneration = async() =>{
    const data = await getData();
    const users = await data;
    console.log(users);
    
    return (
        <>
        <h1>SSG in next js 14</h1>
        {
            users.map((user,i) => (
                <h3>
                    <Link href={`/ssg/${user.id}`}> {user.username} </Link>
                </h3>
            ))
        }
        </>
    )
};

export default StaticSiteGeneration;