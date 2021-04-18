import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const OrderList = () => {
    const [orderInfo, setOrderInfo] = useState([])
    console.log(orderInfo);
    const { log } = useContext(UserContext);
    const [loggedIn, setLoggedIn] = log;

    useEffect(() => {
        fetch('http://localhost:5000/orderDetails?email=' + loggedIn.email)
            .then(res => res.json())
            .then(data => setOrderInfo(data))
    }, [])




    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                {
                    orderInfo.map(order =>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 offset-1 mt-5 rounded-3" style={{ boxShadow: '0 0 10px grey' }}>
                                    <div className="mt-3 mb-3 justify-content-center align-items-center d-flex">
                                        <img className="img-fluid" style={{ width: "150px", borderRadius: "50%" }} src={order.service?.imageURL} alt="" />
                                    </div>
                                    <div className="mt-3 mb-3 ms-3">
                                        <h3 className="text-center">{order.service?.name}</h3>
                                        <h5 className="text-center">$ {order.service?.price}</h5>
                                        <h6 className="text-center text-danger">Order Status: {order.status}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                }
            </div>
        </div>
    );
};

export default OrderList;