import React from 'react'

import WorkItem from '../components/WorkItem'

class MyWork extends React.Component {
	componentDidMount() {
		document.title = 'Bassel Ashi: My Work';
	}

	render() {
		return (
			<div className="container-md my-3">
				<div className="row">
					<WorkItem title="FGF SmartLobby" link="smartlobby" imageSource="images/smartlobby1.png" description="A visitor management solution with badge printing" tooltipPlacement="left" tooltipTitle="SmartLobby was completely individually developed during a span of 3 months during my co-op work term. The feedback from management and coworkers was fantastic!" />
					<WorkItem title="Let's Find Space" link="letsfindspace" imageSource="images/letsfindspace1.jpg" description="A solution for optimizing the best meeting spot among people" tooltipPlacement="right" tooltipTitle="This was taken during Hack the Valley 4, a hackathon hosted at U of T Scarborough every February" />
					<WorkItem title="UTSC Repository" link="utscrep" imageSource="images/utscrep1.jpg" description="An online contribution-based library for UTSC students" tooltipPlacement="left" tooltipTitle="<u>Fun fact:</u> All wallpapers and images on the website are taken on campus!" />
					<WorkItem title="vGRAS" link="vgras" imageSource="images/vgras1.jpg" description="A visual representation of live charts to track progress" tooltipPlacement="right" tooltipTitle="At the end of my internship where I built this project, I received a Samsung Gear S2 smartwatch as a gift!" />
				</div>
			</div>
		)
	}
}

export default MyWork