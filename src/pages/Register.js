import React, { useState, useEffect } from "react";
import { Button, Toast } from "react-bootstrap";
import "./Register.css";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../redux/actions/auth";
import { Redirect } from "react-router-dom";
import { isEmpty } from "underscore";

const Register = (props) => {
  //internal state
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState("");
  const [formValue, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...formValue, [name]: value });
  };
  const [isRegistered, setRegistered] = useState(false);
  //global state
  const { msg, isLoggedIn } = useSelector((state) => state.authState);
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (
      isEmpty(formValue) ||
      formValue.first_name === "" ||
      formValue.last_name === "" ||
      formValue.email === "" ||
      formValue.password === ""
    ) {
      setStatus("please fill the empty field(s)!");
      setShow(true);
      setRegistered(false);
    } else {
      setRegistered(true);
    }
  };

  useEffect(() => {
    if (isRegistered) {
      dispatch(register(formValue));
      setRegistered(false);
      setStatus(msg);
      setShow(true);
    }
  }, [isRegistered]);

  useEffect(() => {
    if (msg || msg !== "") {
      setStatus(msg);
      setShow(true);
    }
  }, [msg]);

  return (
    <>
      {isLoggedIn ? (
        <Redirect from="/register" to="/" exact />
      ) : (
        <>
          <div className="register-container">
            <h3>Register</h3>
            <form className="form-style" onSubmit={handleSubmit}>
              <label className="form-label">First Name:</label>
              <input
                className="input-style"
                type="text"
                name="first_name"
                onChange={handleOnChange}
                placeholder="john"
              />
              <label className="form-label">Last Name:</label>
              <input
                className="input-style"
                type="text"
                name="last_name"
                onChange={handleOnChange}
                placeholder="doe"
              />

              <label className="form-label">Email:</label>
              <input
                className="input-style"
                type="email"
                name="email"
                onChange={handleOnChange}
                placeholder="johndoe@example.com"
              />

              <label className="form-label">Password:</label>
              <input
                className="input-style"
                type="password"
                name="password"
                onChange={handleOnChange}
                placeholder="password"
              />
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
