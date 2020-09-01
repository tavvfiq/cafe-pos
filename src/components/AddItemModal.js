import React from "react";
import { Modal, Button} from "react-bootstrap";
import { connect } from "react-redux";
import { addMenu } from "../redux/actions/menu";

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
    for (let key in this.form) {
      formData.append(key, this.form[key]);
    }

    const config = {
      headers: {
        "content-type": "multipart/form-data",
        "x-access-token": "Bearer " + this.props.token,
      },
    };

    this.props.addMenu(config, formData);
    this.handleClose();
  };

  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.form = { ...this.form, [name]: value };
  };

  handleImgPathInput = (e) => {
    const { name, files } = e.target;
    this.form = { ...this.form, [name]: files[0] };
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
          dialogClassName="modal-style"
        >
          <Modal.Header>
            <h3>Add Item</h3>
          </Modal.Header>
          <Modal.Body>
          <div className="form-wrapper">
              <div className="form-group form-input">
                <label htmlFor="menuName" style={{ flexGrow: 2, width: "25%" }}>Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="menuName"
                  placeholder="menu name..."
                  name="name"
                  onChange={this.handleOnChange}
                  style={{ flexGrow: 1, width: "75%" }}
                />
              </div>
              <div className="form-group form-input">
                <label htmlFor="imagePath" style={{ flexGrow: 2, width: "25%" }}>Image:</label>
                <input
                  type="file"
                  className="form-control input-file"
                  id="imagePath"
                  placeholder="image"
                  name="image"
                  onChange={this.handleImgPathInput}
                  style={{ flexGrow: 1, width: "75%" }}
                />
              </div>
              <div className="form-group form-input">
                <label htmlFor="menuPrice" style={{ flexGrow: 2, width: "25%" }}>Price:</label>
                <input
                  type="text"
                  className="form-control"
                  id="menuPrice"
                  placeholder="menu price..."
                  name="price"
                  onChange={this.handleOnChange}
                  style={{ flexGrow: 1, width: "75%" }}
                />
              </div>
              <div className="form-group form-input">
                <label htmlFor="menuPrice" style={{ flexGrow: 2, width: "25%" }}>Category:</label>
                <select
                  className="form-control"
                  id="category_id"
                  name="category_id"
                  onChange={this.handleOnChange}
                  style={{ flexGrow: 1, width: "75%" }}
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

const mapDispatchToProps = (dispatch) => {
  return {
    addMenu: (config, data) => dispatch(addMenu(config, data)),
  };
};

export default connect(null, mapDispatchToProps, null, { forwardRef: true })(
  AddItemModal
);
