import React from 'react'

import $ from 'jquery'
import tooltip from 'bootstrap'

import Carousel from '../components/Carousel'
import CarouselImage from '../components/CarouselImage'

class Vgras extends React.Component {
	componentDidMount() {
		document.title = 'Bassel Ashi: vGRAS';
		$(".tooltip").tooltip('dispose');
	}

	render() {
		return (
			<div className="container-md my-3">
				<div className="jumbotron">
					<div className="text-center">
						<h1>vGRAS</h1>
					</div>
					<hr className="my-4" />
					<div className="row">
						<div className="col">
							<div className="row">
								<div className="col-lg-6 col-md-12">
									<Carousel cellClassName="vgras-image-cell">
										<CarouselImage source="../../images/vgras1.jpg" />
										<CarouselImage source="../../images/vgras2.jpg" />
										<CarouselImage source="../../images/vgras3.jpg" />
									</Carousel>
								</div>
								<div className="col-lg-6 col-md-12 mt-lg-0 mt-3">
									<h5 className="text-primary">Background</h5>
									<p>
										Visual Guest Request Administration System (vGRAS) is a project I worked on from
										scratch during my 5-week internship in 2016 at <a target="_blank"
											href="https://en.wikipedia.org/wiki/DAMAC_Properties">Damac Properies</a>.
										Initially, my role was to do basic networking and create server room diagrams.
										Through brainstorming with my coworkers, the idea of vGRAS came up. The
										goal was to extract data from their existing GRAS system and display it in a form of
										live graphical dashboards displaying statistical and analytical data.
									</p>
								</div>
							</div>
							<div className="row mt-3 mt-lg-0">
								<div className="col-lg-7">
									<h5 className="text-primary">Technical</h5>
									<p>Using ASP.NET
									Web Forms integrated with GRAS' MSSQL database, I was able to collect data, such as
									employees' work progress, and display it on large TV screens in different
									departments such as Engineering and Housekeeping, resulting in increasing the
									motivation and efficiency of employees. The project consisted of the development of
									four different views (management, department, team and operator views), each of
										which containing the respective graphs and data.</p>
								</div>
								<div className="col-lg-5">
									<h5 className="text-primary">Experience</h5>
									<p>
										vGRAS is considered my first
										project with web development. Through working on this project, I was exposed to
										sophisticated TSQL queries which boosted my understanding of databases. vGRAS was
										also my first professional interaction with .NET web development, leading to my
										future successful pursue of this field.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Vgras