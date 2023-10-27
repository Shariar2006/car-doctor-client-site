import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import HowMuchOrder from "./HowMuchOrder";


const Orders = () => {
    const { user } = useContext(AuthContext)
    const [orders, setOrders] = useState()
    const url = `http://localhost:5000/orderedService/?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data =>
                setOrders(data))
    }, [])
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
                            <th>Customer Name</th>
                            <th>Service Price</th>
                            <th>Service Ordered date</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map(order => <HowMuchOrder key={order._id} order={order} serviceDelete={serviceDelete}></HowMuchOrder>)
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