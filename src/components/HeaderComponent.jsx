import moment from 'moment';
import image from '../assets/logo.png'

const HeaderComponent = () => {
    return (
        <div className='space-y-2 text-center  '>
            <img src={image} alt="" className='h-8 mx-auto' />
            <p className='text-gray-500 xl:text-xl '>Journalism Without Fear or Favour</p>            
            
            <p>
                <span className='text-gray-800 font-semibold'>
                    {moment().format("dddd")}
                </span>
                <span className='text-gray-600 font-normal'>
                    {", " + moment().format("MMMM Do YYYY")}
                </span>
            </p>
        </div>
    );
};

export default HeaderComponent;