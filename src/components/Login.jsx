import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../provider/AuthProvider";

const Login = () => {
  const {signInWithEmail,setMyUSer} = useContext(authContext)
  const [login, setLogin] = useState('')
  const [success, setSuccess] = useState('');
  const pathLocation = useLocation();
  const navigate = useNavigate()
  console.log(pathLocation);
  
  const handleSubmit = e => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmail(email,password)
    .then(res => {
      console.log(res);
      setMyUSer(res.user)
      navigate(pathLocation.state)
    })
  }
  return (
    <div className="min-h-[450px] sm:min-h-[520px] flex items-center justify-center p-4 sm:p-0">
      <section className="bg-white rounded-md xl:rounded-sm shadow-lg p-6 sm:p-8 max-w-lg xl:max-w-xl mx-auto w-full">

        <h2 className="text-center text-xl font-semibold">Login your account</h2>

        <div className="border-b border-gray-300 my-6"></div>

        <form onSubmit={handleSubmit}>

          <div className="mb-3 sm:mb-4">
            <label className="mb-1 block font-medium">Email address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full bg-gray-100 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-gray-200"
            />
          </div>

          <div className="mb-3 sm:mb-4">
            <label className="mb-1 block font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full bg-gray-100 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-gray-200"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="bg-gray-800 text-white px-2 py-2 w-full my-2 rounded transition-all hover:scale-[1.02]"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-3 text-sm xl:text-base">
          Don't have an account?{" "}
          <Link to="/auth/register" className="text-red-500 font-medium">
            Register
          </Link>
        </p>
        <p className="text-center text-sm xl:text-base text-gray-600 hover:text-gray-800 hover:underline transition-all cursor-pointer mt-4">
          Forgot password?
        </p>


      </section>
    </div>
  );
};

export default Login;
