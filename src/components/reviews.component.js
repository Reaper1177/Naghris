import { FaCirclePlay } from "react-icons/fa6";

import { FaQuoteLeft } from "react-icons/fa";


export default function Review(){

    return <div className="mt-20 block">
        <div className="text-left text-2xl font-extrabold mb-12">Reviews from other aspiring students</div>
        <div id="scroll" className="flex overflow-x-scroll">
            
            <div className="size-72 w-96 relative p-8 pt-4 flex-shrink-0 bg-gray-100 mr-8 border-2 inline-block">
                <FaQuoteLeft className='text-left text-2xl' />
                <div className="mt-2 text-left text-sm">
                Boosted my chemistry skills with <b>advanced synthesis and pharmaco- kinetics.</b> Learned about <b>ethical drug production</b>. Highly recommended!
                </div>
                
                <div className="text-left bottom-[90px] absolute font-extrabold">
                    Walter White
                </div>
                <hr className="border-black absolute bottom-20 w-5/6 left-6"></hr>
                <div className="absolute bottom-4 flex left-12 text-left pr-4 mt-4 text-blue-900 font-lato font-black">
                    <a href="home" className="flex cursor-pointer"><FaCirclePlay className="text-5xl -translate-x-1/2" />
                    AP Chemistry - A full breakdown</a>
                </div>
            </div>

            <div className="size-72 w-96 relative p-8 pt-4 flex-shrink-0 bg-gray-100 mr-8 border-2 inline-block">
                <FaQuoteLeft className='text-left text-2xl' />
                <div className="mt-2 text-left text-sm">
                Mastered advanced nuclear physics, quantum mechanics, and ethical implications. Comprehensive and enlightening course. Essential for all aspiring scientists.
                </div>
                
                <div className="text-left bottom-[90px] absolute font-extrabold">
                    J. R. Oppenheimer
                </div>
                <hr className="border-black absolute bottom-20 w-5/6 left-6"></hr>
                <div className="absolute bottom-4 flex left-12 text-left pr-4 mt-4 text-blue-900 font-lato font-black">
                    <a href="home" className="flex cursor-pointer"><FaCirclePlay className="text-5xl -translate-x-1/2" />
                    Fundamentals of Quantum Physics - Full Course</a>
                </div>
            </div>

            <div className="size-72 w-96 relative p-8 pt-4 flex-shrink-0 bg-gray-100 mr-8 border-2 inline-block">
                <FaQuoteLeft className='text-left text-2xl' />
                <div className="mt-2 text-left text-sm">
                The Python course was rich with examples and tasks that helped further deepen the understanding of certain key ideas such as algorithims and lists.
                </div>
                
                <div className="text-left bottom-[90px] absolute font-extrabold">
                    Mohammad I. Alghamdi
                </div>
                <hr className="border-black absolute bottom-20 w-5/6 left-6"></hr>
                <div className="absolute bottom-4 flex left-12 text-left pr-4 mt-4 text-blue-900 font-lato font-black">
                    <a href="home" className="flex cursor-pointer"><FaCirclePlay className="text-5xl -translate-x-1/2" />
                    Python Basics for Beginners - An Introduction</a>
                </div>
            </div>

            <div className="size-72 w-96 relative p-8 pt-4 flex-shrink-0 bg-gray-100 mr-8 border-2 inline-block">
                <FaQuoteLeft className='text-left text-2xl' />
                <div className="mt-2 text-left text-sm">
                    This course allowed me to score high enough so I can attend University of Hail 😍.
                </div>
                
                <div className="text-left bottom-[90px] absolute font-extrabold">
                    Khalid Alhusayyen
                </div>
                <hr className="border-black absolute bottom-20 w-5/6 left-6"></hr>
                <div className="absolute bottom-4 flex left-12 text-left pr-4 mt-4 text-blue-900 font-lato font-black">
                    <a href="home" className="flex cursor-pointer"><FaCirclePlay className="text-5xl -translate-x-1/2" />
                    Tahseeli (SAAT) Course with Examples</a>
                </div>
            </div>
            
        </div>


    </div>;
}   