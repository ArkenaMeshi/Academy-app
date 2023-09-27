import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = (props) => {
    // const { updated, setUpdated } = props;
    const navigate=useNavigate();
  const { id } = useParams();
  const [user , setUser]=useState({
    name:"",
    email:"",
    password:"",
    image :"",
    role:""

  })
  
  

  useEffect(() => {
    axios
      .get(`http://localhost:8000/user/${id}`)
      .then((res) => {
        setUser(res.data);
     
        
      })
      .catch((err) => console.log(err));
  }, [id]);

 

  const updateUser = (e) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:8000/user/edit/${id}`,user)
       
      
      .then((res) => {
        console.log(res);
        console.log(res.data);
      
        navigate("/user");
      })
      .catch((err) => console.log(err));
     
  };

  return (
    <div  className="update-kryesor">
     <div>
      <h1>Update a User</h1>
      <form onSubmit={updateUser}  className="update-user">

        <p>
          <label>Name</label>
          <br />
          <input className="my-input"
            type="text"
            name="name"
        value={user.name}
            onChange={(e) => {
              setUser({...user, name: e.target.value});
            }}
          />
        </p>
        <p>
          <label>Email</label>
          <br />
          <input className="my-input"
            type="text"
            name="email"
            value={user.email}
            onChange={(e) => {
                setUser({...user, email: e.target.value});
            }}
          />
        </p>
        <p>
          <label>Password</label>
          <br />
          <input className="my-input"
            type="text"
            name="password"
          value={user.password}
            onChange={(e) => {
                setUser({...user, password: e.target.value});
            }}
          />
        </p>
        <p>
          <label>Image</label>
          <br />
          <input className="my-input"
            type="text"
            name="image"
           value={user.image}
            onChange={(e) => {
                setUser({...user, image: e.target.value});
            }}
          />
        </p>
        <p>
          <label>Role</label>
          <br />
          <input className="my-input"
            type="text"
            name="role"
            value={user.role}
            onChange={(e) => {
                setUser({...user, role: e.target.value});
            }}
          />
        </p>
    
        <input type="submit" className="ndrysho" ></input>
        
        

      </form>
      </div>
      <div className="imazhi-detajet">
                            <img src={user.image} alt="imazhi"  className="image-update"/>
                        </div>
    
     
    </div>
  );
};
export default EditUser;
