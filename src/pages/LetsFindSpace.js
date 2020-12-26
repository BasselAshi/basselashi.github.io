import React from 'react'

import $ from 'jquery'
import tooltip from 'bootstrap'

import Carousel from '../components/Carousel'
import CarouselImage from '../components/CarouselImage'

class LetsFindSpace extends React.Component {
	componentDidMount() {
		document.title = 'Bassel Ashi: Let\'s Find Space';
		$(".tooltip").tooltip('dispose');
		$('[data-toggle="tooltip"]').tooltip();
	}

	render() {
		return (
			<div className="container-md my-3">
				<div className="jumbotron">
					<div className="text-center">
						<img className="htv-logo" data-html="true" src="../../images/letsfindspace-logo.png" data-toggle="tooltip" rel="tooltip" data-placement="right" title="" data-original-title="<u>Fun fact:</u> The nodes in the logo icon represent people and the edges represent their connection to each other. The opacity applied to the word 'SPACE' and the underline represent the user's need to find the best meeting spot" />
					</div>
					<hr className="my-4" />
					<div className="row">
						<div className="col-lg-5 col-md-12">
							<h5 className="text-primary">Motive</h5>
							<p>My enthusiasm in problem solving makes me enjoy participating in coding competitions and
							hackathons. Aside from the better awards, I have been more interested in the latter because
							it is up to me and my team to choose our level of competitiveness. In February 2020, I was
								able to attend <a target="_blank" href="https://hackthevalley.io/">Hack the Valley</a> at the University of
								Toronto Scarborough. I formed a team of four people who shared the same motive as I did. A
								few minutes through brainstorming, we came up with the idea of Let's Find Space.
							</p>
						</div>
						<div className="col-lg-7 col-md-12">
							<Carousel cellClassName="htv-image-cell">
								<CarouselImage source="../../images/letsfindspace2.jpg" />
								<CarouselImage source="../../images/letsfindspace1.jpg" />
								<CarouselImage source="../../images/letsfindspace3.jpg" />
							</Carousel>
						</div>
					</div>
					<div className="row mt-3">
						<div className="col">
							<h5 className="text-primary">Idea</h5>
							<p>
								We presented a problem in which multiple people want to group up somewhere, the question is
								how to find the most suitable place for all of them to meet up without making the commute
								unfair for any of them. Using Google's APIs, we can allow the user to enter their location
								and map it on a graph in which (x, y) are represented by latitude and longitude. With some
								basic Math, we can find an average point. Finally, we search for the closest suitable
								coffeeshop, park, or library to this point and then we display to the user on a map.
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<h5 className="text-primary">Outcome</h5>
							<p>
								Even though we did not win any prizes, we achieved our goal. Through 48 hours of hard work
								in problem solving and using technology that is new to us such as NodeJS, React, Git, and
								Google APIs, we were still able to finish the complete project and present it to the judges.
								This experience also made me confident with my quick learning skills, to be able to adapt
								and apply what I have learned in no time.
							</p>
						</div>
					</div>
					<div className="row mt-3">
						<div className="col">
							<a href="http://letsfind.space/" target="_blank" className="btn btn-primary float-right" role="button">Visit Website</a>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default LetsFindSpace