import { Link, useLoaderData } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

const Categories = () => {
    const {data : news} = useLoaderData();
   
    return (
        <div className="p-4 space-y-6">
            <h1 className="text-2xl font-bold ">Dragon News Home</h1>

            {news.map((item, index) => (
                <section key={index} className="bg-white shadow-md hover:shadow-xl transition-shadow duration-200  rounded-lg overflow-hidden pb-4 ">
                    {
                         
                        console.log(item)
                    }

                    
                    <article className="p-4 flex items-center gap-4 bg-gray-100">
                        <img src={item.author.img} className="w-12 h-12 rounded-full border" alt=""/>
                        <div>
                            <h2 className="font-semibold">{item.author.name}</h2>
                            <p className="text-gray-500 text-sm">{item.author.published_date}</p>
                        </div>
                    </article>


                    <h1 className="text-lg font-semibold px-4 mt-4">
                        {item.title}
                    </h1>
                    <div className="py-2 px-2 rounded-lg bg-gradient-to-r from-blue-400 via-violet-400 to-yellow-200">
                        <img src={item.thumbnail_url} alt="" className="h-[250px] w-full sm:h-[350px] xl:h-[450px]  rounded" />
                    </div>


                    {/* <img src={item.thumbnail_url} className="h-[350px] xl:h-[450px] w-full bg-gradient-to-r from-slate-600 via-violet-200 to-yellow-100 mt-3" alt=""/> */}
                    <p className=" px-4 py-2 text-gray-700 mt-2">
                        {item.details.slice(0,100)}...
                        <Link to={`/news/${item._id}`} className="text-blue-600 font-semibold ml-1 hover:underline">
                            Read More
                        </Link>
                    </p>
                    
                    <div className="border-b my-4 border-gray-500 opacity-50 mx-4"></div>


                    <div className="px-4 flex justify-between items-center">
                        <div className="flex text-yellow-500 items-center gap-1">
                            <IoIosStar />
                            <IoIosStar />
                            <IoIosStar />
                            <IoIosStar />

                            <p className="text-gray-700 ml-3 font-medium">{item.rating.number}</p>
                        </div>

                        <div className="flex items-center gap-2 text-gray-700">
                            <FaEye /> {item.total_view}
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
};

export default Categories;
