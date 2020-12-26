import React from 'react'

import $ from 'jquery'
import tooltip from 'bootstrap'

import Carousel from '../components/Carousel'
import CarouselImage from '../components/CarouselImage'

class SmartLobby extends React.Component {
	componentDidMount() {
		document.title = 'Bassel Ashi: SmartLobby'
		$(".tooltip").tooltip('dispose');
		$('[data-toggle="tooltip"]').tooltip();
	}

	render() {
		return (
			<div className="container-md my-3">
				<div className="jumbotron">
					<div className="text-center">
						<img className="work-logo mr-1" src="../../images/smartlobby-logo.png" />
						<span className="smartlobby-text">SmartLobby</span>
					</div>
					<hr className="my-4" />
					<div className="row">
						<div className="col-lg-6 col-md-12">
							<h5 className="text-primary">Preface</h5>
							<p>During my 8-months work term at <a target="_blank" href="http://fgfbrands.com/">FGF Brands</a> as
								a Full-Stack .NET Developer, I was given the chance to demonstrate my skills and capabilities.
								As a result, my team leader relied on me in many areas such as onboarding co-op students, doing
								R&amp;D and providing a proof of concept for problem solving and coming up with new ideas. The
								biggest task out of all was to independently develop a full visitor management solution (VMS).
								The business requirement stated that it was a replacement for
								an existing VMS, with additional features that needed to be introduced due to the pandemic of
								COVID-19. SmartLobby consists of a web application, a desktop application, and a console
								application that runs as a web job to send e-mail reminders to hosts.
							</p>
						</div>
						<div className="col-lg-6 col-md-12">
							<Carousel cellClassName="smartlobby-image-cell">
								<CarouselImage source="../../images/smartlobby2.png" />
								<CarouselImage source="../../images/smartlobby3.png" />
								<CarouselImage source="../../images/smartlobby4.png" />
								<CarouselImage source="../../images/smartlobby5.png" />
								<CarouselImage source="../../images/smartlobby6.png" />
								<CarouselImage source="../../images/smartlobby7.png" />
								<CarouselImage source="../../images/smartlobby8.png" />
								<CarouselImage source="../../images/smartlobby9.png" />
								<CarouselImage source="../../images/smartlobby10.png" />
								<CarouselImage source="../../images/smartlobby11.png" />
								<CarouselImage source="../../images/smartlobby12.png" />
							</Carousel>
						</div>
					</div>
					<div className="row mt-3">
						<div className="col-lg-5 col-md-12">
							<iframe width="100%" height="325" src="https://www.youtube.com/embed/iKnnL4dGjAQ" frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen></iframe>
						</div>
						<div className="col-lg-7 col-md-12">
							<h5 className="text-primary">Fighting COVID-19</h5>
							<p>
								Some of SmartLobby's features are focused on protecting everyone from COVID-19 by ensuring that the
								visitor has no symptoms and that minimal physical contact is done during the check-in process
								</p>
							<ul>
								<li>Integration with FGF Questionnaire, an application built to survey visitors and staff with
										COVID-19 related questions</li>
								<li>Numerous ways for visitors to check in, with the most popular being contactless through the
										use of their own mobile devices</li>
								<li>Playing welcoming and signal audio messages to update visitors of their host's status by
										using <a target="_blank" href="https://docs.microsoft.com/en-us/azure/cognitive-services/Speech-Service/">
										Azure Speech Service</a></li>
								<li>Automatically prints a badge once the visitor checks in by using SignalR's websockets and
									DYMO Label Printer's SDK</li>
							</ul>
						</div>
					</div>
					<div className="row mt-3">
						<div className="col">
							<h5 className="text-primary">Outcome</h5>
							<p>The leadership team, including the CIO, provided great feedback on the application. SmartLobby was installed at FGF's locations in Canada and Texas. On the last day of my internship, I installed the tablet at the reception and filmed a full overview. This overview shows the contactless check-in process that can be done through the visitor's mobile device. Some features such as chatting with host is not shown in the video.</p>
						</div>
					</div>
					<div className="row mt-3">
						<div className="col">
							<iframe width="100%" height="450" src="https://www.youtube.com/embed/MYOe0WZunWo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
						</div>
					</div>

				</div>
			</div>
		)
	}
}

export default SmartLobby