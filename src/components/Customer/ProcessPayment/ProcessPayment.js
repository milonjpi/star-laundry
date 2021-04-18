import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentCardForm from "./PaymentCardForm";

const stripePromise = loadStripe(
  "pk_test_51IhTcsCihKZUMKtoZb7rldgmmp3tW3Hq1cfVBZe7k8bCa8fcSI2k3z8QWeszp0VjHMyDs9T8BKa8p0QgXvrtGopr00VP6XHhC6"
);

const ProcessPayment = ({handlePayment}) => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentCardForm handlePayment={handlePayment}></PaymentCardForm>
    </Elements>
  );
};

export default ProcessPayment;
