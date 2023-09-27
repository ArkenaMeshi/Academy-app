import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const Detail = (props) => {
  const [user, setUser] = useState({});
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image , setImage] = useState("");
  const [role, setRole] = useState("student");
  const navigate = useNavigate();


  useEffect(() => {
    axios
      .get(`http://localhost:8000/user/${id}`)
      .then((res) => {
        console.log(res);
        setUser(res.data);
        setEmail(res.data.email);
        setName(res.data.name);
        setPassword(res.data.password);
        setImage(res.data.image);
        setRole(res.data.role);

      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="te-dhenat">
      <div>
      <h1>User Details</h1>
       <p>
        <label id="label">Name :</label>
        <br />
        <input type="text"  className="my-input" id="text" defaultValue={name} onChange={(e) => setName(e.target.value)} />
    </p>
   
          <p>
        <label id="label">Email :</label>
        <br />
        <input type="text" className="my-input" id="text"  defaultValue={email} onChange={(e) => setEmail(e.target.value)} />
    </p>
    <p>
        <label id="label">Password :</label>
        <br />
        <input type="text"  className="my-input" id="text" defaultValue={password} onChange={(e) => setPassword(e.target.value)} />
    </p>
    

<p>
<label id="label">Role:</label><br/>

<select style={{ width: "150px", height: "30px", marginRight: "8px" }}
        name=""
        id=""
        defaultValue={role}
        onChange={(e) => setRole(e.target.value)
        
        }
    >
        <option value="teacher">Teacher</option>
        <option value="student">Student</option>

    </select>
</p>
  
<button className="view-more" onClick={()=>navigate(`/user/edit/${user._id}`)}>Go to edit Page </button>
</div>
<div className="imazhi-detajet">
                            <img src={user.image} alt="imazhi"  className="dtimazh"/>
                        </div>

    </div>
  );
};
export default Detail;

