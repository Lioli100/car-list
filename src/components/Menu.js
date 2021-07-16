import React from "react";

function Menu({ children }) {
  return (
    <div
      style={{
        backgroundColor: "#f0f2f5",
        width: "min(90vw, 1480px)",
        height: "30px",
        display: "flex",
        justifyContent: "space-between",
        padding: "1px 360px 1px 30px",
      }}
    >
      {children}
    </div>
  );
}

export default Menu;
