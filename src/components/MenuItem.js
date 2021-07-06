import React from "react";

function MenuItem ({ children }) {
  return (
    <h5
      style={{
        background: "#5d6275",
        width: "50px",
        height: "25px",
        color: "#fff",
        textAlign: "center",
        padding: "5px",
      }}
    >
      {children}
    </h5>
  );
};

export default MenuItem;
