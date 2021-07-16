import React from "react";

function Container({ children }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "32px",
      }}
    >
      {children}
    </div>
  );
}

export default Container;
