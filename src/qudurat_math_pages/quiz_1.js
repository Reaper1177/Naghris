import '../App.css';
import Sidebar from '../components/sidebar.component';
import Topbar from '../components/topbar.component';

function Quiz_1() {
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

                quiz time
			</div>

		</div>
  	);
}

export default Quiz_1;
