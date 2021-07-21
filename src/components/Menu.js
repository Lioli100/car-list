import React from "react";

function Menu({ children }) {
  return (
    <div
      style={{
        backgroundColor: "#f0f2f5",
        // width: "min(90vw, 1480px)",
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
