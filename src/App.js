import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home.js'
import Err from './pages/err404.js'
import About from './pages/about.js'

//qudurat math pages
import Qudurat_Math from './pages/qudurat_math.js';
import Lecture_1 from './qudurat_math_pages/lecture_1.js';
import Reading_1 from './qudurat_math_pages/reading_1.js';
import Quiz_1 from './qudurat_math_pages/quiz_1.js';
import Chapter_1 from './qudurat_math_pages/chapter_1.js';
import Chapter_View from './qudurat_math_pages/chapter_view.js'; 

function App() {

  	return (
		<div className="App">
			<div>
				<BrowserRouter>
					<Routes>
						<Route index element={<Home />}/>
						<Route path='home' element={<Home />}/>
						<Route path='about' element={<About />} />
						
						<Route path='qudurat_math' element={<Qudurat_Math />} />

						<Route path='qudurat_math/Qudurat_Math_Course' element={<Chapter_View />} />
							<Route path='qudurat_math/Chapter_1' element={<Chapter_1 />} />
								<Route path='qudurat_math/Chapter_1/Lecture_1' element={<Lecture_1 />} />
								<Route path='qudurat_math/Chapter_1/Reading_1' element={<Reading_1 />} />
								<Route path='qudurat_math/Chapter_1/Quiz_1' element={<Quiz_1 />} />

						<Route path='*' element={<Err />}/>
					</Routes>
				</BrowserRouter>
			</div>

		</div>
  	);
}

export default App;
