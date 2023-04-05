import React, { useState } from "react";
import register from "./Register.module.css";
import { Navbar } from "../../componenet/navbar/Navbar";
import { HeroImg } from "../../componenet/hero-img/Hero-img";
import { Button } from "../../componenet/button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import { useAuth } from "../../context/authContext";

const Register = () => {
  const [isShown, setIsSHown] = useState(false);
  const { Register } = useAuth();
  const [formData, setFormData] = useState({});

  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Register(formData);

    setFormData({});
  };
  return (
    <div className={register.register}>
      <Navbar />
      <div className={register.form}>
        <h1>Sign-up to your test app.</h1>
      </div>

      <div className={register.body}>
        <HeroImg />
        <form onSubmit={handleSubmit}>
          <div className={register.field}>
            <h3>Chose a user-id and a password</h3>
            <div className={register.input} style={{ marginBottom: "20px" }}>
              <input
                type="name"
                name="userName"
                id="userName"
                placeholder="Chose a user ID"
                onChange={handleChange}
                required
              />
            </div>
            <div className={register.input} style={{ marginBottom: "20px" }}>
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
            <div
              className={register.input}
              style={{ marginBottom: "20px", display: "flex" }}
            >
              <input
                type={isShown ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Chose a password"
                onChange={handleChange}
                required
              />
              <span
                style={{ position: "absolute", marginLeft: "19rem" }}
                onClick={togglePassword}
              >
                {isShown ? (
                  <FontAwesomeIcon icon={faEye} />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} />
                )}
              </span>
            </div>

            <Button type="submit" name="Sign-up!" color="#4EE0BC" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
