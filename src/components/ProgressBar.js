import React from 'react'

class ProgressBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			colour: 'bg-' + this.props.colour
		}
	}

	render() {
		return (
			<div className="progress mt-3">
				<div className={"progress-bar " + this.state.colour} role="progressbar" style={{ width: this.props.width }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{this.props.text}</div>
			</div>
		)
	}
}

export default ProgressBar