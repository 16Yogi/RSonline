import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
export default function Delete() {
    
    const { id } = useParams(); // Assuming you want to get the ID from the route parameters
    const deleteuser = async (id) => {
      

   
  try {
    // Specify the URL with the user ID in the path
    const url = `http://localhost:8000/elecitemdelete/${id}`; // Replace with your API endpoint

    const response = await fetch(url, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Handle successful deletion here
  } catch (error) {
    // Handle errors here
    console.error("An error occurred:", error);
  }
};

useEffect(()=>{
    deleteuser(id)
},[id])

    return (
    <>
       
       <div>
          <h3>Delete component</h3>
       </div>
    </>
    )
}
