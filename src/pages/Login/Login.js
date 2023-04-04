import React, { useState } from "react";
import login from "./Login.module.css";
import { Navbar } from "../../componenet/navbar/Navbar";
import { HeroImg } from "../../componenet/hero-img/Hero-img";
import { Button } from "../../componenet/button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import { useAuth } from "../../context/authContext";
import { Link } from "react-router-dom";

const Login = () => {
  const [isShown, setIsSHown] = useState(false)
  const { Login } = useAuth();
  const [formData, setFormData] = useState({});

  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Login(formData);
    console.log("submit",formData);
    setFormData({});
  };
  return (
    <div className={login.login}>
      <Navbar />
      <div className= {login.form}>
        <h1>Access your test app.</h1>
      </div>

      <div className={login.body}>
        <HeroImg />
        <form style={{width:"35%"}} onSubmit={handleSubmit}>
          <div className={login.field}>
            <h3>Insert your credentials</h3>
            <div className={login.input} style={{marginBottom:"20px"}}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={handleChange}
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              />
            </div>
            <div className={login.input} style={{marginBottom:"10px", display: "flex"}}>
              <input
                type={isShown ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                onChange={handleChange}
                required
              />
              <span style={{position:"absolute", marginLeft:"19rem"}} onClick={togglePassword}>
                {isShown ? (
                  <FontAwesomeIcon icon={faEye} />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} />
                )}
              </span>
            </div>
            <h3 style={{ fontSize: "14px" }}>
              Have you forgot your password? click{" "}
              <Link to="/reset-password">here</Link>
            </h3>
            <Button type="submit" name="Log In" color="#4EE0BC" />
            
          </div>
          <h3 style={{ fontSize: "14px", marginLeft:"65px" }}>
            You don’t have a profile yet? sign up{" "}
            <Link to="/register">here</Link>
          </h3>
        </form>
      </div>
    </div>
  );
};

export default Login;
