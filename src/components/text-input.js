import React from "react";
import PropTypes from "prop-types";

function TextInput({ id, value, onChange, placeholder, type, disabled }) {
  return (
    <div>
      <input
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        type={type}
        style={{
          backgroundColor: "#F9F9FA",
          mixBlendMode: "normal",
          border: "1px solid #B7C1C5",
          boxSizing: "border-box",
          borderRadius: "20px",
        }}
      />
    </div>
  );
}

export default TextInput;

TextInput.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf([
    "text",
    "email",
    "password",
    "number",
    "search",
    "date",
    "time",
    "dateTime-local",
    "black",
  ]),
  disabled: PropTypes.bool,
};

TextInput.defaultProps = {
  id: undefined,
  placeholder: undefined,
  type: "text",
  disabled: false,
};
