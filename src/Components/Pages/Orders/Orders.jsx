import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import HowMuchOrder from "./HowMuchOrder";
import axios from "axios";


const Orders = () => {
    const { user } = useContext(AuthContext)
    const [orders, setOrders] = useState()
    const url = `http://localhost:5000/orderedService/?email=${user?.email}`

    useEffect(() => {

        axios.get(url, {withCredentials: true})
        .then(res=>{
            setOrders(res.data)
        })

        // fetch(url)
        //     .then(res => res.json())
        //     .then(data =>
        //         setOrders(data))
    }, [url])
    const serviceDelete = id => {
        const proceed = confirm('Are you sure you want to delete');
        if (proceed) {
            fetch(`http://localhost:5000/orderedService/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining)
                    }
                })
        }
    }
    const handleOrderConfirm = id => {
        fetch(`http://localhost:5000/orderedService/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Your order confirm')
                    const remaining = orders.filter(order => order._id !== id);
                    const updateStatus = orders.find(order=> order._id === id)
                    updateStatus.status = 'confirm'
                    const newOrders = [updateStatus, ...remaining]
                    setOrders(newOrders)
                }
            })
    }

    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-base-200">
                        <tr>
                            <th>Delete</th>
                            <th>Service Img</th>
                            <th>Service Name</th>
                            <th>Customer Details</th>
                            <th>Service Price</th>
                            <th>Service Ordered date</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map(order =>
                                <HowMuchOrder
                                    key={order._id}
                                    order={order}
                                    serviceDelete={serviceDelete}
                                    handleOrderConfirm={handleOrderConfirm}
                                ></HowMuchOrder>)
                        }
                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    );
};

export default Orders;