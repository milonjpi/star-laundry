import axios from 'axios';
import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import Admin from '../Admin/Admin';
import Customer from '../Customer/Customer';
import Header from '../Home/Header/Header';

const Dashboard = () => {
    const [loggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    const adminData = {adminEmail : loggedInUser.email};
    axios.post('http://localhost:5058/isAdmin', adminData)
    .then(res => setIsAdmin(res.data))
    

    return (
        <>
            <Header />
            {
                isAdmin ? <Admin /> : <Customer />
            }
        </> 
    );
};

export default Dashboard;