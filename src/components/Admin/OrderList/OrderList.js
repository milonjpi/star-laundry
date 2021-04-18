import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import OrderListBody from "./OrderListBody";

const OrderList = () => {
  const [ordersList, setOrdersList] = useState([]);
  useEffect(() => {
    fetch("https://sheltered-tor-88108.herokuapp.com/ordersList")
      .then((res) => res.json())
      .then((data) => setOrdersList(data));
  }, []);
  return (
    <div className="col-md-9 overflow-hidden">
      <h3>Order List</h3>
      <div className="bg-light h-100">
        <div className="p-3">
          <Table hover>
            <thead>
              <tr>
                <th>Name</th>
                <th className="text-center">Email ID</th>
                <th className="text-center">Service</th>
                <th className="text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(ordersList).length !== 0 ? (
                ordersList.map((orList) => (
                  <OrderListBody key={orList._id} orList={orList}></OrderListBody>
                ))
              ) : (
                <tr>
                  <td className="text-center" colSpan="4">
                    No Data Found
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
