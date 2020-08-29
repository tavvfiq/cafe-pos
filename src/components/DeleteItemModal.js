import React from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { deleteMenu } from "../redux/actions/menu";
import * as apiCalls from "../utils/apiCalls";
import "./styles/DeleteItemModal.css";

class DeleteItemModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      msg: "food name...",
    };
    this.id = 0;
  }

  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    this.setState({ show: true });
  };

  handleOnChange = (e) => {
    this.id = e.target.value;
    this.handleSearch();
  };

  handleSearch = () => {
    apiCalls
      .getMenuById(this.id)
      .then((data) => {
        this.setState({
          msg: data.data.data.msg,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deleteItem = () => {
    const config = {
      headers: {
        "x-access-token": "Bearer " + this.props.token,
      },
    };
    this.props.deleteMenu(this.id, config);
    this.handleClose();
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
      >
        <Modal.Header>
          <h3>Delete Item</h3>
        </Modal.Header>
        <Modal.Body>
          <div className="delete-form-wrapper">
            <div className="form-group delete-form">
              <label htmlFor="menuId">Id: &nbsp;</label>
              <input
                type="text"
                className="form-control input-delete-form"
                id="menuId"
                placeholder="id..."
                name="id"
                onChange={this.handleOnChange}
              />
            </div>
            <h5>{this.state.msg}</h5>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={this.deleteItem}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteMenu: (id, config) => dispatch(deleteMenu(id, config)),
  };
};

export default connect(null, mapDispatchToProps, null, { forwardRef: true })(
  DeleteItemModal
);
