import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const CheckOut = () => {
    const service = useLoaderData()
    const { title, price, service_id, img } = service
    const {user} = useContext(AuthContext)

    const handleOrder = e => {
        e.preventDefault();
        const form = e.target;
        const firstName = form.firstName.value 
        const lastName = form.lastName.value 
        const phone = form.phone.value 
        const email = form.email.value 
        const message = form.message.value 
        const date = form.date.value 
        const price = form.price.value 
        const order={
            title,
            firstName,
            lastName,
            phone,
            email,
            date,
            price,
            message,
            service_id,
            img
        }
        console.log(order)
        fetch('http://localhost:5000/orderedService', {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{console.log(data)
        if(data.insertedId){
            alert('service ordered successfully')
        }
        })
    }

    return (
        <div>
            <h1 className="text-2xl font-bold text-center mb-2">Order service: {title}</h1>
            <div className="w-3/4 mx-auto">
                <form onSubmit={handleOrder} className="p-5 bg-gray-300 ">
                    <div className="grid grid-cols-2 gap-2  mx-auto">
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text ">First Name</span>
                            </label>
                            <input type="text" placeholder="First Name" name="firstName" className="input input-bordered" required />
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text ">Last Name</span>
                            </label>
                            <input type="text" placeholder="Last Name" name="lastName" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2  mx-auto">
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text ">Phone Number</span>
                            </label>
                            <input type="number" placeholder="Phone Number" name="phone" className="input input-bordered" required />
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text ">Your Email</span>
                            </label>
                            <input type="email" placeholder="Your Email" defaultValue={
                               user? user?.email : ""
                                } name="email" className="input input-bordered" required />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2  mx-auto">
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text ">Date</span>
                            </label>
                            <input type="date" placeholder="Date" name="date" className="input input-bordered" required />
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text ">Price</span>
                            </label>
                            <input type="text" placeholder="Price" defaultValue={'$' + price} name="price" className="input input-bordered" required />
                        </div>
                    </div>

                    <div className=" mx-auto mt-2">
                        <label className="label">
                            <span className="label-text ">Your Message</span>
                        </label>
                        <textarea name="message" placeholder="Your Message" className="p-2 rounded-lg mt-1" id="" cols="120" rows="3"></textarea>
                    </div>
                    <div className=" mx-auto mt-2">

                        <input type="submit" className="btn bg-[#FF3811] hover:bg-[#FF3811] text-white w-full border-none" value="Order Confirm" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;