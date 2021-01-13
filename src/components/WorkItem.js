import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import $ from 'jquery'
import tooltip from 'bootstrap'

class WorkItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			glow: '',
			readMore: {
				enabled: true,
				text: "Read More",
				italicClass: "",
				disabledClass: ""
			},
			visitWebsite: false
		}

		if (this.props.underconstruction) {
			this.state.readMore.enabled = false;
			this.state.readMore.text = "Under Construction";
			this.state.readMore.italicClass = "font-italic";
			this.state.readMore.disabledClass = "disabled";
			this.state.visitWebsite = true
		}
	}

	componentDidMount() {
		$(".tooltip").tooltip('dispose');
		$('[data-toggle="tooltip"]').tooltip();
	}

	triggerCardGlow = () => {
		if (!this.state.readMore.enabled) {
			return;
		}

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
		if (!this.state.readMore.enabled) {
			return;
		}

		this.props.history.push(`/mywork/${this.props.link}/`);
	}

	render() {
		return (
			<div className="col-md-6" onMouseDown={this.handleClick}>
				<div className="card mb-3 glow-hover" onTouchStart={this.triggerCardGlow} onTouchEnd={this.triggerCardGlow} onMouseOver={this.triggerCardGlow} onMouseOut={this.triggerCardGlow}>
					<div className=" card-header">{this.props.title}</div>
					<div className="image-container">
						<img src={"../../" + this.props.imageSource} className="image" data-toggle="tooltip" rel="tooltip" data-placement={this.props.tooltipPlacement} data-html="true" title="" data-original-title={this.props.tooltipTitle} />
					</div>
					<div className="card-body">
						<p>{this.props.description}</p>
						<Link to={`/mywork/${this.props.link}/`} className={`btn btn-outline-secondary float-right ${this.state.glow} ${this.state.readMore.italicClass} ${this.state.readMore.disabledClass}`}>{this.state.readMore.text}</Link>
						{this.state.visitWebsite &&
							<a target="_blank" className="btn btn-outline-success float-right mr-2" href={this.props.websiteLink}>Visit Website</a>
						}
					</div>
				</div>
			</div>
		)
	}
}

export default withRouter(WorkItem)