import React from "react";
// import { Link } from "react-router";
import Select from 'react-select';
import Info from "./Info";


export default class Home extends React.Component {

	constructor() {
		super();
		this.search = ""
		this.searchId = ""

		this.state = {
			search: "",
			id: ""
		}
	}

	getOptions(input, callback) {

	fetch('http://localhost:3000/search?s=' + input)
		.then((response) => response.json())
		.then((responseJson) => {
		// console.log(responseJson)
			var options = [];
			for (var m in responseJson.Search) {
				// console.log(responseJson.Search[m].Title, options)
				options.push({value: responseJson.Search[m].imdbID, label: responseJson.Search[m].Title})
			}
			console.log(options)
				  callback(null, {
					  options: options,
					  complete: true
				  })
			}
		)
	}

	// TODO: Finish this
	getOption(input) {
		fetch('http://localhost:3000/search?id=' + input)
			.then((response) => response.json())
			.then((responseJson) => {
				console.log(responseJson);
			})
	}


	changeState(value) {
		this.setState({search: value.label, id: value.value})
		console.log(this.state, this.state.search)
		// this.forceUpdate()
	}

	showInfo() {
		this.forceUpdate()
	}

	render() {
		return (
			<div>
				<div class="row">
					<div class="col-sm-11">
						<Select.Async
							name="form-field-name"
							value={this.state.search}
							onChange={this.changeState.bind(this)}
							loadOptions={this.getOptions.bind(this)}
						/>
					</div>
					<div class="col-sm-1">
						<button type="button" class="btn btn-default" aria-label="Left Align" onClick={() => {this.showInfo()}}>
							<span class="glyphicon glyphicon-menu-right" aria-hidden="false" />
						</button>
					</div>
				</div>
				<Info id={this.state.id} />
			</div>
		)
	}
}
