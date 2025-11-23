import { Link, useLocation } from "react-router-dom";
import image from '../assets/user.png'
import { useContext } from "react";
import { authContext } from "../provider/AuthProvider";
// import { useEffect, useState } from "react";
const Navbar = () => {
    
    const {myUser, activeUser,accountOut} = useContext(authContext)
    const location = useLocation()
    const loginPage = location.pathname == '/auth/login';
    // const categoryPage = location.pathname.startsWith("/category/");
    console.log(activeUser);
    
    return (
        <div className="py-2">
            <section className={ `flex flex-col  sm:flex-row  sm:justify-between items-center   py-2 text-center sm:px-14 ${loginPage ? 'max-w-xl mx-auto w-full' : ''}` }>
                <div className="text-gray-600 font-medium text-lg text-center">{myUser?.email}</div> 
                <div className="text-center flex sm:text-lg justify-center py-2 sm:py-0">
                    <Link className="font-medium text-gray-600" to='/'>Home</Link>
                </div>
                <div className="accounts">
                    {
                        myUser ? (
                            <section className="flex gap-2">
                                <img src={myUser?.photoURL} className="w-10 h-10 rounded-full" alt="" />
                                <button onClick={accountOut} className="px-4 py-1 bg-gray-800 text-white rounded-md">Logout</button>
                            </section>   
                        ) : (
                            <article className="flex gap-2">
                                <img src={image} className="h-8 w-8 rounded-full" alt="" />
                                <Link to='/auth/login' className="px-4 py-1 bg-gray-800 text-white rounded-md">Login</Link>
                            </article>
                        )
                    }
                </div>

            </section>            
        </div>
    );
};

export default Navbar;