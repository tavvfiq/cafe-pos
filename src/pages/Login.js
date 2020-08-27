import React, { useState, useEffect } from "react";
import { useInput } from "../hooks/inputHook";
import { Button, Toast } from "react-bootstrap";
import "./Register.css";
import Axios from "axios";
import food_bg from "../assets/img/food-bg.jpg";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { loggedIn } from "../redux/actions/auth";
import { Redirect } from "react-router-dom";

const Login = (props) => {
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState("");

  const { value: email, bind: bindEmail, reset: resetEmail } = useInput("");
  const {
    value: password,
    bind: bindPassword,
    reset: resetPassword,
  } = useInput("");

  let history = useHistory();

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
      props.loggedIn(data);
    }
  };
  return (
    <>
      {/* {props.authState.isLoggedIn ? <Redirect to="/" /> : ""} */}
      <div className="register-container">
        <h3>Log In</h3>
        <form className="form-style" onSubmit={handleSubmit}>
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
            Log In
          </Button>
          <Button
            className="button-style"
            variant="warning"
            onClick={() => {
              let path = "/register";
              history.push(path);
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
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    loggedIn: (data) => dispatch(loggedIn(data)),
  };
};

const mapStateToProps = function (state) {
  return {
    authState: state.authState,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
