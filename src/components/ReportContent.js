import React from "react";
import "./styles/ReportContent.css";
import RevenueChart from "./RevenueChart";
import RecentOrderTable from "./RecentOrderTable";

class ReportContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ordersReport: props.ordersReport,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.ordersReport !== this.props.ordersReport) {
      this.setState({
        ordersReport: this.props.ordersReport,
      });
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4">
            <div className="card card1">
              <h4>Today's Income</h4>
              <h2>Rp. 1.000.000</h2>
              <h4>+2% Yesterday</h4>
            </div>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4">
            <div className="card card2">
              <h4>Orders</h4>
              <h2>3.270</h2>
              <h4>+5% Last Week</h4>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <div className="card card3">
              <h4>This Year’s Income</h4>
              <h2>Rp. 100.000.000.000</h2>
              <h4>+10% Last Year</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-xs-12 col-sm-12 col-md-12">
            <div className="chart-container">
              <RevenueChart
                data={this.state.ordersReport.map((orderReport) => {
                  return {
                    date: orderReport.order_date.split("T")[0].split("-")[2],
                    amount: orderReport.total_amount/1000,
                  };
                })}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-xs-12 col-sm-12 col-md-12">
            <div className="recent-order-container">
              <RecentOrderTable ordersReport={this.state.ordersReport} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReportContent;
