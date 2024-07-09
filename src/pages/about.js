import '../App.css';

import Topbar from '../components/topbar.component';

function About() {
  	return (
		<div className="Home font-muli">
			
			<Topbar />

			<section className='justify-center mt-12 p-12'>
				<div>
					<h1>Welcome to Naghris</h1>
					<p>Empowering students through free education</p>
				</div>
			</section>

			<section className='justify-center p-12'>
				<h2>About Us</h2>
				<p>Naghris is a non-profit, student-based organization dedicated to creating and providing free courses for students worldwide. Our mission is to empower learners by making quality education accessible to everyone, regardless of their financial situation.</p>
				<p>We believe that education is a fundamental right and a powerful tool for personal and societal growth. Our team of passionate volunteers, educators, and students work tirelessly to develop comprehensive and engaging courses across various subjects.</p>
				<p>Join us in our mission to make education free and accessible for all. Together, we can create a brighter future.</p>
			</section>
		</div>
  	);
}

export default About;
