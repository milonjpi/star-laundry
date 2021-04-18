import React, { useContext, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { useHistory, useParams } from "react-router";
import { UserContext } from "../../../App";
import ProcessPayment from "../ProcessPayment/ProcessPayment";
import axios from "axios";


const Order = () => {
  const [loggedInUser] = useContext(UserContext);
  const { displayName, email } = loggedInUser;
  const { id } = useParams();
  const [orderProduct, setOrderProduct] = useState({});

  const history = useHistory();

  useEffect(() => {
    fetch(`http://localhost:5058/order/${id}`)
      .then((res) => res.json())
      .then((data) => setOrderProduct(data[0]));
  }, [id]);
  const { serviceTitle, serviceCost } = orderProduct;

  const handlePayment = (paymentId) => {
    const orderDetails = {
      ...loggedInUser,
      orderInfo: orderProduct,
      paymentId,
      orderStatus: "Pending",
      orderTime: new Date(),
    };
    axios
      .post("http://localhost:5058/addorder", orderDetails)
      .then((res) => {
        if (res) {
          alert("Your order placed successfully");
          history.push("/dashboard");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="col-md-9 overflow-hidden">
      <h3>Order</h3>
      <div className="bg-light h-100">
        {
          id ?         <div className="p-4">
          <Form>
            <div className="row">
              <div className="col-md-6">
                <Form.Group controlId="customerName">
                  <Form.Control
                    name="customerName"
                    type="text"
                    value={id ? displayName : null}
                    disabled
                  />
                </Form.Group>
                <Form.Group controlId="customerEmail">
                  <Form.Control
                    name="customerEmail"
                    type="text"
                    value={id ? email : null}
                    disabled
                  />
                </Form.Group>
                <Form.Group controlId="orderedService">
                  <Form.Control
                    name="orderedService"
                    type="text"
                    placeholder={serviceTitle}
                    disabled
                  />
                </Form.Group>
              </div>
            </div>
          </Form>
          <div className="row">
            <div className="col-md-6">
              <h5 className="py-3 text-info">
                Please Pay For This Order:{" "}
                <span className="text-danger">{id ? serviceCost : 0} TK</span>
              </h5>
              <ProcessPayment handlePayment={handlePayment}></ProcessPayment>
            </div>
          </div>
        </div>
        : <h4 className="text-center pt-5 text-danger">No Service Selected</h4>
        }
      </div>
    </div>
  );
};

export default Order;
