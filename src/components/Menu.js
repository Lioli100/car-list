import React from "react";

function Menu({ children }) {
  return (
    <div
      style={{
        backgroundColor: "#f0f2f5",
        width: "min(90vw, 1280px)",
        height: "50px",
        display: "flex",
        gap: "15px",
        justifyContent: "space-between",
        padding: "30px 0 0 30px",
      }}
    >
      {children}
    </div>
  );
}

export default Menu;
