import {React, Component} from "react";
import { Modal, Button, Toast} from "react-bootstrap";
import ReactDOM from 'react-dom'; 

const ToastMessage = (props)=>{
    return (<Toast>
      <Toast.Header>
          <h1>{props.head}</h1>
      </Toast.Header>
    <Toast.Body>{props.body}</Toast.Body>
    </Toast>);
}

export default ToastMessage;