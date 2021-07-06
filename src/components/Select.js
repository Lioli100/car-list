import React from "react";

function Select ({ children }) {
  return (
    <select
      style={{
        color: "#4D656F",
        fontFamily: "inter",
        fontStyle: "normal",
        fontSize: "14px",
        lineHeight: "17px",
        width: "100px"
      }}
    >
      {children}
    </select>
  );
};

export default Select;
