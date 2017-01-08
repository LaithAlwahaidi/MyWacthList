import React from "react";
// import { Link } from "react-router";
import Navbar from "./Navbar";

export default class Layout extends React.Component {

	render() {
		return (
			<div>
				<Navbar />

				<div className="container">
					{this.props.children}
				</div>
			</div>
		)
	}
}

Layout.propTypes = {
	"children": React.PropTypes.element
}
