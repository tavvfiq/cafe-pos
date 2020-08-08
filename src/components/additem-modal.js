import React from "react";
import { Modal, Button } from "react-bootstrap";
import Axios from "axios";
import ToastMessage from "./toast-message";

import "./styles/additem-modal.css";

class AddItemModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.currName = "";
    this.currPrice = 0;
    this.currImgPath = "";
    this.currPrice = 0;
    this.currCatId = 0;
  }

  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    this.setState({ show: true });
  };

  addItem = () => {
    const URLString = "http://localhost:8001/product/";
    const category = this.currCatId;
    const data = {
      name: this.currName,
      image_path: this.currImgPath,
      price: this.currPrice,
      category_id:
        category === "Main Course" ? 1 : category === "Dessert" ? 2 : 3,
    };
    Axios.post(URLString, data)
      .then((res) => {
        console.log(res.data);
        this.updateMenuHandle();
      })
      .catch((err) => console.log(err));
      this.handleClose();
  };

  updateMenuHandle = ()=>{
    this.props.updateMenu();
  }

  handleNameInput = (e) => {
    this.currName = e.target.value;
    // console.log(this.currName);
  };

  handleImgPathInput = (e) => {
    this.currImgPath = e.target.value;
    // console.log(this.currImgPath);
  };

  handlePriceInput = (e) => {
    this.currPrice = e.target.value;
    // console.log(this.currPrice);
  };

  handleCatIdInput = (e) => {
    this.currCatId = e.target.key;
    // console.log(this.currCatId);
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
                <label htmlFor="menuName">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="menuName"
                  placeholder="enter menu name"
                  onChange={this.handleNameInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="imagePath">Image</label>
                <input
                  type="text"
                  className="form-control"
                  id="imagePath"
                  placeholder="enter image path"
                  onChange={this.handleImgPathInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="menuPrice">Price</label>
                <input
                  type="text"
                  className="form-control"
                  id="menuPrice"
                  placeholder="enter menu price"
                  onChange={this.handlePriceInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="menuPrice">Price</label>
                <select
                  className="form-control"
                  id="menuPrice"
                  onChange={this.handleCatIdInput}
                >
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
