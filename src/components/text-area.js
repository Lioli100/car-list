import React from "react";
import PropTypes from "prop-types";

function TextArea({ value, onChange, placeholder }) {
  return (
    <textarea
      style={{
        color: "#4D656F",
        fontFamily: "inter",
        fontStyle: "normal",
      }}
    ></textarea>
  );
}

export default TextArea;

TextArea.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};
