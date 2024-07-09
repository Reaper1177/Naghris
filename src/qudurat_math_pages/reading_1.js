import '../App.css';
import Sidebar from '../components/sidebar.component';
import Topbar from '../components/topbar.component';

function Reading_1() {
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
				
				some khan academy yap
			</div>

		</div>
  	);
}

export default Reading_1;
