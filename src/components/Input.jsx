import React, { Fragment, useReducer } from "react";
import "./Input.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "Input":
      return {
        value: action.payload,
        isValid: true
      };
    case "TOUCH":
      return {
        ...state,
        isValid: true
      };
    default:
      return state;
  }
};

const Input = props => {
  const [state, dispatch] = useReducer(reducer, { value: "", isValid: false });

  const validationHandler = e => {
    dispatch({
      type: "Input",
      payload: e.target.value,
      isValid: true
    });
  };
  const onTouchHandler = () => {
    dispatch({
      type: "TOUCH",
      isValid: true
    });
  };
  var elements =
    props.elements == "input" ? (
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onInput}
        onInput={validationHandler}
        onBlur={onTouchHandler}
      />
    ) : (
      <textarea
        rows={props.rows || 3}
        id={props.id}
        name={name}
        onChange={props.onInput}
        onInput={validationHandler}
        onBlur={onTouchHandler}
      />
    );
  console.log(state);
  console.log(`value :${state.value.length} ,isValid :${state.isValid} `);
  let data =
    state.isValid && !(state.value.length > 0) ? "form-control__inValid" : "no";

  return (
    <Fragment>
      <div
        className={`form-control 
        ${data}`}
      >
        <label htmlFor={props.id}>{props.label}</label>
        {elements}
      </div>
    </Fragment>
  );
};
export default Input;
