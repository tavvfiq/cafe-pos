import React, { useState, useEffect } from "react";
import { useInput } from "../hooks/inputHook";
import { Button, Toast } from "react-bootstrap";
import "./Register.css";
import { useSelector, useDispatch } from "react-redux";
import { loggedIn } from "../redux/actions/auth";
import { Redirect, Switch } from "react-router-dom";

const Login = (props) => {
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState("");
  const [logIn, setLogIn] = useState(false);
  const { msg, isLoggedIn } = useSelector((state) => state.authState);
  const dispatch = useDispatch();

  const { value: email, bind: bindEmail, reset: resetEmail } = useInput("");
  const {
    value: password,
    bind: bindPassword,
    reset: resetPassword,
  } = useInput("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (email === "" || password === "") {
      setStatus("please fill the empty field(s)!");
      setShow(true);
      setLogIn(false);
    } else {
      setLogIn(true);
    }
  };
  useEffect(() => {
    if (logIn) {
      dispatch(
        loggedIn({
          email: email,
          password: password,
        })
      );
      setLogIn(false);
      setStatus(msg);
      setShow(true);
    }
  }, [logIn]);

  return (
    <>
      {isLoggedIn ? (
        <Switch>
          <Redirect from="/login" to="/" exact />
        </Switch>
      ) : (
        <>
          <div className="register-container">
            <h3>Log In</h3>
            <form className="form-style" onSubmit={handleSubmit}>
              <label className="form-label">Email:</label>
              <input
                className="input-style"
                type="email"
                {...bindEmail}
                placeholder="johndoe@example.com"
              />

              <label className="form-label">Password:</label>
              <input
                className="input-style"
                type="password"
                {...bindPassword}
                placeholder="password"
              />

              <Button
                className="button-style submit-button"
                variant="primary"
                type="submit"
                value="Submit"
              >
                Log In
              </Button>
              <Button
                className="button-style"
                variant="warning"
                onClick={() => {
                  let path = "/register";
                  props.history.push(path);
                }}
              >
                Doesn't have an account? Register!
              </Button>
            </form>
          </div>
          <div className="box">
            {/* <img src={food_bg} alt="" /> */}
            <video className="box" loop autoPlay muted>
              <source
                src="https://cdn.videvo.net/videvo_files/video/free/2018-08/small_watermarked/180825_08_garden_preview.webm"
                type="video/webm"
              />
            </video>
            <div className="overlay"></div>
          </div>
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
        </>
      )}
    </>
  );
};

export default Login;
