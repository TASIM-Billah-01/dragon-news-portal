import { Link, useLoaderData } from "react-router-dom";

const CategoryDetails = () => {
    const { data } = useLoaderData();
    const news = data[0];

    return (
        <div className="bg-gray-100 min-h-screen py-6">
            <section className="w-[90%] max-w-4xl bg-white shadow-lg mx-auto rounded-md overflow-hidden">

                <img src={news.image_url} className="w-full h-[200px] sm:h-[350px] object-cover" alt="" />

                <article className="p-4 sm:p-6">
                    <h1 className="text-lg sm:text-xl max-w-lg lg:max-w-xl xl:max-w-2xl  xl:text-2xl font-bold mb-4">{news.title}</h1>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        {news.details}
                    </p>

                    <Link 
                        to="/" 
                        className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                    >
                        Back to Home
                    </Link>
                </article>

            </section>
        </div>
    );
};

export default CategoryDetails;
