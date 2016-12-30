import React from "react";
import { Link } from "react-router";
import Select from 'react-select';
// import 'react-select/dist/react-select.css';


export default class Home extends React.Component {

	constructor() {
		super();

		this.state = {
			search: "-----------------------------------------"
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


	changeState(value) {
		this.setState({search: value})
	}

	render() {
		return (
			<div>
				<div class="row">
					<div class="col-md-1">
						<Select.Async
						    name="form-field-name"
						    value={this.state.search}
						    onChange={this.changeState.bind(this)}
						    loadOptions={this.getOptions.bind(this)}
						/>
					</div>
					<div class="col-md-1">
						<button type="button" class="btn btn-default" aria-label="Left Align">
							<span class="glyphicon glyphicon-menu-right" aria-hidden="true" />
						</button>
					</div>
				</div>
			</div>
		)
	}
}

