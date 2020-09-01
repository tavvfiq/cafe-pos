import React from "react";
import { Button } from "react-bootstrap";
import "./styles/CardRightSidebar.css";
import { useSelector } from "react-redux";
import DeleteItemModal from "./DeleteItemModal";
import UpdateItemModal from "./UpdateItemModal";
import trash_icon from "../assets/img/trash.png";
import edit_icon from "../assets/img/edit.png";

const CardSidebarAdmin = (props) => {
  const { session } = useSelector((state) => state.authState);

  let showUpdateItemModal;
  const onClickUpdateItem = () => {
    try {
      showUpdateItemModal();
    } catch (err) {
      console.log(err);
    }
  };
  const updateItemModalRef = (props) => {
    if (props === null) {
      return;
    }
    const { handleShow } = props;
    showUpdateItemModal = handleShow;
  };

  let showDeleteItemModal;
  const onClickDeleteItem = () => {
    try {
      showDeleteItemModal();
    } catch (err) {
      console.log(err);
    }
  };
  const deleteItemModalRef = (props) => {
    if (props === null) {
      return;
    }
    const { handleShow } = props;
    showDeleteItemModal = handleShow;
  };
  return (
    <>
      <UpdateItemModal
        ref={updateItemModalRef}
        id={props.id}
        token={session.token}
      />
      <DeleteItemModal
        ref={deleteItemModalRef}
        id={props.id}
        token={session.token}
      />
      <div className="card-container">
        <div className="card-image">
          <img src={props.image_path} alt="" />
        </div>
        <div className="card-text">
          <div className="top-text">
            <h5>{props.name}</h5>
          </div>
          <div className="bottom-text-admin">
            <h5>#{props.id}</h5>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                variant="danger"
                className="button-margin"
                onClick={onClickDeleteItem}
              >
                <img className="button-icon" src={trash_icon} alt="" />
              </Button>
              <Button variant="primary" onClick={onClickUpdateItem}>
                <img className="button-icon" src={edit_icon} alt="" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSidebarAdmin;
