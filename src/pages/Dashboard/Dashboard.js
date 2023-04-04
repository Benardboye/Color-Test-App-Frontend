import React, { useState } from "react";
import dashboard from "./Dashboard.module.css";
import { Navbar } from "../../componenet/navbar/Navbar";
import { Button } from "../../componenet/button/Button";

const Dashboard = () => {
  const [color, setColor] = useState("#4EE0BC");

  const handleChangeColor = () => {
    setColor(!color);
  };

  const defaultColor = "#4EE0BC";
  const changedColor = "#E0574E";

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/logout";
    
    
  };

  return (
    <div className={dashboard.success}>
      <Navbar />
      <div className={dashboard.form}>
        <h1>This is your beautiful test app!</h1>
      </div>

      <div className={dashboard.body}>
        <div>
          <div className={dashboard.field}>
            <h3 style={{ fontSize: "24px" }}>
              This app let’s you change the color of the button below from green
              to red each time you click it! isnt’ that amazing?
            </h3>

            <div className={dashboard.button} onClick={handleChangeColor}>
              <Button
                name="Change the color of this button now"
                color={color ? defaultColor : changedColor}
              />
            </div>
          </div>

          <div
            className={dashboard.button}
            style={{ marginLeft: "49.4rem" }}
            onClick={handleLogout}
          >
            <Button name="Log-out" color="#4EE0BC" width="6rem" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
