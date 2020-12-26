import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import $ from 'jquery'
import tooltip from 'bootstrap'

class WorkItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			glow: ''
		}
	}

	componentDidMount() {
		$(".tooltip").tooltip('dispose');
		$('[data-toggle="tooltip"]').tooltip();
	}

	triggerCardGlow = () => {
		if (this.state.glow == 'btn-outline-secondary-hover') {
			this.setState({
				glow: ''
			});
		} else {
			this.setState({
				glow: 'btn-outline-secondary-hover'
			});
		}
	}

	handleClick = () => {
		this.props.history.push(`/mywork/${this.props.link}/`);
	}

	render() {
		return (
			<div className="col-md-6" onClick={this.handleClick} onTouchEndCapture={this.handleClick}>
				<div className="card mb-3 glow-hover" onTouchStartCapture={this.triggerCardGlow} onMouseOver={this.triggerCardGlow} onMouseOut={this.triggerCardGlow}>
					<div className=" card-header">{this.props.title}</div>
					<div className="image-container">
						<img src={"../../" + this.props.imageSource} className="image" data-toggle="tooltip" rel="tooltip" data-placement={this.props.tooltipPlacement} data-html="true" title="" data-original-title={this.props.tooltipTitle} />
					</div>
					<div className="card-body">
						<p>{this.props.description}</p>
						<Link to='/mywork/smartlobby/' className={"btn btn-outline-secondary float-right " + this.state.glow}>Read More</Link>
					</div>
				</div>
			</div>
		)
	}
}

export default withRouter(WorkItem)