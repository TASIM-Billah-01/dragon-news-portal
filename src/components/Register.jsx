import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../provider/AuthProvider";
import { signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const Register = () => {
  const {createUser,updateUserProfile} = useContext(authContext)
  const [errorMessage, setErrorMessage] = useState('');
  const[success, setSuccess] = useState(null)
  const navigate = useNavigate();
  const  handleSubmit = e => {
    e.preventDefault();
    setErrorMessage('')
    const email = e.target.email.value;
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value
    const password = e.target.password.value;
    const Cpassword = e.target.Cpassword.value;

    if(password.length < 6) {
      return setErrorMessage('password should be 6 or more the n6 character long ')
    }
    if(password !== Cpassword) {
      return setErrorMessage("Password didn't mactch");
    }
    createUser(email,password)
    .then(res => {
      const resultData = res.user;
      console.log(resultData);
      updateUserProfile({
        displayName : name,
        photoURL : photoUrl,
      })
      .then(() => {
        signOut(auth).then(() => {
        navigate('/'); 
      })
    })
    .catch(error => console.log(error.message));
  })
  .catch(error => {
      console.log(error);
      setErrorMessage(error.message)
    })
  }
  return (
    <div className="min-h-[520px] flex items-center justify-center p-4 sm:p-0">
      <section className="bg-white rounded-sm shadow-lg p-8 max-w-xl w-full mx-auto">

        <h1 className="text-center text-xl font-semibold ">Register your account</h1>
        <div className="border-b-2 border-gray-500 my-4 opacity-40"></div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-medium mb-1">Your Name</label>
            <input
              type="text"
              required
              name="name"
              placeholder="Enter your name"
              className="w-full bg-gray-100 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-gray-200"
            />
          </div>

          {/* Photo URL */}
          <div className="mb-4">
            <label className="block font-medium mb-1">Photo URL</label>
            <input
            name="photoUrl"
              required
              placeholder="Enter photo URL"
              className="w-full bg-gray-100 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-gray-200"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block font-medium mb-1">Email address</label>
            <input
              type="email"
              required
              name="email"
              placeholder="Enter your email"
              className="w-full bg-gray-100 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-gray-200"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block font-medium mb-1">Password</label>
            <input
              type="password"
              required
              name="password"
              placeholder="Enter your password"
              className="w-full bg-gray-100 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-gray-200"
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label className="block font-medium mb-1">Confirm Password</label>
            <input
              type="password"
              required
              name="Cpassword"
              placeholder="Confirm your password"
              className="w-full bg-gray-100 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-gray-200"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="bg-red-500 text-white w-full py-2 rounded hover:bg-red-600 transition-all hover:scale-[1.02]"
          >
            Register
          </button>
        </form>

        <p className="text-center mt-3 text-sm xl:text-base">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-gray-800 font-medium">
            Login
          </Link>
        </p>

      {
        errorMessage ? <p className="text-2xl">{errorMessage}</p> : ""
      }
      {
        success ? <p className="text-2xl">{success}</p> : ""
      }
      </section>
    </div>
  );
};

export default Register;
