import React from "react";

function Button ({ label, onClick }) {
  return (
    <button 
    onClick={onClick}
    style={{
      backgroundColor: "#434275",
      boxShadow: "0px 2px 4px rgba(109, 108, 147, 0.4)",
      borderRadius: "8px",
      width: "100px",
      height: "25px",
      color: "#fff"
    }}>
      Clicar
      {label}
    </button>
  )
};

export default Button;

