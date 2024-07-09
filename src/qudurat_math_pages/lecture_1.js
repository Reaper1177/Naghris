import '../App.css';
import Sidebar from '../components/sidebar.component';
import Topbar from '../components/topbar.component';

function Lecture_1() {
	let chapter = [
		'Lecture_1',
		'Reading_1',
		'Quiz_1',
	]
  	return (
		<div className="font-muli">
			
			<Topbar />

			<div className='flex'>
				<Sidebar chapters={chapter} link={'../Chapter_1'} />
				
				<iframe className='translate-x-[20%] mt-12' width="800" height="450" src="https://www.youtube.com/embed/aXOChLn5ZdQ?si=nxY52RO09wzrYtJt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
			</div>

		</div>
  	);
}

export default Lecture_1;
