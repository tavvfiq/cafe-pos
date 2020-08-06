import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./styles/checkout-modal.css";

class CheckoutModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      menus: props.menus,
      invoice:props.invoice
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

  renderOrderDetails(order) {
    return (
      <div className="order-content">
        <h4>{`${order.quantity} ${order.name}`}</h4>
        <h4>{order.price ==="" ? "" : `Rp. ${
          order.price * (order.quantity === "" ? 1 : order.quantity)
        }`}</h4>
      </div>
    );
  }

  render() {
    const ppn = this.state.menus.reduce((total, menu) => {
      return total + menu.price * menu.quantity * 0.1;
    }, 0);
    const totalPrice = ppn + this.state.menus.reduce((total, menu) => {
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
          <Modal.Body>
            <h3> Checkout</h3>
            {this.state.menus.map((menu) => {
              return (
                <div className="order-content-container">
                  {this.renderOrderDetails(menu)}
                </div>
              );
            })}
            {this.renderOrderDetails({
              name: "Ppn 10%",
              quantity: "",
              price: ppn ,
            })}
            {this.renderOrderDetails({
              name: "Total",
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
            <Button variant="secondary" onClick={this.handleClose}>
              Send Email
            </Button>
            <Button variant="primary">Print</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default CheckoutModal;
