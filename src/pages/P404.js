import React from 'react'

import WorkItem from '../components/WorkItem'

class P404 extends React.Component {
	componentDidMount() {
		document.title = 'Bassel Ashi: 404!';
	}

	render() {
		return (
			<div className="container-md my-3">
				<div className="jumbotron">
					<div className="row">
						<div className="col text-center">
							<img className="notfound-image" src="../../images/404.png" />
						</div>
					</div>
					<div className="row">
						<div className="col text-center mt-3">
							<h5 className="mb-0">We ain't got nothing here, boss!</h5>
						</div>
					</div>

				</div>
			</div>
		)
	}
}

export default P404