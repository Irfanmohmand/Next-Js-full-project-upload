"use client";

const Delete = ({ id }) => {
  const deletData = async () => {
    const response = await fetch(`/api/db-emp/${id}`, {
      method: "DELETE",
    });

    const data = await response.json();
    if (data.success) {
      alert("Employee deleted successfully.");
    } else {
      alert("Try Again.");
    }
  };

  return <button onClick={deletData}>Delete</button>;
};

export default Delete;
