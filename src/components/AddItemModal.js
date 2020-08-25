import React from "react";
import { Modal, Button } from "react-bootstrap";
import Axios from "axios";

import "./styles/AddItemModal.css";

class AddItemModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.currName = "";
    this.currPrice = 0;
    this.currImg = {};
    this.currPrice = 0;
    this.currCat = "Main Course";
  }

  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    this.setState({ show: true });
  };

  addItem = () => {
    let formData = new FormData();

    formData.append("name", this.currName);
    formData.append("image", this.currImg);
    formData.append("price", this.currPrice);
    formData.append(
      "category_id",
      this.currCat === "Main Course"
        ? 1
        : this.currCat === "Dessert"
        ? 2
        : this.currCat === "Beverage"
        ? 3
        : 4
    );

    const token = sessionStorage.getItem("user_token");
    if(token===null){
      token = "";
    }

    const config = {
      headers: {
        "content-type": "multipart/form-data",
        "x-access-token":
          "Bearer "+token,
      },
    };

    const URLString = `${process.env.REACT_APP_BACKEND_API}/menu/`;
    Axios.post(URLString, formData, config)
      .then((res) => {
        console.log(res.data);
        this.updateMenuHandle();
      })
      .catch((err) => console.log(err));
    this.handleClose();
  };

  updateMenuHandle = () => {
    this.props.updateMenu();
  };

  handleNameInput = (e) => {
    this.currName = e.target.value;
  };

  handleImgPathInput = (e) => {
    const file = e.target.files[0];
    this.currImg = file;
  };

  handlePriceInput = (e) => {
    this.currPrice = e.target.value;
  };

  handleCatIdInput = (e) => {
    this.currCat = e.target.key;
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
                  placeholder="menu name..."
                  onChange={this.handleNameInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="imagePath">Image</label>
                <input
                  type="file"
                  className="form-control input-file"
                  id="imagePath"
                  placeholder="image"
                  onChange={this.handleImgPathInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="menuPrice">Price</label>
                <input
                  type="text"
                  className="form-control"
                  id="menuPrice"
                  placeholder="menu price..."
                  onChange={this.handlePriceInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="menuPrice">Category</label>
                <select
                  className="form-control"
                  id="menuPrice"
                  onChange={this.handleCatIdInput}
                >
                  <option defaultValue>Main Course</option>
                  <option>Dessert</option>
                  <option>Beverage</option>
                  <option>Snack</option>
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
