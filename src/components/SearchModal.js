import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect} from "react-redux";
import { filterMenus } from "../redux/actions/menu";

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
  }

  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    this.setState({ show: true });
  };

  fetchData = () => {
    const query = {
      search: this.nameInput,
      sortby: this.sortBy,
      order: this.sortOrder,
    };
    this.props.filterMenus(query);
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
                  <option defaultValue>name</option>
                  <option>price</option>
                  <option value="category_id">category</option>
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
                  <option defaultValue>ascending</option>
                  <option>descending</option>
                </select>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.handleClose}>
              Cancel
            </Button>
            <Button
              component={Link}
              to={`/?name=${this.nameInput}&by=${this.sortBy}&order=${this.sortOrder}`}
              variant="primary"
              onClick={this.fetchData}
            >
              Search
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    filterMenus: (query) => dispatch(filterMenus(query)),
  };
};

export default connect(null, mapDispatchToProps, null, { forwardRef: true })(
  SearchModal
);
