import React from "react";
import { useInput } from "../hooks/inputHook";
import "./Register.css";

export const Register = (props) => {
  const {
    value: firstName,
    bind: bindFirstName,
    reset: resetFirstName,
  } = useInput("");
  const {
    value: lastName,
    bind: bindLastName,
    reset: resetLastName,
  } = useInput("");
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput("");
  const {
    value: password,
    bind: bindPassword,
    reset: resetPassword,
  } = useInput("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting Name ${firstName} ${lastName} ${email} ${password}`);
    resetFirstName();
    resetLastName();
    resetEmail();
    resetPassword();
  };
  return (
    <div className="register-container">
      <h3>Register</h3>
      <form className="form-style" onSubmit={handleSubmit}>
        <label className="form-label">
          First Name:
          <input className="input-style" type="text" {...bindFirstName} />
        </label>
        <label className="form-label">
          Last Name:
          <input className="input-style" type="text" {...bindLastName} />
        </label>
        <label className="form-label">
          Email:
          <input className="input-style" type="text" {...bindEmail} />
        </label>
        <label className="form-label">
          Password:
          <input className="input-style" type="password" {...bindPassword} />
        </label>
        <input className="button-style" type="submit" value="Submit" />
      </form>
    </div>
  );
};
