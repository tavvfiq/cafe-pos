import React from "react";
import { Modal, Button } from "react-bootstrap";
import Axios from "axios";

import "./styles/SearchModal.css";

class SearchModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };

    this.nameInput = "";
    this.sortBy = "name";
    this.sortOrder = "ascending";
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }
  handleShow() {
    this.setState({ show: true });
  }

  handleFilteredMenu = (props) => {
    this.props.handleFilteredMenu(props);
  };

  fetchData = () => {
    const URLString = `${process.env.REACT_APP_BACKEND_API}/menu/filter?name=${this.nameInput}&by=${this.sortBy.replace(" ","_")}&order=${this.sortOrder.replace("ending","").toUpperCase()}`;
    Axios.get(URLString)
      .then((res) => {
        this.handleFilteredMenu(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
      this.handleClose();
  };

  handleNameInput = (e) => {
    this.nameInput = e.target.value;
  };

  handleSortByInput = (e) => {
    this.sortBy = e.target.value;
  };

  handleSortOrderInput = (e) => {
    this.sortOrder = e.target.value;
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
          <Modal.Body>
            <div className="search-wrapper">
              <input
                type="text"
                className="form-control"
                placeholder="search menu...."
                onChange={this.handleNameInput}
              />
            </div>
            <div className="sort-container">
              <div className="sort-wrapper">
                <p>Sort by:</p>
                <select
                  className="form-control"
                  id="by"
                  onChange={this.handleSortByInput}
                >
                  <option selected="selected">name</option>
                  <option>price</option>
                  <option>category</option>
                  <option>added at</option>
                  <option>updated at</option>
                </select>
              </div>
              <div className="sort-wrapper">
                <p>Order:</p>
                <select
                  className="form-control"
                  id="order"
                  onChange={this.handleSortOrderInput}
                >
                  <option selected="selected">ascending</option>
                  <option>descending</option>
                </select>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={this.fetchData}>
              Search
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default SearchModal;
