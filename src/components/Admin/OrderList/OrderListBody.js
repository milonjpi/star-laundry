import React from 'react';

const OrderListBody = ({orList}) => {
    const { _id, displayName, email, orderInfo, orderStatus } = orList;
const handleStatus = (id, e) => {
      const newStatus = e.target.value;
      const statusInfo = { id, newStatus};
      fetch(`https://sheltered-tor-88108.herokuapp.com/updateStatus/${id}`, {
        method: 'Patch',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(statusInfo)
      })
      .then(res => res.json())
      .then(data => {
        alert("Status Updated Successfully")
      })

}

    return (
        <tr>
        <td className="width-150">{displayName}</td>
        <td className="text-center">{email}</td>
        <td className="text-center">{orderInfo?.serviceTitle}</td>
        <td className="text-center">
          <select onChange={ (e) => handleStatus(_id, e) } className="width-115 p-1" name="">
            <option value="Pending">Pending</option>
            <option value="On Going">On Going</option>
            <option value="Done">Done</option>
          </select>  
        </td>
      </tr>
    );
};

export default OrderListBody;