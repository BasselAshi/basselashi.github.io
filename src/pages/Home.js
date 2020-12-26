import React from 'react'

import $ from 'jquery'
import tooltip from 'bootstrap'

import Carousel from '../components/Carousel'
import CarouselImage from '../components/CarouselImage'
import ProgressBar from '../components/ProgressBar'
import Badge from '../components/Badge'

class Home extends React.Component {
	componentDidMount() {
		document.title = 'Bassel Ashi: Home';
		$(".tooltip").tooltip('dispose');
		$('[data-toggle="tooltip"]').tooltip();
	}

	render() {
		return (
			<div className="container-md my-3">
				<div className="row">
					<div className="col">
						<div className="card">
							<div className="card-header">
								About Me
							</div>
							<div className="card-body">
								<div className="row">
									<div className="col-md-9">
										<div className="row">
											<div className="col-lg-auto col-md-12 text-center mb-4 mb-lg-1">
												<img className="img-thumbnail profile-picture" src="images/profile.jpg"
													data-toggle="tooltip" rel="tooltip" data-placement="left" title=""
													data-original-title="Hello there :)" />
											</div>
											<div className="col-md">
												<h5 className="text-primary">Brief Summary</h5>
												<p className="card-text">I am a third year Co-Op Computer Science student
												specializing in Software Engineering at the University of
												Toronto Scarborough. My passion for problem solving through coding and development has inspired me to pursue perfection in my field as witnessed by my own coworkers and colleagues. Additionally, I possess strong interpersonal skills, demonstrating the utmost discretion and professionalism in teamwork and public speaking.
										</p>
											</div>
										</div>
										<div className="row">
											<div className="col">
												<div className="row mt-3">
													<div className="col">
														<h5 className="text-primary">Awards</h5>
														<ul className="card-text">
															<li>University of Toronto Scarborough Dean's List (2019 and 2020)</li>
															<li>University of Toronto Scarborough Entrance Scholarship (2018)</li>
															<li>Nelson High School Computer Science Award (2018)</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-md-3 mt-3 mt-md-0">
										<Carousel cellClassName="index-image-cell">
											<CarouselImage source="images/deanslist.jpg" />
											<CarouselImage source="images/nelsonaward.jpg" />
										</Carousel>
									</div>
								</div>
								<div className="row mt-3">
									<div className="col">
										<h5 className="text-primary">Fields of Interest</h5>
										<p>
											In the past 5 years, I have been very focused on software solutions.
											The infrastructure of many businesses and organizations relies on applications that can either provide services to their employees and clients.
											After being able to prove my capabilities during my past internships, I am ready to move on and learn more about new design patterns, data structures, algorithms, tools, frameworks, and stacks.
												</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row mt-3">
					<div className="col">
						<div className="card">
							<div className="card-header">
								Skillset
							</div>
							<div className="card-body">
								<div className="row">
									<div className="col-md-4">
										<h5 className="text-primary">Backend Languages</h5>
										<ProgressBar text="C#" width="100%" colour="success" />
										<ProgressBar text="Java" width="100%" colour="success" />
										<ProgressBar text="C" width="95%" colour="success" />
										<ProgressBar text="Python" width="90%" colour="success" />
										<ProgressBar text="VB" width="90%" colour="success" />
									</div>
									<div className="col-md-4 mt-md-0 mt-3">
										<h5 className="text-primary">Other Languages</h5>
										<ProgressBar text="HTML" width="100%" colour="info" />
										<ProgressBar text="CSS" width="100%" colour="info" />
										<ProgressBar text="SQL" width="95%" colour="info" />
										<ProgressBar text="JavaScript" width="95%" colour="info" />
										<ProgressBar text="Batch" width="75%" colour="info" />
									</div>
									<div className="col-md-4 mt-md-0 mt-3">
										<h5 className="text-primary">Interpersonal Skills</h5>
										<ProgressBar text="Public Speaking" width="100%" colour="danger" />
										<ProgressBar text="Teamwork" width="100%" colour="danger" />
										<ProgressBar text="Critical Thinking" width="100%" colour="danger" />
										<ProgressBar text="Communication" width="100%" colour="danger" />
										<ProgressBar text="Quick Learning" width="100%" colour="danger" />
									</div>
								</div>
								<div className="row mt-3">
									<div className="col">
										<h5 className="text-primary">Tools/Technologies</h5>
										<Badge text=".NET" colour="primary" />
										<Badge text="OOP" colour="secondary" />
										<Badge text="SOLID" colour="success" />
										<Badge text="Design Patterns" colour="dange" />
										<Badge text="MSSQL" colour="warning" />
										<Badge text="Bash" colour="info" />
										<Badge text="Visual Studio" colour="light" />
										<Badge text="Android Studio" colour="dark" />
										<Badge text="IntelliJ" colour="primary" />
										<Badge text="Eclipse" colour="secondary" />
										<Badge text="VS Code" colour="success" />
										<Badge text="Networking" colour="danger" />
										<Badge text="DNS" colour="warning" />
										<Badge text="RDP" colour="info" />
										<Badge text="Unity" colour="light" />
										<Badge text="MVC" colour="dark" />
										<Badge text="FTP" colour="primary" />
										<Badge text="Scrums" colour="secondary" />
										<Badge text="Git" colour="success" />
										<Badge text="Azure" colour="danger" />
										<Badge text="React" colour="warning" />
										<Badge text="JQuery" colour="info" />
										<Badge text="Bootstrap" colour="light" />
										<Badge text="Stored Procedures" colour="dark" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Home