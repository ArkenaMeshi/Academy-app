import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import Detail from "./components/Detail";
import EditUser from "./components/EditUser";



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route element={<UserForm/>} path="/" default />
        <Route element={<UserList/>} path="/user" />
        <Route element={<Detail/>} path="/user/:id" />
        <Route element={<EditUser/>} path="/user/edit/:id" />
        
        
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
