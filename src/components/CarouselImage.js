import React from 'react'

class CarouselImage extends React.Component {
	render() {
		return (
			<div className={"carousel-cell " + this.props.cellClassName}>
				<img src={this.props.source} />
			</div>
		)
	}
}

export default CarouselImage