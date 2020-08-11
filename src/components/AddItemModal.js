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
    this.currImgPath = "";
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
    const URLString = `${process.env.REACT_APP_BACKEND_API}/product/`;
    const category = this.currCat;
    const data = {
      name: this.currName,
      image_path: this.currImgPath,
      price: this.currPrice,
      category_id:
        category === "Main Course" ? 1 : category === "Dessert" ? 2 : category === "Beverage" ? 3 : 4,
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
  };

  handleImgPathInput = (e) => {
    this.currImgPath = e.target.value;
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
                <label htmlFor="menuPrice">Category</label>
                <select
                  className="form-control"
                  id="menuPrice"
                  onChange={this.handleCatIdInput}
                >
                  <option selected="selected">Main Course</option>
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
