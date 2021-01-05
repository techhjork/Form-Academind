import React from "react";
import "./Button.css";
const Button = props => {
  const styleSet = {
    border: props.border ? props.border : "0px solid",
    background: props.background ? props.background : "#ccc",
    textDecoration: "none",
    color: props.color ? props.color : "#fff",
    margin: "4px 0px",
    borderRadius: props.borderRadius ? props.borderRadius : "3px",
    display: props.display ? props.display : "inline-block",
    padding: "10px 10px",
    textAlign: "center",
    fontSize: props.size ? props.size : "medium",
    width: props.display === "block" && "100%"
  };

  if (props.href) {
    return (
      <a
        href={props.href}
        style={styleSet}
        disabled={props.disable ? "true" : "false"}
      >
        {props.children}
      </a>
    );
  }

  return (
    <button style={styleSet} type={props.type} disabled={props.disabled}>
      {props.children}
    </button>
  );
};
export default Button;
