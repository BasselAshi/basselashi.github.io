import React from 'react'

class Badge extends React.Component {
	render() {
		return (
			<div className="col-md-6">
				<div className="row">
					<div className="col">
						<hr className={"bg-" + this.props.colour} />
						{this.props.children}
						<hr className={"bg-" + this.props.colour + " mb-0"} />
					</div>
				</div>
				<div className={"row mt-3 text-" + this.props.colour}>
					<div className="col text-right">
						<p className="mb-0">{this.props.name}</p>
						<i>{this.props.position}</i>
					</div>
					<div className="col-auto pl-0">
						<img className={"rec-profile border float-right border-" + this.props.colour} src={this.props.image} />
					</div>
				</div>
			</div>
		)
	}
}

export default Badge