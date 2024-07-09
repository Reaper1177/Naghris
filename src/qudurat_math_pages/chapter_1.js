import '../App.css';
import Sidebar from '../components/sidebar.component';
import Topbar from '../components/topbar.component';

function Chapter_1() {
	let chapter = [
		'Lecture_1',
		'Reading_1',
		'Quiz_1',
	]
  	return (
		<div className="font-muli">
			
			<Topbar />

			<div className='flex'>
				<Sidebar chapters={chapter} link={'Chapter_1'} />
				
				this course is amazing with many chapters
			</div>

		</div>
  	);
}

export default Chapter_1;
