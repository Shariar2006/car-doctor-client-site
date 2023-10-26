/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Service = ({ service }) => {
    const { _id, price, img, title } = service || {}
    return (
        <div>
            <div className="card w-96 bg-base-100 border-2">
                <figure className="px-8 pt-8">
                    <img src={img} alt="Shoes" className="rounded-xl h-56
                    " />
                </figure>
                <div className="card-body">
                    <h2 className="text-xl font-bold text-gray-600">{title}</h2>
                    <div className="flex justify-between">
                        <p className="text-[#FF3811] text-lg font-bold">Price: ${price}</p>
                        <Link to={`/service/${_id}`} className="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                <path d="M1.5 8H16.5M16.5 8L9.75 1.25M16.5 8L9.75 14.75" stroke="#FF3811" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Service;