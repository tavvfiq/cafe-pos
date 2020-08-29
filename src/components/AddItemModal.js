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
    this.form = { name: "", image: {}, price: 0, category_id: 1 };
  }

  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    this.setState({ show: true });
  };

  addItem = () => {
    this.form.category_id = Number(this.form.category_id);
    let formData = new FormData();
    for(let key in this.form){
      formData.append(key, this.form[key]);
    }

    const config = {
      headers: {
        "content-type": "multipart/form-data",
        "x-access-token": "Bearer " + this.props.token,
      },
    };

    const URLString = `${process.env.REACT_APP_BACKEND_API}/menu/`;
    Axios.post(URLString, formData, config)
      .then((res) => {
        this.updateMenuHandle();
      })
      .catch((err) => console.log(err));
    this.handleClose();
  };

  updateMenuHandle = () => {
    this.props.updateMenu();
  };

  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.form = { ...this.form, [name]: value };
  };

  handleImgPathInput = (e) => {
    const {name, files} = e.target;
    this.form = {...this.form, [name]:files[0]};
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
                  name="name"
                  onChange={this.handleOnChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="imagePath">Image</label>
                <input
                  type="file"
                  className="form-control input-file"
                  id="imagePath"
                  placeholder="image"
                  name="image"
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
                  name="price"
                  onChange={this.handleOnChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="menuPrice">Category</label>
                <select
                  className="form-control"
                  id="category_id"
                  name="category_id"
                  onChange={this.handleOnChange}
                >
                  <option value="1">Main Course</option>
                  <option value="2">Dessert</option>
                  <option value="3">Beverage</option>
                  <option value="4">Snack</option>
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
