import React from "react";
import "./Button.css";

import { images } from "../../images/index";

export const Button = ({ name, color, width }) => {
  
  return (
    <div className="button">
      <button
        style={{
          width: width || "21rem",
          height: "50px",
          backgroundColor: color,
          borderRadius: "30px",
          cursor: "pointer",
          margin: "10px",
          fontSize: "16px",
          border: "none",
        }}
      >
        <h3 style={{ fontSize: "14px" }}>{name}</h3>
      </button>
    </div>
  );
};
