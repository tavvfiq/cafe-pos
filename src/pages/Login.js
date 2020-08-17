import React, { useState } from "react";
import { useInput } from "../hooks/inputHook";
import { Button, Toast } from "react-bootstrap";
import "./Register.css";
import Axios from "axios";
import food_bg from "../assets/img/food-bg.jpg";

export const Login = (props) => {
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState("");

  const { value: email, bind: bindEmail, reset: resetEmail } = useInput("");
  const {
    value: password,
    bind: bindPassword,
    reset: resetPassword,
  } = useInput("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    if (email === "" || password === "") {
      setStatus("please fill the empty field(s)!");
      setShow(true);
    } else {
      console.log(data);
      Axios.post(`${process.env.REACT_APP_BACKEND_API}/auth/login`, data, {
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => {
          console.log(res.data);
          if (res.data.isSuccess) {
            setStatus("login Success!");
          } else {
            setStatus("email not found!");
          }
          setShow(true);
        })
        .catch((err) => {
          console.log(err);
          setStatus("login failed!");
          setShow(true);
        });
      resetEmail();
      resetPassword();
    }
  };
  return (
    <>
      <div className="register-container">
        <h3>Log In</h3>
        <form className="form-style" onSubmit={handleSubmit}>
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
            Log In
          </Button>
          <Button className="button-style" variant="warning">
            Doesnt have an account? Register!
          </Button>
        </form>
        <Toast
          onClose={() => setShow(false)}
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