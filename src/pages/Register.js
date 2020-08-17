import React, { useState } from "react";
import { useInput } from "../hooks/inputHook";
import { Button, Toast } from "react-bootstrap";
import "./Register.css";
import Axios from "axios";
import food_bg from "../assets/img/food-bg.jpg";
import { useHistory } from "react-router-dom";

export const Register = (props) => {
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState("");
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

  let history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const body = {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
    };
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      setStatus("please fill the empty field(s)!");
      setShow(true);
    } else {
      Axios.post(`${process.env.REACT_APP_BACKEND_API}/auth/register`, body)
        .then((res) => {
          console.log(res);
          if (res.data.isSuccess) {
            setStatus(res.data.data);
            let path = "/";
            history.push(path);
            resetFirstName();
            resetLastName();
            resetEmail();
            resetPassword();
          } else {
            setStatus(res.data.data);
          }
          setShow(true);
        })
        .catch((err) => {
          setStatus("Register failed!");
          setShow(true);
        });
    }
  };
  return (
    <>
      <div className="register-container">
        <h3>Register</h3>
        <form className="form-style" onSubmit={handleSubmit}>
          <label className="form-label">
            First Name:
            <input
              className="input-style"
              type="text"
              {...bindFirstName}
              placeholder="john"
            />
          </label>
          <label className="form-label">
            Last Name:
            <input
              className="input-style"
              type="text"
              {...bindLastName}
              placeholder="doe"
            />
          </label>
          <label className="form-label">
            Email:
            <input
              className="input-style"
              type="text"
              {...bindEmail}
              placeholder="johndoe@example.com"
            />
          </label>
          <label className="form-label">
            Password:
            <input
              className="input-style"
              type="password"
              {...bindPassword}
              placeholder="password"
            />
          </label>
          <Button
            className="button-style submit-button"
            variant="primary"
            type="submit"
            value="Submit"
          >
            Register
          </Button>
          <Button
            className="button-style"
            variant="warning"
            onClick={() => {
              let path = "/login";
              history.push(path);
            }}
          >
            Already register? Log in!
          </Button>
        </form>
        <Toast
          onClose={() => {
            setShow(false);
          }}
          show={show}
          animation={true}
          delay={3000}
          className="toast"
          autohide
        >
          <Toast.Body>{status}</Toast.Body>
        </Toast>
      </div>
      <div className="box">
        <img src={food_bg} alt="" />
        <h1>
          take your food <br /> journey to the next level{" "}
        </h1>
      </div>
    </>
  );
};
