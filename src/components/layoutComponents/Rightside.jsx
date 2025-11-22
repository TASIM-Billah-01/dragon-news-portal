import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { authContext } from "../../provider/AuthProvider";
import swim from '../../assets/swimming.png';
import student from '../../assets/class.png'
import play from '../../assets/playground.png'
import bg from '../../assets/bg.png'
const Rightside = () => {
    const {googleSignIn} = useContext(authContext)
    return (

        <div>
    <div className=" p-4 bg-gray-300 h-32 xl:h-36 sm:h-44 lg:h-32 hover:shadow-xl transition-shadow duration-200 rounded-lg  shadow-md">
            <h2 className="text-lg font-semibold mb-4 text-gray-800 text-center">Login with</h2>
            
            <section className="">
                <button onClick={googleSignIn} className="
                flex sm:flex-col lg:flex-row items-center w-full justify-center gap-2
                bg-red-600 text-white font-medium py-2 rounded-full sm:rounded  lg:rounded-full 
                shadow-md hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300">
                    <FaGoogle />
                    Login with Google
                </button>
            </section>
    </div>

            <section className="bg-white mt-10 shadow-lg rounded-xl overflow-hidden border">
                <article className="p-6 space-y-4">
                    <h1 className="font-bold text-xl text-center">Q-Zone</h1>

                    <div className="flex flex-col gap-4">
                        <img src={swim} alt="" className="rounded-xl shadow" />
                        <img src={student} alt="" className="rounded-xl shadow" />
                        <img src={play} alt="" className="rounded-xl shadow" />
                    </div>
                </article>
            </section>

            <div className="m-10 relative">
                <img  src={bg}  className="w-full rounded-xl h-[300px] lg:h-[400px] xl:h-[550px] shadow-lg"  alt="" />
                <div className="absolute inset-0 bg-black/30 rounded-xl"></div>
            </div>

            </div>
    );
};

export default Rightside;
