import React from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { register } from "../redux/actions/auth";

class AddUserModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.formValue = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      level_id: 1,
      notLoggingIn: true,
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    this.setState({ show: true });
  };

  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.formValue = { ...this.formValue, [name]: value };
  };

  addUser = () => {
    this.props.register(this.formValue);
  };

  render() {
    return (
      <Modal
        show={this.state.show}
        onHide={this.handleClose}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogClassName="modal-style"
      >
        <Modal.Header>
          <h3>Add User{this.props.id}</h3>
          {/* <br /> */}
        </Modal.Header>
        <Modal.Body>
          <div className="form-wrapper">
            <div className="form-group form-input">
              <label style={{ flexGrow: 2, width: "25%" }}>First Name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="john"
                name="first_name"
                onChange={this.handleOnChange}
                style={{ flexGrow: 1, width: "75%" }}
              />
            </div>
            <div className="form-group form-input">
              <label style={{ flexGrow: 2, width: "25%" }}>Last Name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="doe"
                name="last_name"
                onChange={this.handleOnChange}
                style={{ flexGrow: 1, width: "75%" }}
              />
            </div>
            <div className="form-group form-input">
              <label style={{ flexGrow: 2, width: "25%" }}>Email:</label>
              <input
                type="email"
                className="form-control"
                placeholder="johndoe@example.com"
                name="email"
                onChange={this.handleOnChange}
                style={{ flexGrow: 1, width: "75%" }}
              />
            </div>
            <div className="form-group form-input">
              <label style={{ flexGrow: 1, width: "25%" }}>Roles:</label>
              <select
                className="form-control"
                id="roles"
                name="level_id"
                onChange={this.handleOnChange}
                style={{ flexGrow: 2, width: "75%" }}
              >
                <option value="1">Cashier</option>
                <option value="2">Supervisor</option>
                <option value="3">Admin</option>
                <option value="4">Super Admin</option>
              </select>
            </div>
            <div className="form-group form-input">
              <label style={{ flexGrow: 2, width: "25%" }}>Password:</label>
              <input
                type="password"
                className="form-control"
                placeholder="password..."
                name="password"
                onChange={this.handleOnChange}
                style={{ flexGrow: 2, width: "75%" }}
              />
            </div>
          </div>
          <p style={{ textAlign: "center" }}>{this.props.authState.msg}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={this.handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={this.addUser}>
            Add User
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    authState: state.authState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (formValue) => dispatch(register(formValue)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps, null, {
  forwardRef: true,
})(AddUserModal);
