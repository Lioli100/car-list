import React from "react";
import add from "../assets/add.png"

function Button ({ label, onClick }) {
  return (
    <button 
    onClick={onClick}
    style={{
      backgroundColor: "#fff",
      boxShadow: "0px 2px 4px rgba(109, 108, 147, 0.4)",
      width: "100px",
      height: "30px",
      color: "#000",
      display: "flex",
      gap: "5px",
      paddingTop: "6px"
      
      
  }}>
      <img src={add} alt="add car"  style={{width:"10px"}}/>
      Novo Carro
      {label}
    </button>
  )
};

export default Button;

