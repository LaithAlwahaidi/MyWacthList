import React from "react";
// import { Link } from "react-router";
// import Select from 'react-select';
// import 'react-select/dist/react-select.css';


export default class Info extends React.Component {

	static propTypes = {
		"id" : React.PropTypes.string
	};

	constructor() {
		super();

		this.state = {
			id: ""
		}

	}

	showInfo() {
		console.log(this.props.id)
		if (this.props.id == 0) {
			"SELECT A MOVIE"
		}
		else {
			this.props.id
		}
	}

	render() {
		return (
			<div>
				{this.props.id}
				{this.props.name}
			</div>
		);
	}
}
