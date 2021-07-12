import React from "react";
import PropTypes from "prop-types";
import add from "../assets/add.png";

function Button({ children, intent, variant, onClick, disabled, pending }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || pending}
      style={{
        ...styles,
        ...stylesMap[variant][intent],
        ...(disabled ? disabledStyles : {}),
      }}
    >
      <img src={add} alt="add car" style={{ width: "10px" }} />
      {pending ? "Loading..." : children}
    </button>
  );
}

export default Button;

const styles = {
  padding: "1em 2em",
};

const disabledStyles = {
  opacity: 0.56,
};

const stylesMap = {
  solid: {},
  outline: {
    primary: {
      background: "none",
      border: "1px solid blue",
      color: "blue",
    },
  },
  ghost: {},
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  pending: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
  pending: false,
  variant: "solid",
  intent: "primary",
};
