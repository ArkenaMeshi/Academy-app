import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = (props) => {
  // const { updated, setUpdated } = props;
  const [validation, setValidation] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
    role: "",
  });

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
      .patch(`http://localhost:8000/user/edit/${id}`, user)

      .then((res) => {
        console.log(res);
        console.log(res.data);

        navigate("/user");
      })
      .catch((err) => {
        console.log(err);
        setValidation(err.response.data.errors);
      });
  };

  return (
    <div className="update-kryesor">
      <div>
        <h1>Update a User</h1>
        <form onSubmit={updateUser} className="update-user">
          {validation.name ? <p>{validation.name.message}</p> : ""}
          <p>
            <label>Name</label>
            <br />
            <input
              className="my-input"
              type="text"
              name="name"
              value={user.name}
              onChange={(e) => {
                setUser({ ...user, name: e.target.value });
              }}
            />
          </p>
          {validation.email ? <p>{validation.email.message}</p> : ""}
          <p>
            <label>Email</label>
            <br />
            <input
              className="my-input"
              type="text"
              name="email"
              value={user.email}
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
            />
          </p>
          {validation.password ? <p>{validation.password.message}</p> : ""}
          <p>
            <label>Password</label>
            <br />
            <input
              className="my-input"
              type="text"
              name="password"
              value={user.password}
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
            />
          </p>
          {validation.image ? <p>{validation.image.message}</p> : ""}
          <p>
            <label>Image</label>
            <br />
            <input
              className="my-input"
              type="text"
              name="image"
              value={user.image}
              onChange={(e) => {
                setUser({ ...user, image: e.target.value });
              }}
            />
          </p>

          {validation.role ? <p>{validation.role.message}</p> : ""}
          <p>
            <label>Role</label>
            <br />
            <select
              style={{ width: "150px", height: "30px", marginRight: "8px" }}
              name=""
              id=""
              onChange={(e) => setUser({ ...user, role: e.target.value })}
              value={user.role}
            >
              <option value={""}>Select</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </p>

          <input type="submit" className="ndrysho"></input>
        </form>
      </div>
      <div className="imazhi-detajet">
        <img src={user.image} alt="imazhi" className="image-update" />
      </div>
      <p>
      <label htmlFor="">Degree</label>
            {/* <p>{JSON.stringify(user.degree)}</p> */}
                        <input type='checkbox' checked={user.degree}
                         onChange={e=>{setUser(prev=>({...prev,degree:e.target.checked}));
                         setDegree2(e.target.checked) ;
                        setDegree();console.log(e.target.checked)}}></input>
                       
                        <br/>

                        <label htmlFor="">Belt</label>
            {/* <p>{JSON.stringify(user.belt)}</p> */}
                        <input type='checkbox' checked={user.belt}
                         onChange={e=>{setUser(prev=>({...prev,belt:e.target.checked}));
                         setBelt2(e.target.checked) ;
                        setBelt();console.log(e.target.checked)}}></input>
                        </p>




    </div>
  );
};
export default EditUser;