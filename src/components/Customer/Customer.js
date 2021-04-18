import React, { useState } from 'react';
import './Customer.css';
import Order from './Order/Order';
import OrderingList from './OrderingList/OrderingList';
import Review from './Review/Review';

const Customer = () => {
    const [customer, setCustomer] = useState({
        name: "order"
    })
    const handleCustomer = e => {
        const newCustomer = {name: e.target.name};
        setCustomer(newCustomer);
    }
    return (
        <div className="container mt-5">
            <div className="row customerHeight">
                <div className="col-md-3">
                    <div className="pl-4">
                        <h4>Star Laundry</h4>
                        <ul className="ulListStyle">
                            <li>
                                <button onClick={handleCustomer} name="order" className="btn">Order</button>
                            </li>
                            <li>
                                <button onClick={handleCustomer} name="orderingList" className="btn">Ordering List</button>
                            </li>
                            <li>
                                <button onClick={handleCustomer} name="reviews" className="btn">Review</button>
                            </li>
                        </ul>
                    </div>
                </div>
                {
                    customer.name === "order" ? <Order /> : customer.name === "orderingList" ? <OrderingList /> :<Review />
                }

            </div>
            
        </div>
    );
};

export default Customer;