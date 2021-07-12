import React from "react";

function Text({ children }) {
  return (
    <span
      style={{
        color: "#4D656F",
        fontFamily: "inter",
        fontStyle: "normal",
        lineHeight: "17px",
      }}
    >
      {children}
    </span>
  );
}

export default Text;
