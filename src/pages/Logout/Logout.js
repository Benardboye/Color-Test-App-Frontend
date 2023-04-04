import React, { useState } from "react";
import logout from "./Logout.module.css";
import { Navbar } from "../../componenet/navbar/Navbar";
import { Button } from "../../componenet/button/Button";
import { Link } from "react-router-dom";

const Logout = () => {
  return (
    <div className={logout.logout}>
      <Navbar />
      <div className={logout.form}>
        <h1>You logged out!</h1>
        <div className={logout.button}>
            <Link to="/">
            <Button name="Click here to Access your app again!" color="#4EE0BC" />
            </Link>
            
          </div>
      </div>
    </div>
  );
};

export default Logout;
