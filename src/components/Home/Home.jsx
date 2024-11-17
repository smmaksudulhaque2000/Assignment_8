import { Link, Outlet } from 'react-router-dom';
import banner from '../../assets/banner.jpg'
import Categories from '../Categories/Categories';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div className='mt-[-80px]'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home | Gadget Heaven</title>
                <link rel="canonical" href="http://localhost:5173/" />
            </Helmet>
            <div className='border-2 p-2 rounded-xl'>
            <div className="hero h-[600px] lg:min-h-screen bg-purple-500 rounded-xl">
            <div className="hero-content text-center mt-[-100px] lg:mt-[-400px]">
            <div className='flex flex-col gap-5 justify-center items-center mt-10'>
                <h1 className="text-3xl lg:text-6xl font-bold text-white leading-snug">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className="py-5 max-w-3xl mx-auto text-gray-300">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            <Link to={"/dashboard/cartList"} className='w-40 bg-white text-purple-700 font-bold p-4 lg:px-6 rounded-full'>Shop Now</Link>
            </div>
            </div>
            </div>
            </div>
            <div className='w-3/4 mx-auto rounded-2xl border-2 border-white p-4 mt-[-100px] lg:mt-[-450px]'>
            <img src= {banner} alt="Banner" className='rounded-2xl' />
            </div>
            <div className='lg:mt-40'>
            <h3 className='text-center font-bold text-4xl my-10 lg:my-20'>
                Explore Cutting-Edge Gadgets
                </h3>
            <div className='flex lg:flex-row flex-col gap-5 lg:justify-between'>
                <Categories></Categories>
                <Outlet></Outlet>
            </div>
            </div>
        </div>
    );
};

export default Home;