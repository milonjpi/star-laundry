import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect( () => {
      fetch('http://localhost:5058/services')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  return (
    <div className="container mt-5">
      <h1 className="text-center py-4">Our Services</h1>
      <div className="row">
        {
          services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
        }
      </div>
    </div>
  );
};


export default Services;
