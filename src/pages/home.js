import img1 from '../images/1.png';
import img2 from '../images/2.png';
import img3 from '../images/3.png';
import '../App.css';

import Carousel from '../components/carousel.component';
import Grid from '../components/contentgrid.component';
import Topbar from '../components/topbar.component';
import Honor from '../components/honors.component';
import Bottom from '../components/bottom.component';
import Review from '../components/reviews.component';

function Home() {
	let slides = [img1, img2, img3]

  	return (
		<div className="Home font-muli">
			
			<Topbar />

			<div className='relative w-full m-auto justify-center flex'>
				<div className='w-5/6'>
					<Carousel slides={slides} />
				</div>
			</div>

			<Honor />

			<div className='w-full flex justify-center'>
				<div className='w-5/6'>
					<Review />
				</div>
			</div>

			<div className='w-full flex justify-center'>
				<div className='w-5/6'>
					<Grid />
				</div>
			</div>

			<div className='relative'>
				<Bottom />
			</div>
		</div>
  	);
}

export default Home;
