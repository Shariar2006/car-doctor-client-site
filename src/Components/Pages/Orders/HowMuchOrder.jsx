/* eslint-disable react/prop-types */


const HowMuchOrder = ({ order, serviceDelete, handleOrderConfirm }) => {
    const { img, _id, date, email, phone, firstName, lastName, title, price, status } = order || {}



    return (

        <tr className="">
            <th>
                <button onClick={() => serviceDelete(_id)} className="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="mask rounded w-24 h-24">
                        <img src={img} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td>
                <div className="font-bold">{title}</div>
            </td>
            <td>
                <div>
                    <div className="font-bold">{firstName + lastName}</div>
                    <div className="text-sm opacity-50">Email: {email}</div>
                    <div className="text-sm opacity-50">Phone: {phone}</div>
                </div>
            </td>
            <td className="font-bold">{price}</td>
            <td className="font-bold">{date}</td>
            <th>
                {
                    status === 'confirm' ?
                        <span className="font-bold text-primary">Confirmed</span> :
                        <button onClick={() => handleOrderConfirm(_id)} className="btn btn-ghost btn-xs">Confirm</button>
                }
            </th>
        </tr>

    );
};

export default HowMuchOrder;