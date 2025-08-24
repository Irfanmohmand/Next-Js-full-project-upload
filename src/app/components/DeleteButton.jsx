'use client'

const DeleteButton = ({id}) => {
    // console.log(id);

    const deleteEmployee = async() =>{
        let data = await fetch(`http://localhost:3000/api/employee/${id}`, {
            method: "DELETE"
        });
        data = await data.json();
        if(data.success){
            alert(`Employee deleted successfully.${id}`)
        }
        else{
            alert("Faild")
        }
    }
    
  return (
    <div>
        <button onClick={deleteEmployee}>Delete</button>
    </div>
  )
}

export default DeleteButton