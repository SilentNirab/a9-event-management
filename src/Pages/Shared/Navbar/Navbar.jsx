import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import defaultUserImage from "../../../assets/Images/user.png"

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const handelSignOut = () => {
        logOut()
        .then()
        .catch()
    }
    const Navlinks = <>
        <li className="text-lg font-bold text-black"><NavLink to={'/'} className={({ isActive, isPending }) =>
            isActive
                ? "border-[#F5A425] border-b-2 text-black text-lg font-bold px-1 py-1"
                : isPending
                    ? "pending "
                    : ""
        }>Home</NavLink></li>
        <li className="text-lg font-bold text-black"><NavLink to={'/meetings'} className={({ isActive, isPending }) =>
            isActive
                ? "border-[#F5A425] border-b-2 text-black text-lg font-bold px-1 py-1"
                : isPending
                    ? "pending "
                    : ""
        }>Meetings</NavLink></li>
        <li className="text-lg font-bold text-black"><NavLink to={'/about'} className={({ isActive, isPending }) =>
            isActive
                ? "border-[#F5A425] border-b-2 text-black text-lg font-bold px-1 py-1"
                : isPending
                    ? "pending "
                    : ""
        }>About</NavLink></li>
    </>
    return (

        <div className="py-5">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {Navlinks}
                        </ul>
                    </div>
                    <Link to={"/"}>
                        <button className=" text-lx md:text-2xl font-bold" ><span className="text-[#F5A425]">EDU</span> CONFERENCE</button>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal px-1 space-x-2">
                        {Navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                   
                    {
                        user ? 
                        <div className="flex items-center">
                            <p className="text-md font-bold">{user.displayName}</p>
                            <img className="w-10 mx-2 rounded-full" src={user.photoURL} alt="user-image" /> 
                        </div>

                        : 
                        <img className="w-10 pr-2 rounded" src={defaultUserImage} alt="" />
                    }
                    {
                        user ?
                            
                            <button onClick={handelSignOut} className="bg-[#F5A425] text-white text-lg font-bold px-4 py-2 rounded-md">Sign Out</button>
                            :
                            <Link to={"/login"}>
                                <button className="bg-[#F5A425] text-white text-lg font-bold px-4 py-2 rounded-md">LogIn</button>
                            </Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;