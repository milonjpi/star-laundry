import React from "react";
import "./OrderingList.css";

const OrderingListCard = ({ord}) => {
    const {orderInfo, orderStatus} = ord;
  return (
    <div className="col-md-6">
      <div className="m-3 p-3 rounded shadow">
        <div className="row align-items-center">
          <div className="col-6">
            <div className="orderImgDiv">
              <img className="w-100 orderListImg" src={orderInfo?.imageURL} alt="" />
            </div>
          </div>
          <div className="col-6">
            <div className="orderStatus ml-auto">
                <p className="text-center px-1 py-1">{orderStatus}</p>
            </div>
          </div>
        </div>
        <h4 className="pt-2">{orderInfo?.serviceTitle}</h4>
        <p>{orderInfo?.serviceDescription}</p>
      </div>
    </div>
  );
};

export default OrderingListCard;
