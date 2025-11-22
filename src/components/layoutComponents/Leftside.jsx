import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import fcbImage from '../../assets/WhatsApp Image 2025-11-20 at 4.42.35 PM11.jpeg'
import pitchImage from '../../assets/football.jpeg'
import netflixImage from '../../assets/netflix.jpeg'

// import Categories from "../Categories";

const Leftside = () => {
    const [cats, setCats] = useState([]);
    console.log(cats.category_id);
    const {id} = useParams();
    console.log(id);
    
const linkClass = (catId) => {
  return `
    ${id == catId ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-white hover:bg-gray-200"} 
    xl:text-xl text-lg sm:text-sm lg:text-base xl:text-xl 
    px-4 py-2 sm:px-3 sm:py-1 lg:px-4 lg:py-2 
    rounded-full shadow-md transition-all duration-300 
    hover:shadow-xl transform hover:scale-105 
  `;
};


    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => setCats(data.data.news_category))
        // .then(data => setCats(data.data.news_category))
    }, [])
    return (
        <div className="p-4 sm:px-2 lg:px-3 xl:p-4">
            <section className="p-4 bg-gray-300 w-full rounded sm:rounded-xl shadow-lg   ">
                <h1 className="text-xl sm:text-base xl:text-xl font-semibold mb-4 text-gray-800">All Categories ({cats.length})</h1>
                <article className="flex flex-col gap-3 ">
                    {
                        cats.map((item, index) => (
                            <NavLink key={index} to={`/category/${item.category_id}`} className={linkClass(item.category_id)}>{item.category_name}
                            </NavLink>
                        ))
                    }
                </article>
            </section>

            <section className="mt-6 flex flex-col gap-6  " >
                <article className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"> 
                    <img src={fcbImage} alt="FC Barcelona" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h1 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200">
                            FC Barcelona – History, Players, News & Highlights
                        </h1>
                    </div>
                </article>
                <article className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"> 
                    <img src={pitchImage} alt="FC Barcelona" className="w-full h-52 object-cover" />
                    <div className="p-4">
                        <h1 className="font-semibold text-lg text-gray-900 hover:text-green-700 transition-colors  duration-200">
                            FC Barcelona – History, Players, News & Highlights
                        </h1>
                    </div>
                </article>
                <article className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"> 
                    <img src={netflixImage} alt="FC Barcelona" className="w-full h-52 object-cover" />
                    <div className="p-4">
                        <h1 className="font-semibold text-lg text-gray-900 hover:text-red-600 transition-colors duration-200">
                            FC Barcelona – History, Players, News & Highlights
                        </h1>
                    </div>
                </article>
            </section>

        </div>
    );
};

export default Leftside;