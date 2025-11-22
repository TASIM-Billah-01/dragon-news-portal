import Marquee from "react-fast-marquee";

const LatestNews = () => {
    return (
        <div className="px-3 sm:px-7  mt-3 xl:mt-4 ">
        {/* <div className="w-screen -mx-4 xl:max-w-7xl xl:mx-auto mt-4"> */}
            <section className="flex items-center gap-4 bg-gradient-to-r from-red-500 via-red-200 to-red-500 rounded shadow-lg  p-2 xl:p-3">
                
                <span className="xl:px-4 xl:py-1 px-3 py-1 bg-white text-red-600 xl:text-base text-sm font-bold rounded-full shadow-md">
                    LATEST
                </span>
                
                <Marquee pauseOnHover speed={100} className="text-white text-sm xl:text-base font-medium space-x-8">
                    <span>🚨 Breaking: Major event happening in the city right now!</span>
                    <span className="ml-2"></span>
                    <span>📈 Market Update: Stocks are rising rapidly today.</span>
                    <span className="ml-2"></span>

                    <span>🌍 World News: International summit ends with new agreements.</span>
                    <span className="ml-2"></span>

                    <span>🎬 Entertainment: New blockbuster movie released this weekend!</span>
                </Marquee>
            </section>
        </div>
    );
};

export default LatestNews;
