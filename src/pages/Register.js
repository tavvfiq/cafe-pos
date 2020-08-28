import React, { useState, useEffect } from "react";
import { useInput } from "../hooks/inputHook";
import { Button, Toast } from "react-bootstrap";
import "./Register.css";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../redux/actions/auth";
import { Redirect, Switch } from "react-router-dom";

const Register = (props) => {
  //internal state
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
  const [isRegistered, setRegistered] = useState(false);
  //global state
  const { msg, isLoggedIn } = useSelector((state) => state.authState);
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      setStatus("please fill the empty field(s)!");
      setShow(true);
      setRegistered(false);
    } else {
      // props.register(data);
      setRegistered(true);
    }
  };
  useEffect(() => {
    if (isRegistered) {
      dispatch(
        register({
          first_name: firstName,
          last_name: lastName,
          email,
          password,
        })
      );
      setRegistered(false);
      setStatus(msg);
      setShow(true);
    }
  }, [isRegistered]);

  return (
    <>
      {isLoggedIn ? (
        <Switch>
          <Redirect from="/register" to="/" exact />
        </Switch>
      ) : (
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
                  type="email"
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
                  props.history.push(path);
                }}
              >
                Already register? Log in!
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

export default Register;
