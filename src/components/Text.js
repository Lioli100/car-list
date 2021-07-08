import React from "react";

function Text ({ children }) {
  return (
    <h1
      style={{
        color: "#4D656F",
        fontFamily: "inter",
        fontStyle: "normal",
        fontSize: "14px",
        lineHeight: "17px",
      }}
    >
      {children  }
        </h1>
  );
};

export default Text;
