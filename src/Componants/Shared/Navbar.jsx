import React, { useContext, useState } from 'react';
import { AiOutlineAlignLeft, AiOutlineClose, } from 'react-icons/ai';
import { MdOutlineTask, MdAddTask } from 'react-icons/md';
import { GrTask } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }
    return (
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
            {/* left side */}
            <div className='flex item items-center'>
                <div onClick={() => setNav(!nav)} className='cursor-pointer'>
                    <AiOutlineAlignLeft size={30} />
                </div>
                <Link to='/'><h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Daily <span>Task</span></h1></Link>

            </div>

            <div className='me-2'>
               {
                user?.uid ? 
                <Link onClick={handleLogOut}><button className='bg-gray-300 px-5 py-2 rounded-xl font-bold'>Logout</button></Link>
                :
                <Link to='/login'><button className='bg-gray-300 px-5 py-2 rounded-xl font-bold'>Login</button></Link>
                
               } 
               
            </div>
            {/* mobile menu */}
            {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'>
            </div> : ''}
            {/* side drawer menu */}
            <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
                <AiOutlineClose onClick={() => setNav(!nav)} size={30} className='absolute top-4 right-4 cursor-pointer' />
                <h2 className='text-2xl p-4'>All <span className='font-bold'>Task</span></h2>
                <nav>
                    <ul className='p-4 flex flex-col text-gray-800'>
                        <Link to='/addtask'><button><li className='flex py-4 text-xl'><MdAddTask size={25} className='mr-4' />Add task</li></button></Link>
                        <li className='flex py-4 text-xl'><GrTask size={25} className='mr-4' />My task</li>
                        <li className='flex py-4 text-xl'><MdOutlineTask size={25} className='mr-4' />Complete task</li>

                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;