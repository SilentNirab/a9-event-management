import { Link,  useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { FaGoogle } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
    
    const {signIn,googleSignin} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handelSignIn = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
       
        // signin with email and password
        signIn(email, password)
        .then(result =>{
            console.log(result.user.email);
             // naviget after login
             navigate(location?.state ? location.state : "/");
        })
        .catch(error =>{
            console.error(error);
        })
        
    };
    //Login with google
    const handelGoogle = () =>{
        googleSignin()
        .then(result =>{
            console.log(result.user);
             // naviget after login
             navigate(location?.state ? location.state : "/");
        })
        .catch(error =>{
            console.error(error);
        })
    }
return (
    <div>
        <Navbar></Navbar>
        <div className="max-w-lg mx-auto">
            <div className="bg-black rounded-box">
                <h3 className="text-3xl text-white font-bold text-center py-8">Login</h3>
            </div>
            <form onSubmit={handelSignIn} className="card-body 2">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                </div>
                    <div className="form-control mt-6">
                    
                            <button className="bg-[#F5A425] w-full text-white text-md font-bold px-4 py-2 rounded-md">Login</button>
                        
                    </div>
                    <p className="text-md">Do not have an account yet? <Link to={"/signup"} className="text-[#F5A425] font-bold">Sign Up</Link></p>
                    <hr className="mt-5 bg-red" />
                    <div className="mx-20">
                        
                            <button onClick={handelGoogle} className=" border-2 border-[#F5A425] text-black text-md font-bold px-4 py-2 rounded-md flex items-center justify-center w-full"><FaGoogle className="mr-2"></FaGoogle>Login with Google</button>
                        
                    </div>
                </form>

            </div>
        </div>

    );
};

export default Login;