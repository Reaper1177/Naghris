import naghris from '../images/naghris_logo.jpg';
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';


export default function Topbar(){
    return <div className="">

        <nav className="w-full max-w-full relative border-gray-200 bg-white shadow-[0px_0px_10px_4px_rgba(0,0,0,0.5)] h-[70px]">

            <div className='flex justify-between px-32 py-6'>
                
                <div className='cursor-pointer relative group text-black z-50 hover:text-blue-900 hover:font-bold'>
                    <div className=''>Courses</div>
                    <div className='shadow-2xl group-hover:block group-hover:animate-in group-hover:blur-0 group-hover:fade-in-5 hidden z-10 absolute h-auto'>
                        <div className='w-48 relative mt-7 top-0 bg-white p-4 text-black font-normal text-left h-96'>
                            <ul className='hover:text-blue-900 hover:font-bold'><Link to='/qudurat_math' className='flex text-sm'>qudurat math
                                <IoIosArrowForward className='translate-y-1/2 absolute right-6 text-xs' />
                                </Link>
                            </ul>
                            <hr className='border my-2 '></hr>
                            
                        </div>
                    </div>
                </div>

                <div className='cursor-pointer relative group text-black z-50 hover:text-blue-900 hover:font-bold'>
                    <Link className='' to='/about'>About Us</Link>
                </div>
            </div>

        </nav>

        <div className="flex absolute top-1 md:top-0 items-center justify-center w-full">
            <Link to='/home'><img className="hover:animate-in hover:zoom-in-105 hover:paused block w-full md:max-w-32 max-w-24" src={naghris} alt="" /></Link>
        </div>

    </div>;
}