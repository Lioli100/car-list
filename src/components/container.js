import React from "react";

function Container({ children }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "2px 10px 2px 10px",
      }}
    >
      {children}
    </div>
  );
}

export default Container;
