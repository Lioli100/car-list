import React from "react";

function Menu({ children }) {
  return (
    <div
      style={{
        backgroundColor: "#f0f2f5",
        height: "40px",
        display: "flex",
        justifyContent: "flex-start",
        padding: "15px 60px 1px 20px",
        gap: "30px",
      }}
    >
      {children}
    </div>
  );
}

export default Menu;
