import React from "react";
import PropTypes from "prop-types";
import add from "../assets/add.png"

 function Button ({ children, onClick, disabled, pending }) {
  return (
    <button 
    onClick={onClick}
    disabled={disabled || pending}>
      <img src={add} alt="add car"  style={{width:"10px"}}/>
       {pending ? "Loading...": children}
    </button>
  )
};

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  pending: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
  pending: false,
};