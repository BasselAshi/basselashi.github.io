import React from 'react'

import $ from 'jquery'
import jQueryBridget from 'jquery-bridget'
import flickity from 'flickity';
import 'flickity-fullscreen'

class Carousel extends React.Component {
	componentDidMount() {
		flickity.setJQuery($);
		jQueryBridget('flickity', flickity, $);
		$('.carousel').flickity({
			fullscreen: true,
			autoPlay: true
		});
	}

	render() {
		const childrenWithProps = React.Children.map(this.props.children, child => {
			if (React.isValidElement(child)) {
				return React.cloneElement(child, { cellClassName: this.props.cellClassName });
			}
			return child;
		});

		return (
			<div className="carousel">
				{childrenWithProps}
			</div>
		)
	}
}

export default Carousel