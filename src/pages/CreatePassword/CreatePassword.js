import React, { useState } from "react";
import createPassword from "./CreatePassword.module.css";
import { Navbar } from "../../componenet/navbar/Navbar";
import { HeroImg } from "../../componenet/hero-img/Hero-img";
import { Button } from "../../componenet/button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../context/authContext";
import { useParams } from "react-router-dom";

const CreatePassword = () => {
  const { email } = useParams()
  console.log("controller",email)
  const [isShown, setIsSHown] = useState(false);
  const [confirmIsShown, setConfirmIsSHown] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const { CreatePassword } = useAuth();
  const [formData, setFormData] = useState({});

  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);
  };

  const toggleConfirmPassword = () => {
    setConfirmIsSHown((confirmIsShown) => !confirmIsShown);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.newPassword === formData.confirmPassword) {
      setPasswordsMatch(true);
      CreatePassword(formData, email);
      console.log(formData);
      setFormData({});
    } else {
      setPasswordsMatch(false);
    }
  };
  return (
    <div className={createPassword.createPassword}>
      <Navbar />
      <div className={createPassword.formHead}>
        <h1>Create new password.</h1>
      </div>

      <div className={createPassword.passwordStyle}>
        <HeroImg />
        <form onSubmit={handleSubmit}>
          <div className={createPassword.field}>
            <h3>Create here a new password:</h3>

            <div
              className={createPassword.input}
              style={{ marginBottom: "20px", display: "flex" }}
            >
              <input
                type={isShown ? "text" : "password"}
                name="newPassword"
                id="newPassword"
                placeholder="Insert new password"
                onChange={handleChange}
                required
              />
              <span  style={{position:"absolute", marginLeft:"19rem"}} onClick={togglePassword}>
                {isShown ? (
                  <FontAwesomeIcon icon={faEye} />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} />
                )}
              </span>
            </div>
            <div
              className={createPassword.input}
              style={{ marginBottom: "20px", display: "flex" }}
            >
              <input
                type={confirmIsShown ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm new password"
                onChange={handleChange}
                required
              />
              <span style={{position:"absolute", marginLeft:"19rem"}} onClick={toggleConfirmPassword}>
                {confirmIsShown ? (
                  <FontAwesomeIcon icon={faEye} />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} />
                )}
              </span>
            </div>
            {!passwordsMatch && <div style={{ color: "red" }}>Passwords do not match</div>}

            <Button name="Create new password" color="#4EE0BC" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePassword;
