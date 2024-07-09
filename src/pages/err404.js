import '../App.css';
import pic from '../images/404page.png'
import { Link } from 'react-router-dom';

function Err() {
  	return (
		<div className="h-screen flex justify-center bg-slate-400">
            <img src={pic} alt=''/>
            <div className='absolute border-none rounded-full bg-gray-800 text-white w-56 h-12 translate-y-96 flex justify-center'>
            <a href="javascript:history.back()">Go Back</a>
            </div>
		</div>
  	);
}

export default Err;
