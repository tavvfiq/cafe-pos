import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./styles/checkout-modal.css";

class CheckoutModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      menus: props.menus,
      invoice: props.invoice,
      cashier: "Taufiq Widi",
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.menus !== this.props.menus) {
      this.setState({ menus: this.props.menus });
    }
  }

  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    this.setState({ show: true });
  };

  renderOrderDetails(order) {
    return (
      <div className="order-content">
        <h4>{`${order.quantity} ${order.name}`}</h4>
        <h4>
          {order.price === ""
            ? ""
            : `Rp. ${
                order.price * (order.quantity === "" ? 1 : order.quantity)
              }`}
        </h4>
      </div>
    );
  }

  render() {
    const ppn = this.state.menus.reduce((total, menu) => {
      return total + menu.price * menu.quantity * 0.1;
    }, 0);
    const totalPrice =
      ppn +
      this.state.menus.reduce((total, menu) => {
        return total + menu.price * menu.quantity;
      }, 0);
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
          <Modal.Header className="modal-header">
            <div className="header-text">
              <h3> Checkout</h3>
              <h3>{`#${this.state.invoice}`}</h3>
            </div>
            <p className="cashier-name">Cashier: {this.state.cashier}</p>
          </Modal.Header>
          <Modal.Body>
            {this.state.menus.map((menu) => {
              return (
                <div className="order-content-container">
                  {this.renderOrderDetails(menu)}
                </div>
              );
            })}
            {this.renderOrderDetails({
              name: "Ppn 10%:",
              quantity: "",
              price: ppn,
            })}
            {this.renderOrderDetails({
              name: "Total:",
              quantity: "",
              price: totalPrice,
            })}
            {this.renderOrderDetails({
              name: "Payment: Cash",
              quantity: "",
              price: "",
            })}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.handleClose}>
              Send Email
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Print
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default CheckoutModal;
