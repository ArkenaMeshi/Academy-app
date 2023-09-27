import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../App.css"




const UserList=(props)=>{
    const[userslist,setUsersList]=useState([])
    const navigate= useNavigate()
    const [updated,setUpdated]= useState(false)
    const [sortOrder, setSortOrder] = useState("asc");

    useEffect(()=>{
        axios.get("http://localhost:8000/user")
        .then((res)=>{
        //     console.log(res.data);
        //         setUsersList(res.data);
        // })
        //     .catch((err)=>{
        //         console.log(err);
        //     })
        // }, [updated])
        const sortedUsers = res.data.slice(); // Create a copy of the original data
        if (sortOrder === "asc") {
          sortedUsers.sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically in ascending order
        } else {
          sortedUsers.sort((a, b) => b.name.localeCompare(a.name)); // Sort alphabetically in descending order
        }
        setUsersList(sortedUsers);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [updated, sortOrder]);

    const deleteUser=(id) =>{
        axios.delete(`http://localhost:8000/user/${id}`)
        .then( res => {
            // console.log(res.data);
            // setUsersList((prevUsers)=>
            // prevUsers.filter((user)=>user._id !== id)
            // )
            console.log(res.data);
            setUpdated(!updated)
        })
        .catch( (err )=>{
             console.log(err)

          });
    }
    return (
        <div className="user-list-container">
          {userslist &&
            userslist.map((user, index) => {
              return (
                
                <div className="user-item" key={index}>
            < div className="emri"> 
                  <img className="user-image" src={user.image}  />
                  
                  {user.name}
                  {user.role === "teacher" ? <p className="role">{user.role}</p> : ""}
                  </div>
                  <div className="buttonat">
                  <button className="view-more" onClick={() => navigate(`/user/${user._id}`)}>View Profile</button>
                  <button className="button" onClick={() => deleteUser(user._id)}>Delete</button>
                </div>
                </div>
              );
            })}
        </div>
      );
}



export default UserList;