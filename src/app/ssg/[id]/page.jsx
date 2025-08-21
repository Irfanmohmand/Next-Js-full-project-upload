import getData from "../../../../service/getData";

async function UserId(props) {
    const data = await getData();
    const users = await data;
    // console.log(props.params.id);
    const userId = props.params.id;
    const userInfo = users[userId - 1]
    
  return (
    <div>
        <h1>User Info</h1>
        <h2> User Id: {userInfo.id} </h2>
        <h2> User Name: {userInfo.username} </h2>
        <h2> User Email: {userInfo.email} </h2>
    </div>
  )
}

export default UserId;


const generateStaticParams = async() =>{
    const data = await getData();
    const users = await data;
    return users.map((user) =>({
        id: user.id.toString()
    }))
};