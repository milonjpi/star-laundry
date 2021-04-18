import React from 'react';

const OrderListBody = ({orList}) => {
    const { displayName, email, orderInfo, orderStatus } = orList;
    return (
        <tr>
        <td className="width-150">{displayName}</td>
        <td className="text-center">{email}</td>
        <td className="text-center">{orderInfo?.serviceTitle}</td>
        <td className="text-center text-danger">{orderStatus}</td>
      </tr>
    );
};

export default OrderListBody;