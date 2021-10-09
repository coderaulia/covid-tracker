import React, { Component } from "react";
import Data from "../parts/Data";
import Header from "../parts/Header";

export default class Home extends Component {
	state = {
		dataCovid: [],
	};

	componentDidMount() {
		fetch("indonesia/", {
			method: "GET",
			headers: {
				"access-control-allow-origin": "*",
				"Content-type": "application/json; charset=UTF-8",
			},
		})
			.then((res) => res.json())
			.then((data) => {
				this.setState({ dataCovid: data });
			})
			.catch(console.log);
	}

	render() {
		return (
			<>
				<Header></Header>
				<Data dataCovid={this.state.dataCovid}></Data>
			</>
		);
	}
}
