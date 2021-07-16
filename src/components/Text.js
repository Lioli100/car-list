import React from "react";

function Text({ children }) {
  return (
    <span
      style={{
        color: "#000",
        fontFamily: "cursive",
        fontStyle: "normal",
        lineHeight: "25px",
      }}
    >
      {children}
    </span>
  );
}

export default Text;
