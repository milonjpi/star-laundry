import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import OrderingListCard from "./OrderingListCard";

const OrderingList = () => {
  const [loggedInUser, ] = useContext(UserContext);
  const {email} = loggedInUser;
  const [orders, setOrders] = useState([]);
  useEffect( () => {
    fetch('https://sheltered-tor-88108.herokuapp.com/orders?email='+email)
    .then(res => res.json())
    .then(data => setOrders(data))
  },[email])
  return (
    <div className="col-md-9 overflow-hidden">
      <h3>Order List</h3>
      <div className="bg-light h-100">
          <div className="row">
            {
              orders.map( ord => <OrderingListCard key={ord._id} ord={ord}></OrderingListCard>)
            }
          </div>
      </div>
    </div>
  );
};

export default OrderingList;
