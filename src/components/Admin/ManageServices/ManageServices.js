import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import ServiceBody from "./ServiceBody";

const ManageServices = () => {
  const [services, setServices] = useState([]);
  useEffect( () => {
      fetch('http://localhost:5058/services')
      .then(res => res.json())
      .then(data => setServices(data))
  }, []);
  return (
    <div className="col-md-9 overflow-hidden">
      <h3>Manage Services</h3>
      <div className="bg-light h-100">
        <div className="p-3">
          <Table hover>
              <thead>
                <tr>
                  <th>Service Title</th>
                  <th className="text-center">Description</th>
                  <th className="text-center">ServiceCost</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
              {
                Object.keys(services).length !== 0 ? services.map(srv => <ServiceBody key={srv._id} srv={srv}></ServiceBody>) : <tr><td className="text-center" colSpan="4">No Data Found</td></tr>      
              }
              </tbody>
            </Table>
        </div>
      </div>
    </div>
  );
};

export default ManageServices;
