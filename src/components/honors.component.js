import mawhiba from '../images/Mawhiba.png'
import qiyas from '../images/Qiyas.png'
import isef from '../images/ISEF.png'
import olympiad from '../images/International Olympiads.png'

export default function Honor(){

    return <div className="w-full bg-gray-100 mt-12 h-56 p-12 text-gray-600">
        
        <div className="text-xl">
            Courses made by outstanding students participating in
        </div>

        <div className="">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-48 py-4">    
                <div className="text-black w-28 grayscale">
                    <img src={mawhiba} alt=''/>
                </div>
                <div className="text-black w-28 grayscale">
                    <img src={qiyas} alt=''/>
                </div>
                <div className="text-black w-28 grayscale">
                    <img src={olympiad} alt=''/>
                </div>
                <div className="text-black w-28 grayscale">
                    <img src={isef} alt=''/>
                </div>
            </div>
        </div>

    </div>;
}   