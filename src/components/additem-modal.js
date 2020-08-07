import React from "react";
import { Modal, Button, Toast } from "react-bootstrap";
import Axios from "axios";

import "./styles/additem-modal.css";

class AddItemModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      menus: props.menus,
      invoice: props.invoice,
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }
  handleShow() {
    this.setState({ show: true });
  }

  addItem = () => {
    const URLString = "http://localhost:8000/product/";
    Axios.get(URLString)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <>
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          backdrop="static"
          keyboard={false}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <h3>Add Item</h3>
          </Modal.Header>
          <Modal.Body>
            <div className="form-wrapper">
              <div className="form-group">
                <label for="menuName">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="menuName"
                  placeholder="enter menu name"
                />
              </div>
              <div className="form-group">
                <label for="imagePath">Image</label>
                <input
                  type="text"
                  className="form-control"
                  id="imagePath"
                  placeholder="enter image path"
                />
              </div>
              <div className="form-group">
                <label for="menuPrice">Price</label>
                <input
                  type="text"
                  className="form-control"
                  id="menuPrice"
                  placeholder="enter menu price"
                />
              </div>
              <div className="form-group">
                <label for="menuPrice">Price</label>
                <select className="form-control" id="menuPrice">
                  <option>Main Course</option>
                  <option>Dessert</option>
                  <option>Beverage</option>
                </select>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={this.addItem}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default AddItemModal;
