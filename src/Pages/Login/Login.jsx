import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <div className="max-w-lg mx-auto">
                <div className="bg-black rounded-box">
                    <h3 className="text-3xl text-white font-bold text-center py-8">Login</h3>
                </div>
                <form className="card-body 2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <Link>
                            <button className="bg-[#F5A425] w-full text-white text-md font-bold px-4 py-2 rounded-md">Login</button>
                        </Link>
                    </div>
                    <p className="text-md">Do not have an account yet? <Link to={"/signup"} className="text-[#F5A425] font-bold">Sign Up</Link></p>
                    <hr className="mt-5 bg-red" />
                    <div className="mx-20">
                        <Link>
                            <button className=" border-2 border-[#F5A425] text-black text-md font-bold px-4 py-2 rounded-md flex items-center justify-center w-full"><FaGoogle className="mr-2"></FaGoogle>Login with Google</button>
                        </Link>
                    </div>
                </form>

            </div>
        </div>

    );
};

export default Login;