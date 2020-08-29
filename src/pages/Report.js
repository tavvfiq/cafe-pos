import React, { useState, useEffect } from "react";
import LeftSidebar from "../components/LeftSidebar";
import TopHeader from "../components/TopHeader_Report";
import ReportContent from "../components/ReportContent";
import Axios from "axios";
import "./Report.css";
import { connect, useSelector } from "react-redux";
import { Toast } from "react-bootstrap";

const Report = (props) => {
  const [leftSidebarDisplayed, setLeftSidebarDisplayed] = useState(false);
  const [userProfileDisplayed, setDisplayUserProfile] = useState(false);
  const [ordersReport, setOrdersReport] = useState([]);
  const [show, setShow] = useState(false);
  const { token } = useSelector((state) => state.authState.session);
  const { msg } = useSelector((state) => state.menusState);

  const fetchReportContent = () => {
    const config = {
      headers: {
        "x-access-token": "Bearer " + token,
      },
    };
    Axios.get(`${process.env.REACT_APP_BACKEND_API}/history`, config)
      .then((res) => {
        setOrdersReport(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchReportContent();
  }, []);

  useEffect(() => {
    console.log(msg);
    if (msg || msg !=="") {
      setShow(true);
    }
  }, [msg]);

  const handleClickLeftSidebar = () => {
    setLeftSidebarDisplayed(!leftSidebarDisplayed);
    setDisplayUserProfile(false);
  };

  const handleClickUserProfile = () => {
    setDisplayUserProfile(!userProfileDisplayed);
    setLeftSidebarDisplayed(false);
  };

  return (
    <>
      {ordersReport === undefined ? (
        ""
      ) : (
        <>
          <header>
            <TopHeader onClickMenu={handleClickLeftSidebar} />
          </header>
          <div className="main-container">
            <LeftSidebar
              displayed={leftSidebarDisplayed}
              userProfileDisplayed={userProfileDisplayed}
              onClickUserProfile={handleClickUserProfile}
              updateMenu={null}
            />
            <ReportContent ordersReport={ordersReport} />
          </div>
        </>
      )}
      <Toast
        onClose={() => {
          setShow(false);
        }}
        show={show}
        animation={true}
        delay={3000}
        className="toast"
        autohide
      >
        <Toast.Body>{msg}</Toast.Body>
      </Toast>
    </>
  );
};

export default Report;
