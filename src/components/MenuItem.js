import React from "react";

function MenuItem({ children }) {
  return (
    <h5
      style={{
        // background: "#5d6275",
        width: "50px",
        height: "15px",
        color: "#000",
        textAlign: "center",
        margin: 0,
        fontSize: "18px",
        hover: "box-shadow: inset 0 0 1em gold, 0 0 1em red",
      }}
    >
      {children}
    </h5>
  );
}

export default MenuItem;
