import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import "./Form.css";

const Form = props => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: ""
  });
  const submitHandler = e => {
    e.preventDefault();
    alert(JSON.stringify(state));
  };
  const inputChangeHandler = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
    console.log(state);
  };
  return (
    <div className="form__container" onSubmit={submitHandler}>
      <h1>Form</h1>
      <form className="form" onSubmit={props.onSubmit}>
        <Input
          elements="input"
          type="text"
          id="name"
          name="name"
          label="Name"
          placeholder="Name"
          onInput={inputChangeHandler}
        />
        <Input
          elements="input"
          type="text"
          id="name"
          name="email"
          label="Email"
          placeholder="Email"
          onInput={inputChangeHandler}
        />
        <Input
          elements="input"
          type="text"
          id="name"
          name="password"
          label="Password"
          placeholder="Password"
          onInput={inputChangeHandler}
        />
        <Button background="red" display="block" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};
export default Form;
