import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";

const SignUp = () => {

    const { signUp, googleSignin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handelSignUp = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const imgUrl = form.get('imgUrl');
        const email = form.get('email');
        const password = form.get('password');

        if (password.length < 6) {
            toast("Password should be at least 6 characters or longer!");
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast('Your password should have at least one upper case characters!');
            return;
        }
        else if (!/(?=.*[@$!%*#?&])/.test(password)) {
            toast('Your password should have at least one special characters.');
            return;
        }
        else{
            toast("Successfuly Sign Up");
        }
        // signup with email and password
        signUp(email, password)
            .then(result => {
                // user proflie update
                updateProfile(result.user, {
                    displayName: name, photoURL: imgUrl
                  }).then(() => {
                    
                    console.log("Profile updated!");
                  }).catch((error) => {
                    console.error(error);
                  });
                // naviget after login
                navigate(location?.state ? location.state : "/");
            })
            .catch(error => {
                console.error(error);
            })
    };

    //Login with google
    const handelGoogle = () => {
        googleSignin()
            .then(result => {
                console.log(result.user);
                // naviget after login
                navigate(location?.state ? location.state : "/");
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-lg mx-auto">
                <div className="bg-black rounded-box">
                    <h3 className="text-3xl text-white font-bold text-center py-8">Sign Up</h3>
                </div>
                <form onSubmit={handelSignUp} className="card-body 2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <input type="text" name="imgUrl" placeholder="Image url" className="input input-bordered" required />
                    </div>
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

                        <button className="bg-[#F5A425] w-full text-white text-md font-bold px-4 py-2 rounded-md">Sign Up</button>

                    </div>
                    <p className="text-md">Have an account?<Link to={"/login"} className="text-[#F5A425] font-bold"> Login</Link></p>
                    <hr className="mt-5 bg-red" />
                    <div className="mx-20">

                        <button onClick={handelGoogle} className=" border-2 border-[#F5A425] text-black text-md font-bold px-4 py-2 rounded-md flex items-center justify-center w-full"><FaGoogle className="mr-2"></FaGoogle>Login with Google</button>

                    </div>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default SignUp;