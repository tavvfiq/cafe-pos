import React from "react";
import { Modal, Button } from "react-bootstrap";

import "./styles/search-modal.css";

class SearchModal extends React.Component {
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
          <Modal.Body>
            <div className="search-wrapper">
              <input
                type="text"
                className="form-control"
                placeholder="search menu...."
              />
            </div>
            <div className="sort-container">
              <div className="sort-wrapper">
                <p>Sort by:</p>
                <select className="form-control" id="by">
                  <option>name</option>
                  <option>price</option>
                  <option>category</option>
                  <option>added at</option>
                  <option>updated at</option>
                </select>
              </div>
              <div className="sort-wrapper">
                <p>Order:</p>
                <select className="form-control" id="order">
                  <option>ascending</option>
                  <option>descending</option>
                </select>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Cancel
            </Button>
            <Button variant="primary">Search</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default SearchModal;
