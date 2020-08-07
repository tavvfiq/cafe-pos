import {React, Component} from "react";
import { Modal, Button, Toast} from "react-bootstrap";

function MessageToast(props){
    return (<Toast>
      <Toast.Header>
          <h1>{props.head}</h1>
      </Toast.Header>
    <Toast.Body>{props.body}</Toast.Body>
    </Toast>);
}

export default MessageToast;