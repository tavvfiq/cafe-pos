import React from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { deleteMenu, checkMenu, fetchMenus } from "../redux/actions/menu";
import "./styles/DeleteItemModal.css";

class DeleteItemModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      msg: "food name...",
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    this.setState({ show: true });
  };

  deleteItem = () => {
    const config = {
      headers: {
        "x-access-token": "Bearer " + this.props.token,
      },
    };
    this.props.deleteMenu(this.props.id, config);
    this.handleClose();
    this.props.fetchMenus();
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
          <h3>Delete Item #{this.props.id}</h3>
        </Modal.Header>
        <Modal.Body>
          <h5>Are you sure want to delete this item?</h5>
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
    checkMenu: (id) => dispatch(checkMenu(id)),
    fetchMenus: () => dispatch(fetchMenus()),
  };
};

export default connect(null, mapDispatchToProps, null, { forwardRef: true })(
  DeleteItemModal
);
