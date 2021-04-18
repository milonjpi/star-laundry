import React, { useState } from "react";
import AddService from "./AddService/AddService";
import "./Admin.css";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import ManageServices from "./ManageServices/ManageServices";
import OrderList from "./OrderList/OrderList";

const Admin = () => {
    const [admin, setAdmin] = useState({
        name: "orderList"
    })
    const handleAdmin = e => {
        const newAdmin = {name: e.target.name};
        setAdmin(newAdmin);
    }
  return (
      <div className="container mt-5">
        <div className="row adminHeight">
          <div className="col-md-3">
            <div className="pl-3">
              <h4>Star Laundry</h4>
              <ul className="ulListStyle">
                <li>
                  <button onClick={handleAdmin} name="orderList" className="btn">
                    Order List
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleAdmin}
                    name="addService"
                    className="btn"
                  >
                    Add Service
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleAdmin}
                    name="makeAdmin"
                    className="btn"
                  >
                    Make Admin
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleAdmin}
                    name="manageServices"
                    className="btn"
                  >
                    Manage Services
                  </button>
                </li>
              </ul>
            </div>
          </div>
          {admin.name === "orderList" ? (
            <OrderList />
          ) : admin.name === "addService" ? (
            <AddService />
          ) : admin.name === "makeAdmin" ? (
            <MakeAdmin />
          ): <ManageServices />
          }
        </div>
      </div>
  );
};

export default Admin;
