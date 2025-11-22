    import { Outlet } from "react-router-dom";
    import Navbar from "../components/Navbar";

    const AuthLayout = () => {
        return (
            <div className="bg-gray-200 min-h-screen">
                <section className="max-w-6xl mx-auto ">
                    <Navbar></Navbar>
                </section>          
                <section>
                    <Outlet></Outlet>
                </section>  
            </div>
        );
    };

    export default AuthLayout;