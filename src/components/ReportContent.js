import React from "react";
import "./styles/ReportContent.css";
import moment from "moment";

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
        ordersReport: [...this.props.ordersReport],
      });
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <div className="card card1">
              <h4>Today's Income</h4>
              <h2>Rp. 1.000.000</h2>
              <h4>+2% Yesterday</h4>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="card card2">
              <h4>Orders</h4>
              <h2>3.270</h2>
              <h4>+5% Last Week</h4>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="card card3">
              <h4>This Year’s Income</h4>
              <h2>Rp. 100.000.000.000</h2>
              <h4>+10% Last Year</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12">
            <div className="chart-container">
              <div className="row">
                <div className="col-md-12">
                  <div className="title-container">
                    <h3>Revenue</h3>
                    <select className="month-select" name="month">
                      <option value="month">Month</option>
                    </select>
                  </div>
                </div>
                <div className="col-12 col-xs-12 col-sm-12 col-md-12">
                  <div className="chart-legend-container">
                    <div className="chart-chart-container">
                      <div className="chart chart1">
                        <div className="value1 chart-value1">&nbsp;</div>
                        <div className="value1 chart-value2">&nbsp;</div>
                        <div className="value1 chart-value3">&nbsp;</div>
                        <div className="value1 chart-value4">&nbsp;</div>
                        <div className="value1 chart-value1">&nbsp;</div>
                        <div className="value1 chart-value2">&nbsp;</div>
                        <div className="value1 chart-value4">&nbsp;</div>
                      </div>
                      <div className="chart chart2">
                        <div className="value2 chart-value1">&nbsp;</div>
                        <div className="value2 chart-value2">&nbsp;</div>
                        <div className="value2 chart-value3">&nbsp;</div>
                        <div className="value2 chart-value4">&nbsp;</div>
                        <div className="value2 chart-value1">&nbsp;</div>
                        <div className="value2 chart-value2">&nbsp;</div>
                        <div className="value2 chart-value1">&nbsp;</div>
                      </div>
                    </div>
                    <div className="legend-container">
                      <div className="legend-axis">
                        <div className="legend-x1">
                          <table className="legend-x1-value">
                            <tbody>
                              <tr>
                                <th>0</th>
                                <th>10k</th>
                                <th>20k</th>
                                <th>30k</th>
                                <th>40k</th>
                                <th>50k</th>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="legend-x2">
                          <table className="legend-x2-value">
                            <tbody>
                              <tr>
                                <th>0</th>
                                <th>10k</th>
                                <th>20k</th>
                                <th>30k</th>
                                <th>40k</th>
                                <th>50k</th>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="legend-label">
                        <div style={{ display: "flex", width: "50%" }}>
                          <div
                            style={{
                              width: "5px",
                              height: "5px",
                              background: "#00F1FF",
                            }}
                          ></div>
                          <h4
                            style={{
                              display: "block",
                              fontSize: "10px",
                              lineHeight: "13px",
                              color: "#000000",
                            }}
                          >
                            This Month
                          </h4>
                        </div>
                        <div style={{ display: "flex", width: "50%" }}>
                          <div
                            style={{
                              width: "5px",
                              height: "5px",
                              background: "#FFB8C6",
                            }}
                          ></div>
                          <h4
                            style={{
                              display: "block",
                              fontSize: "10px",
                              lineHeight: "13px",
                              color: "#000000",
                            }}
                          >
                            Last Month
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-xs-12 col-sm-12">
            <div className="recent-order-container">
              <div className="row">
                <div className="col-md-12">
                  <div className="title-container">
                    <h3>Recent Order</h3>
                    <select className="month-select" name="month">
                      <option value="year">Today</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-12">
                  <table className="table order-table">
                    <thead>
                      <tr>
                        <th scope="col">INVOICES</th>
                        <th scope="col">CASHIER</th>
                        <th scope="col">DATE</th>
                        <th scope="col">ORDERS</th>
                        <th scope="col">AMOUNT</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.ordersReport.map((orderReport) => {
                        return orderReport.map((el) => {
                          return (
                            <tr>
                              <th>{el.invoice}</th>
                              <th>{el.cashier}</th>
                              <th>{moment(el.order_date).format('YYYY-MM-DD HH:mm:ss')}</th>
                              <th>
                                {el.product_order
                                  .map((product) => {
                                    return product.product_name;
                                  })
                                  .join(", ")}
                              </th>
                              <th>{`Rp. ${el.total_amount}`}</th>
                            </tr>
                          );
                        });
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReportContent;
