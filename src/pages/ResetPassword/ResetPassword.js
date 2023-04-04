import React, { useState } from "react";
import resetPassword from "./ResetPassword.module.css";
import { Navbar } from "../../componenet/navbar/Navbar";
import { HeroImg } from "../../componenet/hero-img/Hero-img";
import { Button } from "../../componenet/button/Button";

import { useAuth } from "../../context/authContext";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const { ResetPassword } = useAuth();
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ResetPassword(formData);
    console.log(formData);
    setFormData({});
  };
  return (
    <div className={resetPassword.resetPassword}>
      <Navbar />
      <div className= {resetPassword.formHead}>
        <h1>Reset your password.</h1>
      </div>

      <div className={resetPassword.reset}>
        <HeroImg />
        <form onSubmit={handleSubmit}>
          <div className={resetPassword.field}>
            <div>
            <h3 style={{ fontSize: "20px" }}>Have you forgot your password?</h3>
            <p style={{ fontSize: "16px" }}>
              Do not worry, insert here your email and we will send you a link
              to reset your password.
            </p>
            </div>
           
            <div className={resetPassword.input} style={{ marginBottom: "10px",  }}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={handleChange}
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              />
            </div >

            <Button type="submit" name="Reset your password" color="#4EE0BC" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
