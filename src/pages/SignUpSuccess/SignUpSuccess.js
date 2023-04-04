import React, { useState } from "react";
import signUpSuccess from "./SignUpSuccess.module.css";
import { Navbar } from "../../componenet/navbar/Navbar";
import { HeroImg } from "../../componenet/hero-img/Hero-img";
import { Button } from "../../componenet/button/Button";

import { useAuth } from "../../context/authContext";
import { Link } from "react-router-dom";

const SignUpSuccess = () => {
  return (
    <div className={signUpSuccess.success}>
      <Navbar />

      <div className={signUpSuccess.body}>
        <HeroImg />
        <div>
        <div className={signUpSuccess.field}>
          <h3 style={{ fontSize: "20px" }}>Congrats! you have successfully signed-up!</h3>
        </div>

        <div className={signUpSuccess.button}>
        <Link to="/">
          <Button name="Click here to log-in into your app!" color="#4EE0BC" />
        </Link>
        </div>
        
        </div>
        
      </div>
    </div>
  );
};

export default SignUpSuccess;
