import { Outlet } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import LatestNews from "../components/LatestNews";
import Leftside from "../components/layoutComponents/Leftside";
import Navbar from "../components/Navbar";
import Rightside from "../components/layoutComponents/Rightside";

const HomeLayout = () => {
    return (
        <div className="font-poppins  xl:w-11/12 xl:mx-auto xl:p-4 mt-3">
            <section className="">
                <HeaderComponent></HeaderComponent>
                <section>
                    <LatestNews></LatestNews>
                </section>
            </section>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main className="grid sm:grid-cols-12 ">
                <aside className="col-span-full sm:col-span-3 ">
                    <Leftside />
                 </aside>
                <section className="col-span-full  sm:col-span-6">
                    <Outlet />
                </section>
                <aside className="col-span-full sm:col-span-3 px-4 sm:pr-4 ">
                    <Rightside></Rightside>
                </aside>
            </main>

        </div>
    );
};

export default HomeLayout;