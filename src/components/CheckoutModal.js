import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./styles/CheckoutModal.css";
import Axios from "axios";

class CheckoutModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      menus: props.menus,
      cashier: "Taufiq Widi",
    };
    this.totalPrice = 0;
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

  sendTransaction = ()=>{
    const data = {
      invoice: this.props.invoice,
      cashier: this.state.cashier,
      order_product:[...this.state.menus.filter((menu)=>{
        return menu.checked === true;
      }).map((menu)=>{
        return {product_id: menu.id, quantity:menu.quantity}
      })],
      amount:this.totalPrice
    }
    Axios.post("http://localhost:8001/addtransaction",data).then((res)=>{
      console.log(res);
      this.props.onClickCheckout();
      this.handleClose();
    }).catch((err)=>{
      console.log(err);
    })
  }

  renderOrderDetails(order) {
    return (
      <div key={order.id} className="order-content">
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
    this.totalPrice =
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
              <h3>{`#${this.props.invoice}`}</h3>
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
              price: this.totalPrice,
            })}
            {this.renderOrderDetails({
              name: "Payment: Cash",
              quantity: "",
              price: "",
            })}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={this.sendTransaction}>
              Okay
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default CheckoutModal;
