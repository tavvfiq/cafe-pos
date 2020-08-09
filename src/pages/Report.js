import React from "react";
import LeftSidebar from "../components/LeftSidebar";
import TopHeader from "../components/TopHeader_Report";
import ReportContent from "../components/ReportContent";
import Axios from "axios";
import "./Report.css";

class Report extends React.Component {
  constructor() {
    super();
    this.state = {
      leftSidebarDisplayed: false,
      ordersReport: [],
    };
  }

  componentDidMount() {
    this.fetchReportContent();
  }

  fetchReportContent = () => {
    Axios.get("http://localhost:8001/history/")
      .then((res) => {
        this.setState({
          ordersReport: [...res.data.data],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleClickLeftSidebar = () => {
    this.setState({
      leftSidebarDisplayed: !this.state.leftSidebarDisplayed,
      rightSidebarDisplayed: false,
    });
  };

  render() {
    return (
      <>
        <header>
          <TopHeader onClickMenu={this.handleClickLeftSidebar} />
        </header>
        <div className="main-container">
          <LeftSidebar displayed={this.state.leftSidebarDisplayed}/>
          <ReportContent ordersReport={this.state.ordersReport} />
        </div>
      </>
    );
  }
}

export default Report;
