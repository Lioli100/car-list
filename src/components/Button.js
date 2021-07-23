import React from "react";
import PropTypes from "prop-types";

const getSize = (size) =>
  ({
    xs: 24,
    sm: 30,
    md: 40,
    lg: 50,
    xl: 60,
  }[size]);

const getIntent = (intent) =>
  ({
    primary: "#0d6efd",
    secondary: "#343a40",
    danger: "#dc3545",
    info: "#0dcaf0",
    success: "#198754",
  }[intent]);

// const getImg = (img) =>
//   ({
//     deleteIco,
//     deleteIcoWhite,
//     addIcoWhite,
//     addIco,
//     editIco,
//     editIcoWhite,
//   }[img]);

const getFontSize = (fontSize) =>
  ({
    xs: 14,
    sm: 16,
    md: 16,
    lg: 16,
    xl: 18,
  }[fontSize]);

const setButtonRectangleDefault = (size) => {
  return size * 2;
};

const getFontWeight = (fontWeight) =>
  ({
    normal: 400,
    bold: 700,
  }[fontWeight]);

export default function Button({
  children,
  variant,
  size,
  intent,
  disabled,
  pending,
  onClick,
  img,
  color,
  fontWeight,
  fontSize,
}) {
  const getVariant = {
    solid: {
      color: "#fff",
      backgroundColor: getIntent(intent),
      border: "none",
      borderColor: getIntent(intent),
      borderRadius: "5px",
    },
    outline: {
      color: "black",
      backgroundColor: "rgba(0, 0, 0, 0.0)",
      border: "solid",
      borderColor: getIntent(intent),
      borderRadius: "5px",
    },
    ghost: {
      color: "black",
      backgroundColor: "rgba(0,0,0,0.15)",
      border: "none",
      borderRadius: "5px",
    },
  };

  const styles = {
    minHeight: getSize(size),
    minWidth: setButtonRectangleDefault(getSize(size)),
    margin: "5px",
    color: color,
    fontWeight: getFontWeight(fontWeight),
    fontSize: getFontSize(fontSize),
    cursor: "pointer",
  };
  return (
    <button
      style={{ ...styles, ...getVariant[variant] }}
      variant={variant}
      size={size}
      disabled={disabled || pending}
      onClick={onClick}
      fontWeight={fontWeight}
      color={color}
      fontSize={fontSize}
    >
      {pending ? "loading" : children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["solid", "outline", "ghost"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  intent: PropTypes.oneOf([
    "primary",
    "secondary",
    "danger",
    "success",
    "info",
  ]),
  pending: PropTypes.bool,
  disabled: PropTypes.bool,
  img: PropTypes.node,
  color: PropTypes.string,
  fontWeight: PropTypes.oneOf(["normal", "bold"]),
  fontSize: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
};

Button.defaultProps = {
  variant: "solid",
  size: "md",
  intent: "primary",
  disabled: false,
  pending: false,
  color: "black",
  fontWeight: "normal",
  fontSize: "md",
};
