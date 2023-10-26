import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const Navbar = () => {
    const {user, logOut}= useContext(AuthContext)

    const handleLogOut=()=>{
        logOut()
        .then()
        .catch(error=>console.log(error))
    }

    const navItems = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/about'>About</Link></li>

    {
        user?.email ? 
        <li><button onClick={handleLogOut}>Log Out</button></li>:
        <li><Link to='/login'>Log In</Link></li>
        
    }
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link to='/' className=" normal-case text-xl">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                <button className="btn bg-white border-[#FF3811] text-[#FF3811] font-bold hover:text-white hover:bg-[#FF3811] ">Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;