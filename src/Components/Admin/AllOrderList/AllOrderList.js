import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AllOrderList = () => {
    const [allOrder, setAllOrder] = useState([])
    const [show, setShow] = useState(false);
    const [update, setUpdate] = useState([])
    console.log(update)
    useEffect(() => {
        fetch('http://localhost:5000/allOrderDetails')
            .then(res => res.json())
            .then(data => setAllOrder(data))
    }, [])


    const handleChange = (e) => {
        console.log(e.target.name, e.target.value)
        const data = {...update}
        data[e.target.name] = e.target.value;
        setUpdate(data)
        setShow(true);
    }

    const handleClick = (id) => {
        const url = `http://localhost:5000/update/${id}`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => {
                if (res) {
                    console.log(res)
                    alert('Your status has been update successfully');
                }
            })
    }


    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">

                <div className="row">
                    {
                        allOrder.map(order =>

                            <div className="col-md-3 offset-md-1 m-2  mt-5 rounded-3" style={{ boxShadow: '0 0 10px grey' }}>
                                <div className="mt-3 mb-3 justify-content-center align-items-center d-flex">
                                    <img className="img-fluid" style={{ width: "150px", borderRadius: "50%" }} src={order.service?.imageURL} alt="" />
                                </div>
                                <div className="mt-3 mb-3 ms-3">
                                    <h3 className="text-center">{order.service?.name}</h3>
                                    <h5 className="text-center">$ {order.service?.price}</h5>
                                    <h3><select value={order.status} onChange={handleChange} className="form-control text center" name="status">
                                        <option>Pending</option>
                                        <option>Shipped</option>
                                        <option>Done</option>
                                    </select></h3>
                                    {
                                        show && <button className="btn btn-success" onClick={() => handleClick(order._id)}>Update</button>
                                    }
                                </div>
                            </div>


                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default AllOrderList;