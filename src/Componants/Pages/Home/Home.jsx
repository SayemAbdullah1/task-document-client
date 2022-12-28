import React from 'react';

const Home = () => {
    return (
        <div className='max-w-[1460px] mx-auto p-4'>
            <div className='max-h-[500px] relative'>
                <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                    <h1 className='p-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Best <span className='text-blue-300'>Task</span></h1>
                    <h1 className='p-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'><span className='text-blue-300'>Find</span> Solutions</h1>
                </div>
                <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/7191994/pexels-photo-7191994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            </div>
        </div>
    );
};

export default Home;