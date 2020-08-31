import React from "react";
import moment from "moment";

const RecentOrderTable = (props) => {
  return (
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
            {props.ordersReport.map((orderReport) => {
                return (
                  <tr>
                    <th>{orderReport.invoice}</th>
                    <th>{orderReport.cashier}</th>
                    <th>
                      {moment(orderReport.order_date).format("YYYY-MM-DD HH:mm:ss")}
                    </th>
                    <th>
                      {orderReport.menu_order
                        .map((menu) => {
                          return [menu.menu_quantity, menu.menu_name].join(" ");
                        })
                        .join(", ")}
                    </th>
                    <th>{`Rp. ${orderReport.total_amount.toLocaleString("id-ID")}`}</th>
                  </tr>
                );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrderTable;
