import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, serviceTitle, serviceDescription, serviceCost, imageURL } = service;
  return (
    <div className="col-md-3 mb-4">
      <div className="p-3 m-2 shadow">
        <img className="w-100 rounded" src={imageURL} alt={serviceTitle} />
        <h5 className="pt-3">{serviceTitle}</h5>
        <p>{serviceDescription}</p>
        <div className="row align-items-center">
            <div className="col-5">
                <h5>{serviceCost} TK</h5>
            </div>
            <div className="col-7 text-right">
                <Link to={`/dashboard/${_id}`}><button className="btn btn-primary">ORDER NOW</button></Link>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ServiceCard;
