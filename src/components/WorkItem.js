import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import $ from 'jquery'
import tooltip from 'bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

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
			this.state.readMore.text = "Blog in progress...";
			this.state.readMore.italicClass = "font-italic";
			this.state.readMore.disabledClass = "disabled";
			this.state.visitWebsite = true
		}

		if (this.props.githubLink != null) {
			this.state.visitGithub = true;
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
	}

	render() {
		return (
			<div className="col-md-6">
				<div className="card mb-3 glow-hover" onTouchStart={this.triggerCardGlow} onTouchEnd={this.triggerCardGlow} onMouseOver={this.triggerCardGlow} onMouseOut={this.triggerCardGlow}>
					<div className=" card-header">{this.props.title}
						{this.state.visitGithub &&
							<a target="_blank" className="float-right text-danger" href={this.props.githubLink}>
								<FontAwesomeIcon className="mr-1" icon={faGithub} />Github
							</a>
						}
					</div>
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