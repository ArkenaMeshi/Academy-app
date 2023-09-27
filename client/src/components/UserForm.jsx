import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserForm = (props) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const[val,setValidation]=useState({});

  const [belt, setBelt] = useState(false);
  const [degree, setDegree] = useState(false);


  const onSubmitHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/user", {
        name: name,
        email: email,
        password: password,
        image: image,
        role: role,
        belt: belt,
        degree: degree,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        // setValidation({})
        navigate("/user")
      })
      .catch(err=>{ console.log(err);err.response.data.errors? setValidation(err.response.data.errors): console.log(err)})
    }
  return (
    <form onSubmit={onSubmitHandler}>
     
      <h1> Create New Account</h1>
      <p>
      {
        val.name ? <p>{val.name.message}</p> : ""
     }
        <label id="label">Name :</label>
        <br />
       
        <input className="my-input"
          type="text"
          id="text"
          onChange={(e) => setName(e.target.value)}
        />
      </p>
      <p>
      {
        val.email ? <p>{val.email.message}</p> : ""
     }
        <label id="label">Email :</label>
        <br />
       
        <input
         className="my-input"
          type="text"
          id="text"
          onChange={(e) => setEmail(e.target.value)}
        />
      </p>
      <p>
      {
        val.password ? <p>{val.password.message}</p> : ""
     }
        <label id="label">Password :</label>
        <br />
       
        <input  className="my-input"
          type="text"
          id="text"
          onChange={(e) => setPassword(e.target.value)}
        />
      </p>
      <p>
      {
        val.image ? <p>{val.image.message}</p> : ""
     }
        <label id="label">IMG URL :</label>
        <br />
        
        <input  className="my-input"
          type="text"
          id="text"
          onChange={(e) => setImage(e.target.value)}
        />
      </p>
    
      <p>
      { val.role? <p>{val.role.message}</p> : "" }
        <label id="label">Role:</label>
        <br/>
       
        <select 
          style={{ width: "150px", height: "30px", marginRight: "8px" }}
          name=""
          id=""
          onChange={(e) => setRole(e.target.value)}
        >
            <option value={""}>Select</option>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>

        </select>
      </p>

      <div className="belt_input">
        <label >BetaPlan Belt ?</label>
        <input className="checkbox"
          type="checkbox"
          onChange={(e) =>setBelt(e.target.checked)}
        />
      </div>
      <div className="degree_input">
        <label > College Degree ?</label>
        <input className="checkbox"
          type="checkbox"
          onChange={(e) =>setDegree(e.target.checked)}
        />
      </div>
      
        <button  className="sign-up" type="submit">Sign Up </button>
    
    </form>
  );
};
export default UserForm;
