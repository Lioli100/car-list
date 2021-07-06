import React from "react";


function Menu ({ children }) {
  return (
    <div
      style={{
        backgroundColor: "#f0f2f5",
        width: "min(90vw, 1280px)",
        height: "50px",
      }}
    >
      {children}
    </div>
  );
};

export default Menu;