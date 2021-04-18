import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ServiceBody = ({ srv }) => {
  const { _id, serviceTitle, serviceDescription, serviceCost } = srv;
  const handleDelete = (e, id) => {
    fetch(`https://sheltered-tor-88108.herokuapp.com/deleteService/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      if(data){
        e.target.parentNode.parentNode.parentNode.parentNode.style.display = "none";
      }
    })
}
  return (
    <tr>
      <td className="width-150">{serviceTitle}</td>
      <td className="text-center">{serviceDescription}</td>
      <td className="text-center">{serviceCost} TK</td>
      <td className="text-center">
        <span className="custom-delete" type="button">
          <FontAwesomeIcon
            onClick={(e) => handleDelete(e, _id)}
            icon={faTrash}
          />
        </span>
      </td>
    </tr>
  );
};

export default ServiceBody;
