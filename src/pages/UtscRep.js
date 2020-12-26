import React from 'react'

import $ from 'jquery'
import tooltip from 'bootstrap'

import Carousel from '../components/Carousel'
import CarouselImage from '../components/CarouselImage'

class UtscRep extends React.Component {
	componentDidMount() {
		document.title = 'Bassel Ashi: UTSC Repository';
		$(".tooltip").tooltip('dispose');
		$('[data-toggle="tooltip"]').tooltip();
	}

	render() {
		return (
			<div className="container-md my-3">
				<div className="jumbotron">
					<div className="text-center">
						<img className="utscrep-logo" data-html="true" src="../../images/utscrep-logo.png" data-toggle="tooltip" rel="tooltip" data-placement="right" title="" data-original-title="<u>Fun fact:</u> I even learned Adobe Illustrator to make that logo. The colours represent the original UTSC logo colours. The arrows represent uploading and downloading files, hence the contribution" />
					</div>
					<hr className="my-4" />
					<div className="row">
						<div className="col">
							<div className="row">
								<div className="col-lg-6 col-md-12">
									<Carousel>
										<CarouselImage source="../../images/utscrep1.jpg" />
										<CarouselImage source="../../images/utscrep2.jpg" />
										<CarouselImage source="../../images/utscrep3.jpg" />
										<CarouselImage source="../../images/utscrep4.jpg" />
									</Carousel>
								</div>
								<div className="col-lg-6 col-md-12 mt-lg-0 mt-3">
									<h5 className="text-primary">Source</h5>
									<p>Also known as UTSCRep, UTSC Repository is an online contributive library that allows students to share course material at the University of Toronto Scarborough. From my experience, it is difficult for students, especially first years, to know about a course before taking it, or to get enough resources for the course to perform better. Therefore, I came up with the idea of this website.</p>
								</div>
							</div>
							<div className="row mt-3">
								<div className="col">
									<h5 className="text-primary">Technical</h5>
									<p>The project took me 6 weeks to implement. It operates on ASP.NET Web Forms with MSSQL. To give an insight on the effort that was put into making UTSCRep possible, it uses hash with salt to secure users' sensitive data. Files are stored securely on the web server, preventing users from accessing files just with a link. Stored procedures and views are heavily used through the whole website's interaction with the database, allowing maximum security to prevent SQL injections and increasing performance. As small as the website seems to the normal user, it is way in size in terms of user ranks and their permissions. For example, a contributor earns more permissions to have less constraints when uploading material. Administrators have access to a customized administration panel, preventing the need of any direct interaction through editing the database. Currently, the website stores 1.2gb of data, with around 100 users. I consider this website as a complete success. Unfortunately, further development is tentative due to time constraint. </p>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<a href="https://utscrep.ca" target="_blank" className="btn btn-primary float-right" role="button">Visit
									Website</a>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default UtscRep