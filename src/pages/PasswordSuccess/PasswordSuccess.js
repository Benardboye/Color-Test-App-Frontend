import React, { useState } from "react";
import passwordSuccess from "./PasswordSuccess.module.css";
import { Navbar } from "../../componenet/navbar/Navbar";
import { HeroImg } from "../../componenet/hero-img/Hero-img";
import { Button } from "../../componenet/button/Button";

import { useAuth } from "../../context/authContext";
import { Link } from "react-router-dom";

const PasswordSuccess = () => {
  return (
    <div className={passwordSuccess.success}>
      <Navbar />
      {/* <div className="form-head">
        <h1>Reset your password.</h1>
      </div> */}

      <div className={passwordSuccess.password}>
        <HeroImg />
        <div>
        <div className={passwordSuccess.field}>
          <h3 style={{ fontSize: "20px" }}>Your password has been successfully changed!</h3>
        </div>

        <div className={passwordSuccess.button}>
        <Link to="/">
          <Button name="Click here to Access your app again!" color="#4EE0BC" />
        </Link>
        </div>
        
        </div>
        
      </div>
    </div>
  );
};

export default PasswordSuccess;
