import { useState } from "react";
import { IoIosArrowDropleftCircle , IoIosArrowDroprightCircle  } from "react-icons/io";


export default function Carousel({slides}){

    let [current, Setcurrent] = useState(0);
    let previous = () => {
        if(current === 0) Setcurrent(slides.length - 1);
        else Setcurrent(current - 1);
    }

    let next = () => {
        if(current === slides.length - 1) Setcurrent(0);
        else Setcurrent(current + 1);
    }
    setTimeout(next, 6000);


    return <div className="overflow-hidden relative">
        <div className={`flex relative transition ease-out duration-10 -z-10`}
        style={{
            transform: `translateX(-${current * 100}%)`,
        }}>
            {slides.map((s) => {
                return <img src = {s} alt=""/>;
            })}
        </div>

        <div className="absolute top-0 w-full h-full justify-between items-center flex text-neutral-900 px-4 text-3xl">
            <button onClick={previous}>
                <IoIosArrowDropleftCircle />
            </button>
            <button onClick={next}>
                <IoIosArrowDroprightCircle  />
            </button>
        </div>

        <div className="absolute bottom-0 py-4 flex justify-center gap-4 w-full">
            {slides.map((s, i) => {
                return <div 
                onClick={() => {
                    Setcurrent(i);
                }}
                key={"circle" + i}
                className={`rounded-full w-3 h-3 cursor-pointer ${i===current ? "bg-white":"bg-gray-500"}`}></div>;
            })}
        </div>
    </div>;
}