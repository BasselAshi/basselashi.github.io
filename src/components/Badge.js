import React from 'react'

class Badge extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			colour: 'badge-' + this.props.colour
		}
	}

	render() {
		return (
			<span className={'badge mr-1 ' + this.state.colour}>{this.props.text}</span>
		)
	}
}

export default Badge